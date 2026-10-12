import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import SubpageHeaderBanner from "@/components/SubpageHeaderBanner";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { KineticPhotoStack } from "@/components/KineticPhotoStack";
import { ArrowLeft, ArrowRight, Sparkles, Compass, Zap, Layers, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Creative Technology Studio | KREW / MESH",
  description:
    "Meet the team behind Krew / Mesh. We unite brand strategy, spatial UI/UX design, and Next.js engineering to craft world-class digital experiences.",
  keywords: [
    "About Krew Mesh",
    "creative studio team",
    "digital agency founders",
    "creative technology philosophy",
    "Amey Kulkarni",
    "Dinesh Kulkarni",
    "design code convergence"
  ],
  alternates: {
    canonical: "https://krewmesh.agency/about",
  },
  openGraph: {
    title: "About Us | KREW / MESH Studio",
    description:
      "A tight-knit collective of master craftspeople—brand strategists, spatial UI/UX designers, 3D WebGL creators, and full-stack software architects.",
    url: "https://krewmesh.agency/about",
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
  },
};

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Radical Craft & Intentionality",
    description:
      "We believe true quality is felt before it is analyzed. Every typographic choice, spatial rhythm, shader reflection, and micro-interaction is intentionally crafted to elevate your brand above the noise.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Zero Bureaucracy, Pure Velocity",
    description:
      "Traditional agencies trap good ideas in endless presentation decks and account management layers. We eliminate the middle ground. You collaborate directly with the designers and engineers building your product.",
    icon: Zap,
  },
  {
    number: "03",
    title: "The Design-Code Convergence",
    description:
      "The boundary between aesthetics and code is artificial. Our designers write code, and our engineers have an obsession with typography and light. This synergy allows us to ship ambitious ideas with seamless execution.",
    icon: Layers,
  },
];

