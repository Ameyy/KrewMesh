import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { allLocalSeoSlugs } from "@/data/local-seo";
import { allBlogSlugs } from "@/data/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

/**
 * Generates XML sitemap conforming to the Sitemaps XML protocol (sitemaps.org)
 * and Google Search Console indexing guidelines.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core high-priority landing and interaction pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sitemap`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/b2b-partnerships`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // Dynamic Service pages (SEO targeted)
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  // Local SEO Regional Landing Pages (Indore & Pune)
  const localSeoRoutes: MetadataRoute.Sitemap = allLocalSeoSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Blog Posts (LLM GEO & Educational Authority)
  const blogRoutes: MetadataRoute.Sitemap = allBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...localSeoRoutes,
    ...blogRoutes,
  ];
}
