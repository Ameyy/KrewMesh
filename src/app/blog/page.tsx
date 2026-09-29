import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, allBlogCategories, allBlogTags } from "@/data/blog";
import { BookOpen, ArrowLeft } from "lucide-react";
import { BlogFilterClient } from "./components/BlogFilterClient";

export const metadata: Metadata = {
  title: "Blog & Engineering Dispatches | Krew / Mesh",
  description:
    "Insights on modern web development, Next.js architecture, UI/UX design systems, AI search optimization (LLM GEO), and autonomous agents from the Krew / Mesh studio team.",
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

      <main className="relative z-10 min-h-screen bg-background text-foreground pt-36 pb-24 selection:bg-white/20">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[150px] opacity-25 rounded-full bg-[#ef671c]" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Return Home</span>
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.05] border border-white/10 text-[#ffc691]">
              <BookOpen className="size-3" />
              <span>Studio Dispatches</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              Engineering &amp; Design Dispatches
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
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
