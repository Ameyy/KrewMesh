import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
import { servicesData, allServiceSlugs } from "@/data/services";
import { Target, PenTool, Monitor, Code, Sparkles, Cloud, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | KREW / MESH",
  description:
    "Explore our 6 core creative-tech capabilities: Brand Identity, UI/UX Design, 3D Web Experiences, Next.js Development, AI Solutions, and SaaS Platforms.",
  keywords: [
    "Krew Mesh services",
    "branding agency",
    "UI UX design studio",
    "Next.js web development",
    "AI automation solutions",
    "SaaS platform development",
    "creative technology services",
  ],
  alternates: {
    canonical: "https://krewmesh.agency/services",
  },
  openGraph: {
    title: "Services & Capabilities | KREW / MESH",
    description:
      "Transforming ambitious ideas into digital experiences. Full-spectrum creative technology services from brand strategy to production SaaS.",
    url: "https://krewmesh.agency/services",
    siteName: "KREW / MESH",
    type: "website",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  PenTool,
  Monitor,
  Code,
  Sparkles,
  Cloud,
};

export default function ServicesPage() {
  const services = allServiceSlugs.map((slug) => servicesData[slug]!).filter(Boolean);

  return (
    <div className="relative min-h-screen pt-8 sm:pt-12 pb-24 overflow-hidden selection:bg-white/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.05] text-[#101010] mb-6">
            Ideas Into <span className="text-[#D5360C]">Experiences.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#101010]/80 leading-relaxed font-normal">
            We unite brand strategy, spatial UI/UX design, high-performance web engineering, and applied AI to help ambitious companies build memorable digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#E6D5BD] border border-[#101010]/15 shadow-sm hover:border-[#D5360C] hover:shadow-xl transition-all duration-300"
                data-cursor="VIEW"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#101010]/5 border border-[#101010]/10 flex items-center justify-center text-[#101010] group-hover:bg-[#D5360C] group-hover:text-[#E6D5BD] group-hover:border-[#D5360C] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/50 group-hover:text-[#D5360C] transition-colors">
                      // 0{services.indexOf(service) + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold uppercase tracking-tight text-[#101010] mb-3 group-hover:text-[#D5360C] transition-colors">
                    {service.shortTitle}
                  </h2>

                  <p className="text-sm text-[#101010]/75 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#101010]/70 font-mono">
                        <CheckCircle2 size={13} className="text-[#D5360C] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#101010]/10 flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-[#101010] group-hover:text-[#D5360C] transition-colors">
                  <span>Explore Practice</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#101010] text-[#E6D5BD] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold mb-2 block">
              // Custom Engagements
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase leading-tight mb-3">
              Need a blended package across multiple practices?
            </h3>
            <p className="text-sm sm:text-base text-[#E6D5BD]/75 leading-relaxed">
              We frequently combine branding, custom Next.js development, and AI integration for launch-ready digital transformations.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D5360C] text-[#E6D5BD] font-bold text-sm uppercase tracking-wider hover:bg-[#b82d09] transition-colors shrink-0 shadow-lg shadow-[#D5360C]/25"
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
