import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
import { ServiceFaqAccordion } from "./components/ServiceFaqAccordion";
import {
  servicesData,
  allServiceSlugs,
} from "@/data/services";
import {
  Target,
  PenTool,
  Monitor,
  Code,
  Sparkles,
  Cloud,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Sparkle,
  Zap,
  ShieldCheck,
  Cpu,
  Clock,
  Check,
  X,
  TrendingUp,
  Award,
} from "lucide-react";

// Icon lookup map
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Target,
  PenTool,
  Monitor,
  Code,
  Sparkles,
  Cloud,
};

export async function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Krew / Mesh",
    };
  }

  const siteUrl = "https://krewmesh.agency";
  const pageUrl = `${siteUrl}/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.seoKeywords,
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
      title: service.seoTitle,
      description: service.metaDescription,
      url: pageUrl,
      siteName: "KREW / MESH",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/krewmesh-logo.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Krew / Mesh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
      images: [`${siteUrl}/krewmesh-logo.png`],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const ServiceIcon = iconMap[service.iconName] || Sparkles;
  const otherServices = allServiceSlugs
    .filter((s) => s !== service.slug)
    .map((s) => servicesData[s]);

  // JSON-LD Structured Data for Google Search Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.shortTitle,
        description: service.metaDescription,
        provider: {
          "@type": "Organization",
          name: "Krew / Mesh",
          url: "https://krewmesh.agency",
          telephone: "+919209839142",
          email: "ameykulkarni1993@gmail.com",
        },
        areaServed: "Global",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.shortTitle} Deliverables`,
          itemListElement: service.deliverables.map((d, idx) => ({
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
            item: "https://krewmesh.agency",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://krewmesh.agency/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: `https://krewmesh.agency/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 min-h-screen bg-background text-[#101010] selection:bg-[#101010]/10">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#101010]/12">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[480px] blur-[150px] opacity-20 rounded-full"
            style={{ background: service.accentColor || "#D5360C" }}
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Title & Tagline */}
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#101010]/[0.06] border border-[#101010]/15 text-[#101010] shadow-inner">
                  <ServiceIcon className="size-8" strokeWidth={1.8} />
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-[#101010]">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-[#101010]/90 font-medium leading-relaxed">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#101010]/75 leading-relaxed max-w-3xl font-normal">
                {service.heroDescription}
              </p>

              {/* Target Audience Badges */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#101010]/60 mb-2.5 font-semibold">
                  Perfect For
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.map((audience, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#101010]/[0.05] border border-[#101010]/12 text-[#101010]/90"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <RainbowButton href={`/contact?service=${service.slug}`} className="px-8 py-3.5 text-sm font-semibold tracking-wide">
                  Start a Project in {service.shortTitle}
                </RainbowButton>
                <a
                  href="#deliverables"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-[#101010]/20 hover:border-[#D5360C] bg-[#101010]/[0.04] hover:bg-[#D5360C] text-[#101010] hover:text-[#E6D5BD] transition-all"
                >
                  <span>Explore What's Included</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-[#101010]/12">
              {service.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 backdrop-blur-sm"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 mb-1 font-semibold">
                    {stat.label}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#101010] tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY OUTCOMES SECTION */}
        <section className="py-16 md:py-24 border-b border-[#101010]/12 bg-[#101010]/[0.02]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                Why It Matters
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#101010]">
                What You Gain
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.keyOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 hover:border-[#D5360C]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="text-3xl sm:text-4xl font-black tracking-tight mb-2"
                      style={{ color: service.accentColor || "#D5360C" }}
                    >
                      {item.metric}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#101010] mb-2">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-[#101010]/75 leading-relaxed mt-2 font-medium">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK & TOOLING ECOSYSTEM */}
        <section className="py-14 border-b border-[#101010]/12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                  Reliable Tools
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] mt-1">
                  Tools & Technologies We Use
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#101010]/75 max-w-md font-medium">
                We use modern, dependable industry tools so your brand and software are fast, secure, and easy for your team to manage.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {service.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#101010]/[0.04] border border-[#101010]/12 hover:border-[#D5360C]/40 transition-all text-center"
                >
                  <p className="text-sm font-bold text-[#101010] tracking-tight">
                    {tech.name}
                  </p>
                  <p className="text-[11px] font-mono text-[#101010]/60 mt-1 uppercase font-semibold">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES & CAPABILITIES SECTION */}
        <section id="deliverables" className="py-20 md:py-32 border-b border-[#101010]/12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                  Everything Included
                </span>
                <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#101010]">
                  What We Build & Deliver
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#101010]/75 font-medium">
                Every project comes complete with all source files, clear walkthrough guides, and 100% full ownership from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-7 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 hover:border-[#D5360C]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#101010]/[0.06] border border-[#101010]/12 text-[#101010] font-semibold">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-[#101010]/50 font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#101010] tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#101010]/75 leading-relaxed mb-6 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="pt-4 border-t border-[#101010]/10 space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#101010]/85 font-medium">
                        <CheckCircle2
                          className="size-3.5 shrink-0"
                          style={{ color: service.accentColor || "#D5360C" }}
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

        {/* 4-STEP PROCESS FRAMEWORK */}
        <section className="py-20 md:py-32 border-b border-[#101010]/12 bg-[#101010]/[0.02]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                Step By Step
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#101010]">
                Our Simple 4-Step Process
              </h2>
              <p className="mt-4 text-[#101010]/75 text-sm sm:text-base font-medium">
                A clear, stress-free path from your initial idea to live launch, with regular updates at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 hover:border-[#D5360C]/40 transition-colors flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-[#D5360C]">
                        {step.step}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#101010]/70 px-2 py-0.5 rounded-md bg-[#101010]/[0.06] font-semibold">
                        <Clock size={11} />
                        {step.timeframe}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#101010] uppercase tracking-wider mb-2.5">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#101010]/75 leading-relaxed mb-6 font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#101010]/10">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#101010]/50 mb-1 font-semibold">
                      Deliverable
                    </p>
                    <p className="text-xs font-bold text-[#101010]">
                      {step.keyDeliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US / COMPARISON MATRIX */}
        <section className="py-20 md:py-32 border-b border-[#101010]/12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#101010]">
                The KREW / MESH Difference
              </h2>
              <p className="mt-3 text-sm text-[#101010]/75 font-medium">
                Here is how our focused, collaborative studio compares to slow, traditional agencies.
              </p>
            </div>

            <div className="rounded-2xl border border-[#101010]/15 bg-[#101010]/[0.03] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-6 bg-[#101010]/[0.06] border-b border-[#101010]/12 text-xs font-mono uppercase tracking-wider text-[#101010]/70 font-bold">
                <div className="hidden md:block">What Matters</div>
                <div className="hidden md:block text-[#101010]/60">Traditional Agencies</div>
                <div className="hidden md:block text-[#101010]">KREW / MESH Studio</div>
              </div>

              <div className="divide-y divide-[#101010]/10">
                {service.comparison.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 gap-3 md:gap-6 hover:bg-[#101010]/[0.03] transition-colors"
                  >
                    <div className="font-bold text-[#101010] text-sm">
                      {row.feature}
                    </div>
                    <div className="text-xs md:text-sm text-[#101010]/65 flex items-start gap-2 font-medium">
                      <X className="size-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="text-xs md:text-sm text-[#101010] font-bold flex items-start gap-2">
                      <Check
                        className="size-4 shrink-0 mt-0.5 text-[#D5360C]"
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
        <section className="py-20 md:py-32 border-b border-[#101010]/12 bg-[#101010]/[0.02]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                Common Questions
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#101010]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-[#101010]/75 font-medium">
                Everything you need to know before getting started. Have more questions? We are always happy to chat.
              </p>
            </div>

            <ServiceFaqAccordion faqs={service.faqs} accentColor={service.accentColor} />

            <div className="mt-12 p-6 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#101010]">Have specific questions on web builds or pricing?</p>
                <p className="text-xs text-[#101010]/70 mt-1 font-medium">Explore our FASTFORWARD and DEEPWEB packages or read answers in our FAQ.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/#packages"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[#101010] text-[#E6D5BD] hover:bg-[#D5360C] transition-colors"
                >
                  View Web Packages
                </Link>
                <Link
                  href="/faq"
                  className="px-4 py-2 rounded-lg text-xs font-bold border border-[#101010]/20 hover:border-[#D5360C] text-[#101010] hover:text-[#D5360C] transition-colors"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER SERVICES NAVIGATION */}
        <section className="py-20 md:py-28 border-b border-[#101010]/12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/60 font-semibold">
                  Explore More
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] mt-1">
                  Other Specialized Practices
                </h3>
              </div>
              <Link
                href="/#services"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#101010]/70 hover:text-[#D5360C] transition-colors font-semibold"
              >
                <span>View Full Grid</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {otherServices.map((other) => {
                const OtherIcon = iconMap[other.iconName] || Sparkles;
                return (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="group p-5 rounded-2xl bg-[#101010]/[0.04] border border-[#101010]/12 hover:border-[#D5360C]/40 transition-all flex flex-col justify-between h-44"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <OtherIcon className="size-5 text-[#101010]/70 group-hover:text-[#D5360C] transition-colors" />
                        <ArrowRight className="size-3.5 text-[#101010]/50 group-hover:text-[#D5360C] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#101010]">
                        {other.shortTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-[#101010]/70 line-clamp-2 leading-snug font-medium">
                      {other.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
