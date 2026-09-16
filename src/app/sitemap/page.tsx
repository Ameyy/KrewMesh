import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import GlobalCanvas from "@/components/GlobalCanvas";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { SitemapQuickActions } from "./components/SitemapQuickActions";
import { servicesData } from "@/data/services";
import { ECOM_PRODUCTS } from "../demo/ecommerce/data/products";
import {
  Compass,
  ArrowRight,
  Layers,
  Sparkles,
  ShoppingBag,
  Briefcase,
  FileCheck2,
  Globe,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap & Website Directory | Krew / Mesh",
  description:
    "Explore the complete website architecture and sitemap for Krew / Mesh. Browse our services, portfolio case studies, career openings, e-commerce demos, and Google Search Console indexing feeds.",
  alternates: {
    canonical: "https://krewmesh.com/sitemap",
  },
  openGraph: {
    title: "Sitemap & Website Directory | Krew / Mesh",
    description:
      "Explore the complete website architecture and sitemap for Krew / Mesh. Browse our services, portfolio case studies, career openings, and search engine indexing feeds.",
    url: "https://krewmesh.com/sitemap",
    siteName: "Krew / Mesh",
    type: "website",
  },
};

export default function SitemapPage() {
  const servicesList = Object.values(servicesData);

  const mainPages = [
    {
      title: "Home & Studio Overview",
      href: "/",
      desc: "Creative technology studio homepage featuring client work reel, capabilities overview, agency manifesto, and interactive experiences.",
      badge: "Landing Page",
      priority: "1.0",
      changefreq: "Daily",
    },
    {
      title: "Services & Capabilities",
      href: "/#services",
      desc: "Overview of our core practices across brand strategy, product design, marketing, full-stack engineering, AI, and SaaS.",
      badge: "Practices",
      priority: "0.9",
      changefreq: "Weekly",
    },
    {
      title: "Featured Work & Portfolio",
      href: "/#work",
      desc: "Showcase of recent client partnerships, bespoke digital products, mobile applications, and visual identities.",
      badge: "Case Studies",
      priority: "0.9",
      changefreq: "Weekly",
    },
    {
      title: "About Krew / Mesh",
      href: "/#about",
      desc: "Our mission, philosophy, culture, and collaborative approach to engineering modern digital products.",
      badge: "Agency",
      priority: "0.8",
      changefreq: "Monthly",
    },
    {
      title: "Careers & Join the Team",
      href: "/careers",
      desc: "Discover open roles in design, engineering, and digital growth. Learn about our perks, culture, and hiring process.",
      badge: "Hiring",
      priority: "0.8",
      changefreq: "Weekly",
    },
    {
      title: "Contact & Project Inquiry",
      href: "/contact",
      desc: "Get in touch with our team for new projects, consultations, quote requests, or technical partnerships.",
      badge: "Inquiry",
      priority: "0.8",
      changefreq: "Monthly",
    },
  ];

  const demoPages = [
    {
      title: "E-Commerce Concept Store",
      href: "/demo/ecommerce",
      desc: "High-performance headless e-commerce demonstration featuring interactive 3D elements, rapid cart flow, and product filtering.",
      badge: "Interactive Demo",
    },
    {
      title: "Demo Product Catalog (Shop)",
      href: "/demo/ecommerce/shop",
      desc: "Filterable product grid with category selectors, search filters, dynamic pricing, and real-time inventory indicators.",
      badge: "Catalog",
    },
    {
      title: "Demo Brand Story & Tech Spec",
      href: "/demo/ecommerce/about",
      desc: "Narrative overview illustrating modern brand storytelling and product showcase methodologies.",
      badge: "Brand Demo",
    },
  ];

  // Schema.org Structured Data for Google Search Console & Crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://krewmesh.com/#website",
        url: "https://krewmesh.com",
        name: "Krew / Mesh",
        description:
          "Creative Technology Studio specializing in Branding, UI/UX, Web & Mobile Development, AI Systems, and SaaS Engineering.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://krewmesh.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sitemap",
            item: "https://krewmesh.com/sitemap",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://krewmesh.com/sitemap#webpage",
        url: "https://krewmesh.com/sitemap",
        name: "Website Sitemap & Architecture Directory | Krew / Mesh",
        description:
          "Complete index of public pages, services, case studies, and search engine crawling feeds.",
        isPartOf: {
          "@id": "https://krewmesh.com/#website",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlobalCanvas />
      <Header />

      <main className="relative min-h-screen bg-[#050505] text-white pt-28 pb-16 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute top-96 right-10 w-[500px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs text-neutral-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-neutral-600" />
            <span className="text-neutral-200 font-medium">Sitemap</span>
          </nav>

          {/* Hero Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-400 mb-4">
              <Compass className="h-3.5 w-3.5" />
              <span>Website Architecture & Indexing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Site Map & Page Directory
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-neutral-400 leading-relaxed">
              This directory provides an organized overview of every public page across Krew / Mesh.
              Built in alignment with Google Search Console standards to ensure transparent navigation
              for both human visitors and automated search crawlers.
            </p>
          </header>

          {/* GSC Quick Actions: XML Sitemap and Robots.txt */}
          <SitemapQuickActions />

          {/* Section 1: Main Pages */}
          <section className="mt-14 mb-16" aria-labelledby="main-pages-heading">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <h2 id="main-pages-heading" className="text-xl font-bold text-white">
                  Main Studio Pages
                </h2>
                <p className="text-xs text-neutral-400">
                  Primary landing areas, studio information, and inquiry channels
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-neutral-300 border border-white/10">
                        {page.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Priority {page.priority}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{page.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {page.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span className="truncate">{page.href}</span>
                    <span className="text-neutral-400">{page.changefreq}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 2: Studio Practices / Services */}
          <section className="my-16" aria-labelledby="services-heading">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <h2 id="services-heading" className="text-xl font-bold text-white">
                  Studio Practices & Services
                </h2>
                <p className="text-xs text-neutral-400">
                  Dedicated service pages detailing our strategy, deliverables, timelines, and FAQs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesList.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-indigo-500/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-300 border border-blue-500/20">
                        {svc.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Priority 0.9
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{svc.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {svc.metaDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {svc.deliverables.slice(0, 3).map((d) => (
                        <span
                          key={d.title}
                          className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-neutral-400"
                        >
                          {d.title}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                      <span>/services/{svc.slug}</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Indexed
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 3: Interactive Experiences & Demos */}
          <section className="my-16" aria-labelledby="demos-heading">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h2 id="demos-heading" className="text-xl font-bold text-white">
                  Interactive Demos & E-Commerce Sandbox
                </h2>
                <p className="text-xs text-neutral-400">
                  Live proof-of-concept storefront demonstrating our full-stack capabilities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {demoPages.map((demo) => (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <div>
                    <span className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-0.5 text-[11px] font-medium text-purple-300 border border-purple-500/20 mb-2.5">
                      {demo.badge}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors flex items-center justify-between">
                      <span>{demo.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {demo.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-500 font-mono">
                    {demo.href}
                  </div>
                </Link>
              ))}
            </div>

            {/* Featured Demo Products List */}
            <div className="rounded-xl border border-white/10 bg-white/[0.015] p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>Individual Demo Product Showcases</span>
                </h4>
                <Link
                  href="/demo/ecommerce/shop"
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View All in Catalog</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {ECOM_PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/demo/ecommerce/product/${prod.id}`}
                    className="group rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div className="text-[11px] font-mono text-neutral-500 uppercase">
                      {prod.category}
                    </div>
                    <div className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors mt-0.5 truncate">
                      {prod.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      ${prod.price.toLocaleString()} USD
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Google Search Console Technical Information */}
          <section
            className="my-16 rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6 md:p-8"
            aria-labelledby="gsc-info-heading"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 id="gsc-info-heading" className="text-base font-semibold text-white">
                  Google Search Console Indexing Information
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                  The XML Sitemap for Krew / Mesh is generated automatically at{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-blue-300 font-mono">
                    /sitemap.xml
                  </code>{" "}
                  according to the standard protocol defined at Sitemaps.org and enforced by Google
                  Search Console.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Auto-updated lastmod timestamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Canonical HTTPS host validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Disallow rules mapped in robots.txt</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Global CTA & Footer */}
        <CTAWithVerticalMarquee />
      </main>
    </>
  );
}
