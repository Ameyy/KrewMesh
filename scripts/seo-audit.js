const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const config = require('../seo-audit.config.js');

const baseUrl = config.baseUrl;
const visited = new Set();
const queue = [baseUrl];
const results = [];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeUrl(urlStr) {
  try {
    const url = new URL(urlStr, baseUrl);
    url.hash = ''; // ignore hashes
    // strip ignored params
    config.ignoredParameters.forEach(param => url.searchParams.delete(param));
    return url.href;
  } catch (e) {
    return null;
  }
}

async function fetchPage(url) {
  const start = Date.now();
  try {
    const response = await fetch(url, { redirect: 'manual' });
    const time = Date.now() - start;
    
    return {
      status: response.status,
      headers: response.headers,
      url: response.url || url, // If fetch followed redirects (even though manual, just in case)
      time,
      html: await response.text(),
      location: response.headers.get('location')
    };
  } catch (error) {
    return { status: 500, time: Date.now() - start, error: error.message };
  }
}

function analyzeHtml(html, url) {
  const dom = new JSDOM(html, { url });
  const document = dom.window.document;

  const title = document.title;
  const metaDescription = document.querySelector('meta[name="description"]')?.content;
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  const robots = document.querySelector('meta[name="robots"]')?.content;
  const h1 = Array.from(document.querySelectorAll('h1')).map(el => el.textContent.trim());
  const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(el => el.textContent);
  
  const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
  const images = Array.from(document.querySelectorAll('img')).map(img => ({
    src: img.src,
    alt: img.alt,
    loading: img.getAttribute('loading')
  }));

  return {
    title,
    metaDescription,
    canonical,
    robots,
    h1,
    jsonLdCount: jsonLdScripts.length,
    links,
    images
  };
}

async function crawl() {
  console.log(`Starting SEO Audit for ${baseUrl}...`);
  
  // Try to fetch robots.txt and sitemap first
  try {
    const robotsRes = await fetch(`${baseUrl}${config.robots}`);
    console.log(`Robots.txt status: ${robotsRes.status}`);
    const sitemapRes = await fetch(`${baseUrl}${config.sitemap}`);
    console.log(`Sitemap.xml status: ${sitemapRes.status}`);
    
    // Minimal sitemap parsing to add URLs to queue
    if (sitemapRes.status === 200) {
      const sitemapXml = await sitemapRes.text();
      const urls = sitemapXml.match(/<loc>(.*?)<\/loc>/g)?.map(tag => tag.replace(/<\/?loc>/g, ''));
      if (urls) {
        urls.forEach(u => {
          const norm = normalizeUrl(u);
          if (norm && !visited.has(norm) && !queue.includes(norm)) {
            queue.push(norm);
          }
        });
      }
    }
  } catch(e) {
    console.error('Error fetching robots/sitemap:', e);
  }

  while (queue.length > 0 && visited.size < config.maxUrls) {
    const currentUrl = queue.shift();
    if (visited.has(currentUrl)) continue;
    visited.add(currentUrl);

    // Skip excluded paths
    if (config.excludedPaths.some(p => currentUrl.includes(p))) {
      continue;
    }

    console.log(`Crawling: ${currentUrl}`);
    const pageData = await fetchPage(currentUrl);

    let analysis = {};
    let newLinks = [];

    if (pageData.status === 200 && pageData.html) {
      analysis = analyzeHtml(pageData.html, currentUrl);
      newLinks = analysis.links;
    }

    results.push({
      url: currentUrl,
      status: pageData.status,
      time: pageData.time,
      redirectLocation: pageData.location,
      ...analysis
    });

    // Enqueue internal links
    newLinks.forEach(link => {
      const norm = normalizeUrl(link);
      if (norm && norm.startsWith(baseUrl) && !visited.has(norm) && !queue.includes(norm)) {
         queue.push(norm);
      }
    });

    await delay(100); // Politeness delay
  }

  console.log('Crawl finished. Generating report...');
  generateReport();
}

function generateReport() {
  const reportPathJson = path.join(process.cwd(), 'seo-report.json');
  
  let errors = 0;
  let warnings = 0;
  let redirects = 0;
  let canonicalIssues = 0;

  results.forEach(r => {
    if (r.status >= 400) errors++;
    if (r.status >= 300 && r.status < 400) redirects++;
    if (r.status === 200 && (!r.title || !r.metaDescription)) warnings++;
    if (r.status === 200 && (!r.canonical || r.canonical !== r.url)) canonicalIssues++;
  });

  const summary = {
    crawledAt: new Date().toISOString(),
    totalUrls: visited.size,
    errors,
    warnings,
    redirects,
    canonicalIssues,
    results
  };

  fs.writeFileSync(reportPathJson, JSON.stringify(summary, null, 2));
  console.log(`Report generated at: ${reportPathJson}`);
}

crawl().catch(console.error);
