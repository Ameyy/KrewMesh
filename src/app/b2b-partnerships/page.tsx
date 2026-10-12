import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import { AgencyPartnerForm } from "./components/AgencyPartnerForm";
import { StatsCounterStrip } from "./components/StatsCounterStrip";
import {
  ShieldCheck,
  Zap,
  Users2,
  Lock,
  ArrowRight,
  Code2,
  Palette,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Clock,
  Layers,
  Terminal,
  FileCode,
  Flame,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Agency Partnerships & White-Label Overflow | Krew / Mesh",
  description:
    "White-label design and full-stack Next.js engineering overflow for creative agencies and studios at max capacity. Ghost-mode execution, strict NDAs, zero payroll overhead.",
  keywords: [
    "agency overflow partner",
    "white label development agency",
    "outsourced agency work",
    "B2B design studio partnership",
    "white label Next.js developers",
    "agency capacity scaling",
    "creative studio subcontractor",
    "ghost development agency",
    "Figma to Next.js white label",
  ],
  alternates: {
    canonical: "https://krewmesh.agency/b2b-partnerships",
  },
  openGraph: {
    title: "B2B Agency Partnerships & White-Label Overflow | KREW / MESH",
    description:
      "When your in-house team is at capacity, Krew / Mesh steps in as your silent, high-velocity engineering and design engine. 100% white-label under mutual NDA.",
    url: "https://krewmesh.agency/b2b-partnerships",
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/krewmesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Krew / Mesh B2B Agency Overflow & White-Label Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Agency Partnerships & White-Label Overflow | KREW / MESH",
    description:
      "When your in-house team is at capacity, Krew / Mesh steps in as your silent, high-velocity engineering and design engine. 100% white-label under mutual NDA.",
    images: ["/krewmesh-logo.png"],
  },
};

const PAIN_POINTS = [
  {
    num: "01",
    title: "The Capacity Ceiling",
    description:
      "High-margin client opportunities land on your desk, but your senior designers and engineers are 100% booked for the next two quarters. Turning down deals stalls agency growth.",
  },
  {
    num: "02",
    title: "The 90-Day Hiring Lag",
    description:
      "Recruiting full-time senior talent takes months of interviewing and incurs long-term payroll liabilities, benefits, and equity risks for temporary client pipeline spikes.",
  },
  {
    num: "03",
    title: "Freelancer Roulette",
    description:
      "Public freelancer marketplaces mean inconsistent craft, missed deadlines, spaghetti codebases, and sudden ghosting that jeopardize your hard-earned client trust.",
  },
  {
    num: "04",
    title: "Niche Specialized Tech Gaps",
    description:
      "Clients demand interactive 3D WebGL, complex Framer Motion transitions, custom AI pipelines, or high-performance Next.js architectures that fall outside your in-house wheelhouse.",
  },
];

const PILLARS = [
  {
    icon: Lock,
    title: "100% Ghost Mode & Strict NDAs",
    badge: "Confidentiality",
    description:
      "We operate invisibly behind your agency banner. We sign strict mutual non-disclosure and non-compete agreements. We never contact, pitch, or solicit your clients—ever.",
  },
  {
    icon: Code2,
    title: "Senior Craft, Zero Junior Drag",
    badge: "Direct Execution",
    description:
      "No account managers or handoff bureaucracy. You collaborate directly with senior designers and engineers who write battle-tested code and obsess over typographic rhythm.",
  },
  {
    icon: Terminal,
    title: "Native Inside Your Stack & Tools",
    badge: "Zero Friction",
    description:
      "We plug directly into your Slack, Linear, Figma, Notion, and GitHub org. If required, we commit using your agency email aliases so the client experiences total continuity.",
  },
  {
    icon: ShieldCheck,
    title: "100% IP & Codebase Ownership",
    badge: "Complete Transfer",
    description:
      "Every line of clean TypeScript, Next.js component, and Figma token is 100% transferred to your agency or your client upon delivery. No lock-in, no licensing surprises.",
  },
];

