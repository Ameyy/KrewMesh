import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
import { ServiceFaqAccordion } from "@/app/services/[slug]/components/ServiceFaqAccordion";
import { localSeoPagesData, allLocalSeoSlugs, LocalSeoPageData } from "@/data/local-seo";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Clock,
  Check,
  X,
  Phone,
  Mail,
  Building2,
  Compass,
  Layers,
  Award
} from "lucide-react";

export function generateLocalPageMetadata(page: LocalSeoPageData): Metadata {
  const siteUrl = "https://krewmesh.agency";
  const pageUrl = `${siteUrl}/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.seoKeywords,
    alternates: {
      canonical: pageUrl,
    },
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
      title: page.seoTitle,
      description: page.metaDescription,
      url: pageUrl,
      siteName: "KREW / MESH",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/krewmesh-logo.png`,
          width: 1200,
          height: 630,
          alt: `${page.title} - Krew / Mesh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
      images: [`${siteUrl}/krewmesh-logo.png`],
    },
  };
}

export function LocalSeoPageComponent({ page }: { page: LocalSeoPageData }) {
  const siteUrl = "https://krewmesh.agency";
  const pageUrl = `${siteUrl}/${page.slug}`;

  // Rich Schema.org markup: LocalBusiness, Service, BreadcrumbList, FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${pageUrl}/#localbusiness`,
        name: `Krew / Mesh - ${page.title}`,
        description: page.metaDescription,
        url: pageUrl,
        telephone: "+919209839142",
        email: "ameykulkarni1993@gmail.com",
        priceRange: "₹₹",
        image: `${siteUrl}/krewmesh-logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: page.city,
          addressRegion: page.state,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: page.geoCoordinates.latitude,
          longitude: page.geoCoordinates.longitude,
        },
        areaServed: page.neighborhoodsServed.map((neighborhood) => ({
          "@type": "AdministrativeArea",
          name: `${neighborhood}, ${page.city}`,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${page.shortTitle} Services`,
          itemListElement: page.deliverables.map((d, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: d.title,
              description: d.desc,
            },
            position: idx + 1,
          })),
        },
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
            name: `${page.city} Services`,
            item: `${siteUrl}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
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

  const otherLocalPages = Object.values(localSeoPagesData).filter(
    (p) => p.slug !== page.slug
  );

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 min-h-screen bg-background text-foreground selection:bg-white/20">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#101010]/15">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[480px] blur-[150px] opacity-15 rounded-full"
            style={{ background: "#D5360C" }}
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">

            {/* Title & Tagline */}
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#101010]/[0.05] border border-[#101010]/15 text-[#101010] shadow-inner">
                  <Building2 className="size-8 text-[#D5360C]" strokeWidth={1.5} />
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-[#101010]">
                  {page.title}
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-[#101010]/80 font-light leading-relaxed">
                {page.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#101010]/75 leading-relaxed max-w-3xl font-medium">
                {page.heroDescription}
              </p>

              {/* Target Audience Badges */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#101010]/70 mb-2.5 font-semibold">
                  Serving Ambitious Businesses Across {page.city}
                </p>
                <div className="flex flex-wrap gap-2">
                  {page.targetAudience.map((audience, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#101010]/[0.04] border border-[#101010]/15 text-[#101010] flex items-center gap-1.5 font-medium"
                    >
                      <CheckCircle2 className="size-3 text-[#D5360C]" />
                      <span>{audience}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href={`/contact?service=development`}>
                  <RainbowButton className="h-12 px-8 text-sm uppercase tracking-wider font-semibold">
                    Start Your {page.city} Project
                  </RainbowButton>
                </Link>
                <Link
                  href="/#packages"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#101010]/20 bg-[#101010]/5 hover:bg-[#D5360C] hover:border-[#D5360C] hover:text-[#E6D5BD] text-[#101010] text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <span>View Pricing Packages</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & KEY STATS */}
        <section className="py-12 border-b border-white/[0.08] bg-black/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {page.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
                >
                  <div
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                    style={{ color: page.accentColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY VALUE PROPOSITIONS */}
        <section className="py-20 md:py-28 border-b border-white/[0.08]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Measurable Impact
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Engineered For Results In {page.city}
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                We combine Silicon Valley-grade code quality with conversion-focused digital craft to help your business dominate local search and customer acquisition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.keyOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="text-4xl font-extrabold mb-3 tracking-tight"
                      style={{ color: page.accentColor }}
                    >
                      {outcome.metric}
                    </div>
                    <h3 className="text-lg font-semibold uppercase tracking-wider text-white mb-2">
                      {outcome.label}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {outcome.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section className="py-20 md:py-32 border-b border-white/[0.08] bg-black/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Full Production Scope
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                What&apos;s Included In Every Build
              </h2>
              <p className="mt-3 text-sm text-neutral-400 max-w-2xl">
                Comprehensive digital deliverables designed for immediate market leadership in {page.city}. No hidden extras.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/10">
                      {deliv.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {deliv.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {deliv.desc}
                  </p>

                  <div className="pt-2 border-t border-white/[0.06] space-y-2">
                    {deliv.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs text-neutral-400"
                      >
                        <CheckCircle2
                          className="size-3.5 shrink-0"
                          style={{ color: page.accentColor }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS & LOCAL SERVICE AREA */}
        <section className="py-16 border-b border-white/[0.08] bg-black/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#ffc691] text-xs font-mono uppercase tracking-widest">
                  <MapPin className="size-4" />
                  <span>Regional Footprint</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Active Service Areas Across {page.city}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                  We partner with clients across all prominent commercial centers, technology corridors, and industrial zones in {page.city}:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {page.neighborhoodsServed.map((neighborhood, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors text-center"
                >
                  Schedule A Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTION PROCESS */}
        <section className="py-20 md:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Transparent Execution
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                How We Deliver In 1–2 Weeks
              </h2>
              <p className="mt-3 text-sm text-neutral-400 max-w-2xl">
                A streamlined design-code sprint without account executives or bloated agency meetings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {page.process.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-2xl font-mono font-bold"
                        style={{ color: page.accentColor }}
                      >
                        {p.step}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/10">
                        {p.timeframe}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white uppercase mb-2">
                      {p.name}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                      Key Deliverable
                    </span>
                    <span className="text-xs font-medium text-neutral-200">
                      {p.keyDeliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 md:py-32 border-b border-white/[0.08] bg-black/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                The Krew / Mesh Advantage
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Why Top {page.city} Brands Choose Us
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                See how modern creative-technology engineering compares to traditional agency models.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 bg-white/[0.04] border-b border-white/10 gap-3 text-xs font-mono uppercase tracking-wider text-neutral-400">
                <div>Capability / Standard</div>
                <div>Typical Agency</div>
                <div style={{ color: page.accentColor }}>Krew / Mesh Standard</div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {page.comparison.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 gap-3 md:gap-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="font-semibold text-white text-sm">
                      {row.feature}
                    </div>
                    <div className="text-xs md:text-sm text-neutral-400 flex items-start gap-2">
                      <X className="size-4 text-red-400/80 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="text-xs md:text-sm text-neutral-200 font-medium flex items-start gap-2">
                      <Check
                        className="size-4 shrink-0 mt-0.5"
                        style={{ color: page.accentColor }}
                      />
                      <span>{row.krewmesh}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 md:py-32 border-b border-white/[0.08] bg-black/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Local Questions &amp; Direct Answers
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Transparent answers regarding pricing, code ownership, timelines, and technology for {page.city} businesses.
              </p>
            </div>

            <ServiceFaqAccordion faqs={page.faqs} accentColor={page.accentColor} />

            <div className="mt-12 p-6 rounded-2xl bg-[#101010] text-[#E6D5BD] border border-[#101010] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#E6D5BD]">Have specific project requirements or custom scope?</p>
                <p className="text-xs text-[#E6D5BD]/80 mt-1">Chat directly with our founding engineering and design leads.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#D5360C] text-[#E6D5BD] hover:bg-[#b82d09] transition-colors"
                >
                  Start Project Inquiry
                </Link>
                <Link
                  href="/faq"
                  className="px-4 py-2 rounded-full text-xs font-bold border border-[#E6D5BD]/20 hover:border-[#E6D5BD] text-[#E6D5BD] transition-colors"
                >
                  Read Full FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER LOCAL REGIONAL HUBS */}
        <section className="py-20 md:py-28 border-b border-[#101010]/15 bg-[#101010]/[0.02]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-bold">
                  Regional Expertise
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] mt-1">
                  Explore Other Local Specialized Hubs
                </h3>
              </div>
              <Link
                href="/sitemap"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#101010]/70 hover:text-[#D5360C] transition-colors"
              >
                <span>View All Locations</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {otherLocalPages.map((other) => (
                <Link
                  key={other.slug}
                  href={`/${other.slug}`}
                  className="group p-5 rounded-2xl bg-[#101010] text-[#E6D5BD] border border-[#101010] hover:border-[#D5360C] transition-all flex flex-col justify-between h-44"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <MapPin className="size-4 text-[#D5360C] group-hover:text-[#E6D5BD] transition-colors" />
                      <ArrowRight className="size-3.5 text-[#E6D5BD]/70 group-hover:text-[#D5360C] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#E6D5BD]">
                      {other.shortTitle}
                    </h4>
                  </div>
                  <p className="text-xs text-[#E6D5BD]/75 line-clamp-2 leading-snug">
                    {other.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
