import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts, allBlogSlugs } from "@/data/blog";
import { ServiceFaqAccordion } from "@/app/services/[slug]/components/ServiceFaqAccordion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight
} from "lucide-react";

export async function generateStaticParams() {
  return allBlogSlugs.map((slug) => ({ slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Krew / Mesh" };
  }

  const siteUrl = "https://krewmesh.agency";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Krew / Mesh`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: postUrl,
    },
    authors: [{ name: post.author.name, url: `${siteUrl}/about` }],
    creator: post.author.name,
    publisher: "Krew / Mesh",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "KREW / MESH",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `${siteUrl}/krewmesh-logo.png`,
          width: 1200,
          height: 630,
          alt: `${post.title} - Krew / Mesh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/krewmesh-logo.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://krewmesh.agency";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  // Rich Schema.org Article + FAQPage + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}/#article`,
        isPartOf: {
          "@type": "Blog",
          "@id": `${siteUrl}/blog/#blog`,
          name: "Krew / Mesh Engineering Dispatches",
        },
        headline: post.title,
        description: post.excerpt,
        url: postUrl,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        mainEntityOfPage: postUrl,
        inLanguage: "en-US",
        keywords: post.tags.join(", "),
        articleSection: post.category,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          url: `${siteUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "Krew / Mesh",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/krewmesh-logo-white.png`,
          },
        },
        image: `${siteUrl}/krewmesh-logo.png`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 min-h-screen bg-background text-foreground pt-36 pb-24 selection:bg-white/20">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[400px] blur-[150px] opacity-20 rounded-full bg-[#ef671c]" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>All Articles</span>
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#ffc691] bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Article Header */}
          <header className="mb-12 space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author and Metadata Bar */}
            <div className="pt-4 border-t border-b border-white/[0.08] py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs border border-white/20">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{post.author.name}</div>
                  <div className="text-neutral-400 text-[11px]">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-neutral-500" />
                  <span>{post.publishedAt}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-[#ffc691]" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-white mb-4">
              <Layers className="size-4 text-[#ffc691]" />
              <span>Table of Contents</span>
            </div>
            <nav>
              <ul className="space-y-2.5 text-sm text-neutral-300">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="hover:text-[#ffc691] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Article Main Content */}
          <div className="space-y-12 leading-relaxed text-neutral-300">
            {post.content.map((sec) => (
              <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white pt-4">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
                {sec.keyTakeaway && (
                  <div className="p-4 sm:p-5 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-start gap-3 my-4">
                    <CheckCircle2 className="size-5 text-[#ef671c] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#ffc691] block mb-1">
                        Key Takeaway
                      </span>
                      <p className="text-sm font-medium text-white">
                        {sec.keyTakeaway}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mr-2 flex items-center gap-1">
                <Tag className="size-3" /> Tags:
              </span>
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Internal Linking: Related Services */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ffc691] block mb-2">
              Related Capabilities &amp; Services
            </span>
            <h3 className="text-xl font-bold text-white uppercase mb-4">
              Bring These Systems To Your Business
            </h3>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Krew / Mesh pairs high-speed Next.js engineering with bespoke UI/UX craft to help forward-thinking companies launch category-defining digital products.
            </p>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((svc, idx) => (
                <Link
                  key={idx}
                  href={svc.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#ffc691]/50 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>{svc.title}</span>
                  <ArrowUpRight className="size-3.5 text-[#ffc691]" />
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 pt-12 border-t border-white/[0.08]">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Direct Answers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                Frequently Asked Questions
              </h3>
            </div>
            <ServiceFaqAccordion faqs={post.faqs} accentColor="#ef671c" />
          </section>

          {/* Read Next Section */}
          {otherPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-white/[0.08]">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffc691] block mb-2">
                        {other.category}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-[#ffc691] transition-colors leading-snug">
                        {other.title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                      <span>{other.readTime}</span>
                      <span className="flex items-center gap-1 font-semibold text-white group-hover:text-[#ffc691]">
                        Read <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
