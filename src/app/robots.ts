import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/*?*package=", // Prevent duplicate search console indexing on parameter queries
        ],
      },
      {
        userAgent: [
          "Mediapartners-Google",
          "AdsBot-Google",
          "AdsBot-Google-Mobile",
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Storebot-Google",
          "Google-Extended",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "CCBot",
          "FacebookExternalHit",
          "Twitterbot"
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
