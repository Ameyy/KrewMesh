import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.com";

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
      url: `${BASE_URL}/sitemap`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
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

  // Active Demo showcase pages
  const demoSlugs = ["clinic", "business", "cafe", "interior-design"];
  const demoRoutes: MetadataRoute.Sitemap = demoSlugs.map((slug) => ({
    url: `${BASE_URL}/demo/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...demoRoutes,
  ];
}
