import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { KineticPhotoStack } from "@/components/KineticPhotoStack";
import { ArrowLeft, ArrowRight, Sparkles, Compass, Zap, Layers, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Creative Technology Studio | KREW / MESH",
  description:
    "Learn the story, core philosophy, and meet the senior creative team behind Krew / Mesh — an independent studio combining bold branding, spatial UI/UX design, and Next.js engineering.",
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
    canonical: "/about",
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
      <div className="relative min-h-screen bg-black text-white pt-32 sm:pt-40 pb-24 overflow-hidden selection:bg-white/20">
      {/* Subtle Ambient Radial Glow in background (matching services pages) */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[750px] h-[480px] blur-[150px] opacity-25 rounded-full"
        style={{ background: "#00E5FF" }}
      />
      <div
        className="pointer-events-none absolute top-2/3 -right-32 w-[600px] h-[550px] blur-[170px] opacity-15 rounded-full"
        style={{ background: "#7928CA" }}
      />

      {/* 1. Hero / Header Section */}
      <section className="relative z-10">
        <Container className="max-w-4xl">
          {/* Breadcrumbs & Category Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.05] border border-white/10 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              About Us // Story
            </span>
          </div>

          {/* Minimal Solid Typography (No Gradient Texts) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-white mb-6">
            A Creative Technology Studio Shaping The Digital Frontier.
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal mb-8">
            Krew / Mesh was founded on a simple conviction: the most memorable brands and digital products are born where bold visual identity meets uncompromising software engineering.
          </p>

          <div className="h-px w-full bg-white/[0.08] mb-14" />
        </Container>
      </section>

      {/* 2. The Story Section */}
      <section className="relative z-10 pb-16 sm:pb-24">
        <Container className="max-w-4xl">
          <div className="space-y-12 text-neutral-300 text-base sm:text-lg leading-relaxed">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 mb-3 uppercase">
                <Sparkles size={14} className="text-[#00E5FF]" />
                <span>HOW IT STARTED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                Born From Frustration With The Status Quo.
              </h2>
              <p className="text-neutral-300 mb-4">
                For years, we watched ambitious companies hire large creative agencies only to receive watered-down work delivered through layers of account managers, misaligned priorities, and broken promises. Concepts looked brilliant in static slide decks, but fell apart the moment they met real-world browser performance and code.
              </p>
              <p className="text-neutral-300">
                We started Krew / Mesh as an intentional antidote. A tight-knit collective of master craftspeople—brand strategists, spatial UI/UX designers, 3D WebGL creators, and full-stack software architects—working directly alongside ambitious founders and marketing leaders.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
              <blockquote className="text-xl sm:text-2xl font-medium text-white italic tracking-tight mb-4">
                &ldquo;We don&apos;t build to chase fleeting trends. We design and engineer digital experiences that feel timeless, command attention, and generate real enterprise momentum.&rdquo;
              </blockquote>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                — Krew / Mesh Founding Principle
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Meet The Krew (Left Side: Written Story/Roles; Right Side: KineticPhotoStack) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/[0.08]">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Side: Meet the Krew copy & details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
                <Users2 size={13} className="text-[#00E5FF]" />
                <span>THE COLLECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                Meet The Krew.
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                We are a multidisciplinary group of designers, creative technologists, and systems engineers. By keeping our core team intentionally compact and specialized, every client works directly with the creators shaping their digital presence.
              </p>

              {/* Team Roster breakdown */}
              <div className="space-y-3 pt-2">
                {TEAM_ROSTER.map((member) => (
                  <div
                    key={member.id}
                    className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-start gap-3.5"
                  >
                    <span className="text-[11px] font-mono text-[#00E5FF] pt-0.5">
                      {member.id}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {member.name}
                        </h4>
                        <span className="text-xs text-neutral-400 font-mono">
                          — {member.role}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-neutral-500 pt-1">
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
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/[0.08]">
        <Container className="max-w-4xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 mb-3 uppercase">
              <Sparkles size={14} className="text-[#00E5FF]" />
              <span>WHAT SETS US APART</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
              Our Core Philosophy.
            </h2>
            <p className="text-neutral-300 mb-8">
              Every project we undertake is governed by three unshakeable standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHILOSOPHY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-neutral-400">
                        {pillar.number}
                      </span>
                      <div className="p-2 rounded-lg bg-white/[0.04] text-white">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white uppercase mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
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
      <section className="relative z-10 pt-10 pb-16 border-t border-white/[0.08]">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
            <span>READY TO COLLABORATE?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
            Let&apos;s Build Something Memorable Together.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-8">
            Tell us about your brand, digital product, or upcoming project. We will help you bring it to life with precision and craft.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <RainbowButton href="/contact">
              Start a Project
            </RainbowButton>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/10 text-white font-medium text-sm transition-all duration-200"
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