const TEAM_ROSTER = [
  {
    id: "01",
    name: "Amey Kulkarni",
    role: "Founder & CEO",
    focus: "Studio Leadership, Strategic Vision & Client Partnership",
  },
  {
    id: "02",
    name: "Dinesh Kulkarni",
    role: "Senior Web Developer",
    focus: "Full-Stack Web Architecture, Next.js Engineering & Scalable Code",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://krewmesh.agency/about/#aboutpage",
      "url": "https://krewmesh.agency/about",
      "name": "About Krew / Mesh Studio",
      "description": "Learn the story, core philosophy, and meet the senior creative team behind Krew / Mesh — an independent studio combining bold branding, spatial UI/UX design, and Next.js engineering.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Krew / Mesh",
        "url": "https://krewmesh.agency",
        "founder": [
          {
            "@type": "Person",
            "name": "Amey Kulkarni",
            "jobTitle": "Founder & CEO"
          },
          {
            "@type": "Person",
            "name": "Dinesh Kulkarni",
            "jobTitle": "Senior Web Developer"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://krewmesh.agency"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://krewmesh.agency/about"
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="relative min-h-screen bg-background text-[#101010] pt-8 sm:pt-12 pb-24 overflow-hidden selection:bg-[#101010]/10">
      {/* Subtle Ambient Radial Glow in background */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[750px] h-[480px] blur-[150px] opacity-20 rounded-full"
        style={{ background: "#D5360C" }}
      />

      {/* 1. Hero / Header Section */}
      <section className="relative z-10">
        <Container className="max-w-4xl">

          {/* Minimal Solid Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-[#101010] mb-6">
            A Creative Technology Studio Shaping The Digital Frontier.
          </h1>

          <p className="text-[#101010]/85 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-8">
            Krew / Mesh was founded on a simple conviction: the most memorable brands and digital products are born where bold visual identity meets uncompromising software engineering.
          </p>

          <div className="h-px w-full bg-[#101010]/12 mb-14" />
        </Container>
      </section>

      {/* 2. The Story Section */}
      <section className="relative z-10 pb-16 sm:pb-24">
        <Container className="max-w-4xl">
          <div className="space-y-12 text-[#101010]/85 text-base sm:text-lg leading-relaxed font-normal">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D5360C] mb-3 uppercase font-semibold">
                <Sparkles size={14} className="text-[#D5360C]" />
                <span>HOW IT STARTED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] mb-4">
                Born From Frustration With The Status Quo.
              </h2>
              <p className="text-[#101010]/80 mb-4 font-medium">
                For years, we watched ambitious companies hire large creative agencies only to receive watered-down work delivered through layers of account managers, misaligned priorities, and broken promises. Concepts looked brilliant in static slide decks, but fell apart the moment they met real-world browser performance and code.
              </p>
              <p className="text-[#101010]/80 font-medium">
                We started Krew / Mesh as an intentional antidote. A tight-knit collective of master craftspeople—brand strategists, spatial UI/UX designers, 3D WebGL creators, and full-stack software architects—working directly alongside ambitious founders and marketing leaders.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-[#101010]/15 bg-[#101010]/[0.04] backdrop-blur-sm">
              <blockquote className="text-xl sm:text-2xl font-bold text-[#101010] italic tracking-tight mb-4">
                &ldquo;We don&apos;t build to chase fleeting trends. We design and engineer digital experiences that feel timeless, command attention, and generate real enterprise momentum.&rdquo;
              </blockquote>
              <div className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold">
                — Krew / Mesh Founding Principle
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Meet The Krew */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-[#101010]/12">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-[11px] font-mono tracking-widest text-[#D5360C] uppercase backdrop-blur-sm font-semibold">
                <Users2 size={13} className="text-[#D5360C]" />
                <span>THE COLLECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#101010] leading-tight">
                Meet The Krew.
              </h2>

              <p className="text-[#101010]/80 text-base sm:text-lg leading-relaxed font-medium">
                We are a multidisciplinary group of designers, creative technologists, and systems engineers. By keeping our core team intentionally compact and specialized, every client works directly with the creators shaping their digital presence.
              </p>

              {/* Team Roster breakdown */}
              <div className="space-y-3 pt-2">
                {TEAM_ROSTER.map((member) => (
                  <div
                    key={member.id}
                    className="p-3.5 rounded-xl border border-[#101010]/12 bg-[#101010]/[0.04] flex items-start gap-3.5"
                  >
                    <span className="text-[11px] font-mono font-bold text-[#D5360C] pt-0.5">
                      {member.id}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-sm font-bold text-[#101010] tracking-tight">
                          {member.name}
                        </h4>
                        <span className="text-xs text-[#101010]/60 font-mono font-semibold">
                          — {member.role}
                        </span>
                      </div>
                      <p className="text-xs text-[#101010]/75 mt-0.5 font-medium">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-[#101010]/50 pt-1 font-semibold">
                Tip: Drag photos right/left to cycle through, switch to Fan view, or click Shuffle.
              </p>
            </div>

            {/* Right Side: KineticPhotoStack Component */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <KineticPhotoStack />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Philosophy */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-[#101010]/12">
        <Container className="max-w-4xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D5360C] mb-3 uppercase font-semibold">
              <Sparkles size={14} className="text-[#D5360C]" />
              <span>WHAT SETS US APART</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#101010] mb-4">
              Our Core Philosophy.
            </h2>
            <p className="text-[#101010]/80 mb-8 font-medium">
              Every project we undertake is governed by three unshakeable standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHILOSOPHY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="p-6 rounded-xl border border-[#101010]/12 bg-[#101010]/[0.04] hover:border-[#D5360C]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#D5360C]">
                        {pillar.number}
                      </span>
                      <div className="p-2 rounded-lg bg-[#101010]/[0.06] text-[#101010]">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#101010] uppercase mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#101010]/75 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Minimal Call-To-Action */}
      <section className="relative z-10 pt-10 pb-16 border-t border-[#101010]/12">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5360C] mb-4 font-semibold">
            <span>READY TO COLLABORATE?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#101010] mb-4">
            Let&apos;s Build Something Memorable Together.
          </h2>
          <p className="text-[#101010]/80 text-sm sm:text-base max-w-xl mb-8 font-medium">
            Tell us about your brand, digital product, or upcoming project. We will help you bring it to life with precision and craft.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <RainbowButton href="/contact">
              Start a Project
            </RainbowButton>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#101010]/20 bg-[#101010]/[0.05] hover:bg-[#D5360C] text-[#101010] hover:text-[#E6D5BD] font-semibold text-sm transition-all duration-200"
            >
              <span>View Selected Work</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
    </>
  );
}
