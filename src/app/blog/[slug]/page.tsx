import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts, allBlogSlugs } from "@/data/blog";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
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
    title: post.seoTitle || `${post.title} | Krew / Mesh`,
    description: post.metaDescription || post.excerpt,
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

      <main className="relative z-10 min-h-screen bg-[#E6D5BD] text-[#101010] pt-8 sm:pt-12 pb-24 selection:bg-[#D5360C]/20">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[400px] blur-[150px] opacity-15 rounded-full bg-[#D5360C]" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6">

          {/* Article Header */}
          <header className="mb-12 space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#101010]/80 font-light leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author and Metadata Bar */}
            <div className="pt-4 border-t border-b border-[#101010]/15 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#101010]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#101010] flex items-center justify-center font-bold text-[#E6D5BD] text-xs border border-[#101010]">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#101010] font-bold">{post.author.name}</div>
                  <div className="text-[#101010]/70 text-[11px]">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-[#D5360C]" />
                  <span>{post.publishedAt}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-[#D5360C]" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/15 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#101010] mb-4 font-bold">
              <Layers className="size-4 text-[#D5360C]" />
              <span>Table of Contents</span>
            </div>
            <nav>
              <ul className="space-y-2.5 text-sm text-[#101010]/80">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="hover:text-[#D5360C] transition-colors flex items-center gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] shrink-0" />
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Article Main Content */}
          <div className="space-y-12 leading-relaxed text-[#101010]/85">
            {post.content.map((sec) => (
              <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] pt-4">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-[#101010]/85 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
                {sec.keyTakeaway && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#D5360C]/10 border border-[#D5360C]/30 flex items-start gap-3 my-4">
                    <CheckCircle2 className="size-5 text-[#D5360C] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D5360C] block mb-1 font-bold">
                        Key Takeaway
                      </span>
                      <p className="text-sm font-semibold text-[#101010]">
                        {sec.keyTakeaway}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-[#101010]/15">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#101010]/70 mr-2 flex items-center gap-1 font-semibold">
                <Tag className="size-3 text-[#D5360C]" /> Tags:
              </span>
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-md bg-[#101010]/[0.05] border border-[#101010]/15 text-[#101010] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Internal Linking: Related Services */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#101010] text-[#E6D5BD]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D5360C] block mb-2 font-bold">
              Related Capabilities &amp; Services
            </span>
            <h3 className="text-xl font-bold text-[#E6D5BD] uppercase mb-4">
              Bring These Systems To Your Business
            </h3>
            <p className="text-sm text-[#E6D5BD]/80 mb-6 leading-relaxed">
              Krew / Mesh pairs high-speed Next.js engineering with bespoke UI/UX craft to help forward-thinking companies launch category-defining digital products.
            </p>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((svc, idx) => (
                <Link
                  key={idx}
                  href={svc.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E6D5BD]/20 bg-[#E6D5BD]/10 hover:bg-[#D5360C] hover:border-[#D5360C] text-[#E6D5BD] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>{svc.title}</span>
                  <ArrowUpRight className="size-3.5 text-[#E6D5BD]" />
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 pt-12 border-t border-[#101010]/15">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-bold">
                Direct Answers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] mt-1">
                Frequently Asked Questions
              </h3>
            </div>
            <ServiceFaqAccordion faqs={post.faqs} accentColor="#D5360C" />
          </section>

          {/* Read Next Section */}
          {otherPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#101010]/15">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#101010] mb-6">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="group p-6 rounded-2xl bg-[#101010] text-[#E6D5BD] border border-[#101010] hover:border-[#D5360C] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5360C] block mb-2 font-bold">
                        {other.category}
                      </span>
                      <h4 className="text-base font-bold text-[#E6D5BD] group-hover:text-[#D5360C] transition-colors leading-snug">
                        {other.title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E6D5BD]/15 flex items-center justify-between text-xs text-[#E6D5BD]/70">
                      <span>{other.readTime}</span>
                      <span className="flex items-center gap-1 font-bold text-[#E6D5BD] group-hover:text-[#D5360C]">
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
