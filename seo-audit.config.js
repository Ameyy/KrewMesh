module.exports = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  sitemap: '/sitemap.xml',
  robots: '/robots.txt',
  allowedHosts: ['localhost', '127.0.0.1', 'krewmesh.com'],
  excludedPaths: ['/api/', '/_next/', '/favicon.ico', '/icon.png'],
  ignoredParameters: ['utm_', 'ref', 'session'],
  maxUrls: 1000,
  crawlDepth: 3,
  timeoutMs: 10000,
  concurrency: 5
};
