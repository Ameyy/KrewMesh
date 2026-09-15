import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import GlobalCanvas from "@/components/GlobalCanvas";
import Header from "@/components/Header";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  servicesData,
  allServiceSlugs,
  ServiceData,
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

  return {
    title: `${service.shortTitle} Services | Krew / Mesh`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.title} | Krew / Mesh`,
      description: service.heroDescription,
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

  return (
    <>
      <GlobalCanvas />
      <Header />

      <main className="relative z-10 min-h-screen bg-background text-foreground selection:bg-white/20">
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-white/[0.08]">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] blur-[140px] opacity-25 rounded-full"
            style={{ background: service.accentColor }}
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Breadcrumbs & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>All Services</span>
              </Link>
              <span className="text-neutral-600">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.05] border border-white/10 text-white">
                <span
                  className="size-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: service.accentColor }}
                />
                {service.badge}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white shadow-inner">
                  <ServiceIcon className="size-8" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
                {service.heroDescription}
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href={`/contact?service=${service.slug}`}>
                  <RainbowButton className="px-8 py-3.5 text-sm font-medium tracking-wide">
                    Start a Project in {service.shortTitle}
                  </RainbowButton>
                </Link>
                <a
                  href="#deliverables"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-neutral-300 hover:text-white transition-all"
                >
                  <span>Explore Deliverables</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/[0.08]">
              {service.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section id="deliverables" className="py-20 md:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Capabilities & Deliverables
                </span>
                <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                  What We Build & Hand Over
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Every project is delivered with enterprise-grade fidelity, clear documentation, and zero technical or creative debt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="size-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISUAL SHOWCASE GALLERY */}
        <section className="py-20 md:py-32 border-b border-white/[0.08] bg-black/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Visual Standards
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Work & Aesthetics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.visuals.map((visual, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={visual.url}
                      alt={visual.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-neutral-200">
                      {visual.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-neutral-300 font-medium">
                      {visual.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STEP PROCESS FRAMEWORK */}
        <section className="py-20 md:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Execution Methodology
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                How We Execute
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base">
                A battle-tested 4-phase lifecycle engineered to ensure velocity, continuous alignment, and immaculate precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-colors"
                >
                  <div className="text-2xl font-mono font-semibold text-neutral-500 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 md:py-32 border-b border-white/[0.08]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Clarifications
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
                >
                  <h3 className="text-base font-medium text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES NAVIGATION */}
        <section className="py-20 md:py-28 border-b border-white/[0.08] bg-black/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Explore More
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  Other Specialized Practices
                </h3>
              </div>
              <Link
                href="/#services"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                <span>View Grid</span>
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
                    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between h-44"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <OtherIcon className="size-5 text-neutral-400 group-hover:text-white transition-colors" />
                        <ArrowRight className="size-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        {other.shortTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-snug">
                      {other.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* GLOBAL CTA & FOOTER */}
        <CTAWithVerticalMarquee />
      </main>
    </>
  );
}