const CAPABILITIES = [
  {
    category: "Design & Product",
    items: [
      "Figma Component Systems & Token Architecture",
      "Spatial & Luxury UI/UX Wireframing to High-Fidelity",
      "Interactive Prototyping & Motion Specifications",
      "Design System Audits & Style Harmonization",
    ],
  },
  {
    category: "Frontend Engineering",
    items: [
      "Next.js (App Router, Server Actions, SSR/SSG)",
      "Tailwind CSS & Pixel-Perfect Responsive Execution",
      "Framer Motion Micro-Interactions & Complex Layouts",
      "Lighthouse 95+ Performance, SEO & CWV Tuning",
    ],
  },
  {
    category: "Interactive & Spatial Tech",
    items: [
      "Three.js & WebGL 3D Product Viewers",
      "Interactive Canvas Shaders & Scroll-Driven FX",
      "Audio-Reactive & Spatial Storytelling Websites",
      "Interactive Brand Experiences & Micro-Apps",
    ],
  },
  {
    category: "Full-Stack, AI & Integrations",
    items: [
      "Supabase, PostgreSQL, Prisma & Backend APIs",
      "Custom LLM & AI Logic Integrations",
      "Headless Shopify, Stripe, Sanity & Payload CMS",
      "48-72h Emergency Sprint Burndowns & Rescue",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    badge: "Agile Bursts",
    title: "On-Demand Project Sprint",
    bestFor: "Best for fixed client scopes with clear deliverable milestones.",
    features: [
      "Fixed-price quote & strict delivery timeline",
      "Milestone-based delivery & preview deployments",
      "Figma-to-Next.js end-to-end execution",
      "14 days post-launch warranty & QA support",
    ],
  },
  {
    badge: "High Volume",
    title: "Dedicated White-Label Pod",
    bestFor: "Best for agencies needing ongoing, monthly reserved engineering & design bandwidth.",
    features: [
      "Dedicated senior designer and/or Next.js engineer",
      "Embedded directly in your agency Slack & daily standups",
      "Flexible priority re-allocation between client accounts",
      "Cancel or scale up anytime with 14-day notice",
    ],
    highlight: true,
  },
  {
    badge: "Emergency",
    title: "48-72h Deadline Rescue",
    bestFor: "Best for distressed projects where a client deadline is imminent and internal resources are maxed.",
    features: [
      "Immediate kick-off within 2 hours of inquiry",
      "Triage of broken codebases, buggy layouts & PR backlogs",
      "Rapid sprint sprint-to-finish execution",
      "Direct line to Studio Directors via WhatsApp",
    ],
  },
];

const FAQS = [
  {
    q: "How does the white-label arrangement work in practice?",
    a: "We act as your behind-the-scenes engineering and design bench. When you pitch or take on client projects, you can quote our execution capacity under your agency brand. We produce the deliverables, commit to your repositories, and attend your internal standups if needed—all without ever revealing our identity to your end client.",
  },
  {
    q: "Do you ever publish or display client work in your portfolio?",
    a: "Never without explicit, written permission from your agency. In 99% of B2B white-label partnerships, we remain completely anonymous under NDA. Your agency retains all public case study rights, awards credits, and client accolades.",
  },
  {
    q: "Can you communicate directly with our client if our producers are overwhelmed?",
    a: "Yes, but strictly under your agency banner using your company email domain (e.g., amey@youragency.com). We present ourselves as your specialized technical lead or design director. Alternatively, if you prefer zero client contact, we stay 100% internal.",
  },
  {
    q: "How fast can you plug into an active sprint?",
    a: "For urgent client deadlines, we can execute a mutual NDA, review Figma files or repository access, and begin active commits within 24 to 48 hours. For larger monthly pods, we typically integrate within 3 to 5 business days.",
  },
  {
    q: "How are margins and billing structured?",
    a: "Because we operate as a lean, craft-first studio without bloated corporate overhead, our wholesale rates allow your agency to mark up our deliverables with healthy 30% to 50%+ gross margins while still delivering peerless world-class quality to your client.",
  },
  {
    q: "What if the project requires emergency bug fixes over a weekend?",
    a: "We understand that high-stakes agency client launches don't always follow standard 9-to-5 schedules. For critical product launches or pitch deadlines, we offer emergency weekend coverage with direct WhatsApp hotline access.",
  },
];

export default function B2BPartnershipsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B2B White-Label Agency Overflow & Subcontracting",
    provider: {
      "@type": "Organization",
      name: "Krew / Mesh",
      url: "https://krewmesh.agency",
    },
    serviceType: "White-Label Design & Next.js Web Development",
    description:
      "Confidential white-label overflow design and engineering capacity for overloaded creative agencies, digital consultancies, and design studios.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Agency B2B Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-Demand Project Sprint",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedicated White-Label Pod",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "48-72h Emergency Deadline Rescue",
          },
        },
      ],
    },
  };

  return (
    <div className="relative min-h-screen bg-[#101010] text-[#E6D5BD] selection:bg-[#D5360C]/30 selection:text-[#E6D5BD] pb-24">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[#D5360C]/[0.07] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-[#E6D5BD]/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <Container className="relative z-10 pt-8 pb-24 sm:pb-32">
        {/* --- Hero Section --- */}
        <section className="max-w-4xl mx-auto text-center space-y-8 pt-6 sm:pt-12 pb-16 sm:pb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D5360C]/15 border border-[#D5360C]/40 text-[#D5360C] text-xs font-mono uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5360C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5360C]" />
            </span>
            <span>B2B // White-Label Overflow Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#E6D5BD] leading-[1.08]">
            Your agency is at capacity. <br />
            <span className="text-[#D5360C]">We handle the overflow.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#E6D5BD]/75 max-w-2xl mx-auto leading-relaxed font-light">
            When high-margin client deals arrive faster than your internal team can ship, Krew / Mesh steps in as your silent execution bench. Senior Figma systems, WebGL 3D, and high-performance Next.js builds—shipped under your agency flag.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#partner-intake"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D5360C] hover:bg-[#b82d09] text-[#E6D5BD] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_25px_rgba(213,54,12,0.3)] hover:shadow-[0_0_35px_rgba(213,54,12,0.5)]"
            >
              <span>Request Overflow Capacity</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/919209839142?text=Hi%20Krew%20/%20Mesh%20team,%20I%20lead%20an%20agency/studio%20and%20would%20like%20to%20discuss%20white-label%20overflow%20capacity."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-[#E6D5BD]/20 text-[#E6D5BD] font-mono text-xs uppercase tracking-wider transition-all"
            >
              <MessageSquare size={14} className="text-[#25D366]" />
              <span>Emergency Desk (+91 920 983 9142)</span>
            </a>
          </div>

          {/* Animated Big Stats Strip */}
          <StatsCounterStrip />
        </section>

        {/* --- The Agency Dilemma: Why In-House Backlogs Hurt Growth --- */}
        <section className="py-16 sm:py-20 border-t border-[#E6D5BD]/15">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold block mb-2">
              The Agency Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#E6D5BD]">
              Turning down client retainers because your team is drowning kills momentum.
            </h2>
            <p className="text-sm sm:text-base text-[#E6D5BD]/70 mt-3 font-light leading-relaxed">
              Every growing creative agency hits the same brick wall: you win landmark projects, but hiring full-time headcount takes months and freelancing marketplaces produce sloppy work. Here is why modern studios partner with Krew / Mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map((pt) => (
              <div
                key={pt.num}
                className="rounded-2xl border border-[#E6D5BD]/10 bg-[#141414] p-6 flex flex-col justify-between hover:border-[#D5360C]/40 transition-all group"
              >
                <div>
                  <span className="text-xs font-mono text-[#D5360C] font-bold block mb-4">
                    {pt.num} //
                  </span>
                  <h3 className="text-lg font-medium text-[#E6D5BD] group-hover:text-[#D5360C] transition-colors mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#E6D5BD]/65 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- White-Label Protection & Guarantees --- */}
        <section className="py-16 sm:py-20 border-t border-[#E6D5BD]/15">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold block mb-2">
              Ironclad Partnership Ethics
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#E6D5BD]">
              Built for Total Client Discretion
            </h2>
            <p className="text-sm text-[#E6D5BD]/70 mt-2 font-light">
              We understand agency relationships. Our white-label protocol protects your agency's brand equity, client trust, and intellectual property without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#E6D5BD]/10 bg-[#151515] p-8 flex flex-col sm:flex-row items-start gap-5 hover:border-[#E6D5BD]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#D5360C]/15 border border-[#D5360C]/40 flex items-center justify-center text-[#D5360C] shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium text-[#E6D5BD]">{p.title}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#101010] border border-[#E6D5BD]/20 text-[#D5360C]">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#E6D5BD]/70 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- Overflow Capabilities Grid --- */}
        <section className="py-16 sm:py-20 border-t border-[#E6D5BD]/15">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold block mb-2">
              Deliverables & Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#E6D5BD]">
              What We Build For Your Agency
            </h2>
            <p className="text-sm text-[#E6D5BD]/70 mt-2 font-light">
              Plug us in for an entire website build or specific high-difficulty deliverables your internal team doesn't have time to craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="rounded-2xl border border-[#E6D5BD]/10 bg-[#141414] p-6 space-y-4"
              >
                <div className="border-b border-[#E6D5BD]/10 pb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5360C] font-semibold">
                    0{cIdx + 1} //
                  </span>
                  <h3 className="text-base font-medium text-[#E6D5BD] mt-1">{cap.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs text-[#E6D5BD]/70 flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#D5360C] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Engagement Models --- */}
        <section className="py-16 sm:py-20 border-t border-[#E6D5BD]/15">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold block mb-2">
              Partnership Structures
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#E6D5BD]">
              Flexible B2B Engagement Models
            </h2>
            <p className="text-sm text-[#E6D5BD]/70 mt-2 font-light">
              Choose how you want to deploy our capacity based on your current pipeline and studio commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between border relative ${
                  model.highlight
                    ? "bg-[#181818] border-[#D5360C] shadow-[0_0_30px_rgba(213,54,12,0.15)]"
                    : "bg-[#141414] border-[#E6D5BD]/15"
                }`}
              >
                {model.highlight && (
                  <span className="absolute -top-3 left-8 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#D5360C] text-[#E6D5BD] font-bold">
                    Most Popular For Agencies
                  </span>
                )}
                <div>
                  <span className="text-xs font-mono text-[#D5360C] uppercase tracking-wider font-semibold">
                    {model.badge}
                  </span>
                  <h3 className="text-2xl font-medium text-[#E6D5BD] mt-2 mb-3">{model.title}</h3>
                  <p className="text-xs text-[#E6D5BD]/65 leading-relaxed mb-6">{model.bestFor}</p>

                  <ul className="space-y-3 border-t border-[#E6D5BD]/10 pt-6">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#E6D5BD]/80 flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-[#D5360C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E6D5BD]/10">
                  <a
                    href="#partner-intake"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                      model.highlight
                        ? "bg-[#D5360C] hover:bg-[#b82d09] text-[#E6D5BD]"
                        : "bg-[#202020] hover:bg-[#282828] text-[#E6D5BD] border border-[#E6D5BD]/15"
                    }`}
                  >
                    <span>Inquire About This Model</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Agency Intake Form Section --- */}
        <section id="partner-intake" className="py-16 sm:py-24 border-t border-[#E6D5BD]/15 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <AgencyPartnerForm />
          </div>
        </section>

        {/* --- FAQs for Agency Leaders --- */}
        <section className="py-16 sm:py-20 border-t border-[#E6D5BD]/15">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold block mb-2">
                Due Diligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#E6D5BD]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#E6D5BD]/70 mt-2 font-light">
                Everything agency principals, creative directors, and operations leads ask before onboarding us.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-[#E6D5BD]/10 bg-[#141414] p-6 hover:border-[#E6D5BD]/20 transition-all"
                >
                  <h3 className="text-base font-medium text-[#E6D5BD] flex items-start gap-3">
                    <span className="text-xs font-mono text-[#D5360C] mt-1 shrink-0">
                      0{fIdx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/70 leading-relaxed font-light mt-3 pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Direct WhatsApp & Emergency Bottom Banner --- */}
        <section className="py-12 border-t border-[#E6D5BD]/15">
          <div className="rounded-3xl border border-[#D5360C]/30 bg-gradient-to-r from-[#171210] via-[#1A1412] to-[#12100F] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold">
                Facing an Immediate Client Deadline?
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#E6D5BD]">
                Direct Line to Studio Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#E6D5BD]/70 max-w-xl font-light">
                Skip the ticket queue. Chat directly with Dinesh or Amey via WhatsApp or phone to review your sprint crisis in confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919209839142?text=Hi%20Krew%20/%20Mesh%20team,%20I%20lead%20an%20agency/studio%20and%20would%20like%20to%20discuss%20white-label%20overflow%20capacity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#101010] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageSquare size={16} />
                <span>WhatsApp (+91 920 983 9142)</span>
              </a>
              <a
                href="tel:+919209839142"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#E6D5BD]/20 text-[#E6D5BD] text-xs font-mono uppercase tracking-wider font-medium transition-all"
              >
                <PhoneCall size={14} className="text-[#D5360C]" />
                <span>Call Studio Desk</span>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
