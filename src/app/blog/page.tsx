import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BookOpen, Clock, Calendar, ArrowRight, ArrowLeft, Tag, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Engineering Dispatches | Krew / Mesh",
  description:
    "Insights on modern web development, Next.js architecture, UI/UX design systems, and Generative Engine Optimization (LLM GEO) from the Krew / Mesh studio team.",
  keywords: [
    "Krew Mesh blog",
    "Next.js vs WordPress",
    "LLM GEO guide",
    "design systems ROI",
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
          <div className="mb-14 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              Engineering &amp; Design Dispatches
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              In-depth articles on high-speed web architecture, AI search optimization (LLM GEO), and scalable UI/UX systems.
            </p>
          </div>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center rounded-md bg-[#ef671c]/10 px-2.5 py-1 text-xs font-medium text-[#ffc691] border border-[#ef671c]/25">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block group/title">
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover/title:text-[#ffc691] transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Calendar className="size-3 text-neutral-500" />
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#ffc691] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
