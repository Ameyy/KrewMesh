import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, allBlogCategories, allBlogTags } from "@/data/blog";
import { BookOpen, ArrowLeft } from "lucide-react";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
import { BlogFilterClient } from "./components/BlogFilterClient";

export const metadata: Metadata = {
  title: "Blog & Engineering Dispatches | Krew / Mesh",
  description:
    "Insights on modern web development, Next.js architecture, UI/UX design systems, AI search optimization (LLM GEO), and scalable digital platforms.",
  keywords: [
    "Krew Mesh blog",
    "Next.js vs WordPress",
    "LLM GEO guide",
    "design systems ROI",
    "AI agents enterprise",
    "WebGL Three.js eCommerce",
    "SaaS architecture multi-tenant",
    "web development insights",
    "creative tech articles"
  ],
  alternates: {
    canonical: "https://krewmesh.agency/blog",
  },
  openGraph: {
    title: "Blog & Engineering Dispatches | Krew / Mesh",
    description:
      "Deep dives into Next.js architecture, Generative Engine Optimization (GEO), UI/UX design systems, and modern digital craft.",
    url: "https://krewmesh.agency/blog",
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const siteUrl = "https://krewmesh.agency";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteUrl}/blog/#blog`,
        name: "Krew / Mesh Engineering & Design Dispatches",
        description: "Insights on Next.js, LLM GEO, AI search, and UI/UX design systems.",
        url: `${siteUrl}/blog`,
        publisher: {
          "@type": "Organization",
          name: "Krew / Mesh",
          url: siteUrl,
          logo: `${siteUrl}/krewmesh-logo-white.png`,
        },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${siteUrl}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 min-h-screen bg-[#E6D5BD] text-[#101010] pt-8 sm:pt-12 pb-24 selection:bg-[#D5360C]/20">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[150px] opacity-20 rounded-full bg-[#D5360C]" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          {/* Heading */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#101010] leading-tight">
              Engineering &amp; Design Dispatches
            </h1>
            <p className="text-lg sm:text-xl text-[#101010]/80 max-w-2xl font-light leading-relaxed">
              In-depth articles on high-speed web architecture, AI search optimization (LLM GEO), autonomous systems, and interactive WebGL experiences.
            </p>
          </div>

          {/* Dynamic Filter, Search, Sort & Post Grid */}
          <BlogFilterClient
            posts={blogPosts}
            categories={allBlogCategories}
            tags={allBlogTags}
          />
        </div>
      </main>
    </>
  );
}
