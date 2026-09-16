import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { ECOM_PRODUCTS } from "./demo/ecommerce/data/products";

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
      url: `${BASE_URL}/careers`,
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

  // E-Commerce interactive demo ecosystem
  const demoStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/demo/ecommerce`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/demo/ecommerce/shop`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/demo/ecommerce/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // E-Commerce product pages
  const demoProductRoutes: MetadataRoute.Sitemap = ECOM_PRODUCTS.map(
    (product) => ({
      url: `${BASE_URL}/demo/ecommerce/product/${product.id}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...demoStaticRoutes,
    ...demoProductRoutes,
  ];
}
