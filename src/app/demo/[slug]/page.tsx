import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/ui/footer-section-4";

interface DemoDetail {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  estimatedLaunch: string;
  liveUrl?: string;
}

const DEMO_DATA: Record<string, DemoDetail> = {
  ecomm: {
    slug: "ecomm",
    title: "E-Commerce Storefront Demo",
    category: "Retail & Direct-to-Consumer",
    tagline: "High-conversion digital storefront & frictionless checkout",
    liveUrl: "https://ecomm.krewmesh.agency/",
    description:
      "A high-performance modern e-commerce storefront engineered for direct-to-consumer brands and boutique retailers. Featuring sub-second page loads, responsive interactive cart drawer, product variation selectors, and seamless payment gateway integrations.",
    features: [
      "Instant slide-out cart drawer with free shipping threshold progress bar",
      "Dynamic product variants, size guides, and high-res image zoom",
      "One-click UPI, Apple Pay, Google Pay, and Stripe checkout integration",
      "SEO-optimized product catalog schema & rich snippet ratings",
      "Sub-second mobile navigation designed for peak checkout conversion"
    ],
    deliverables: [
      "Custom Next.js & React E-Commerce Architecture",
      "Complete Product & Inventory CMS Integration",
      "Automated Order Confirmation & Tracking Emails",
      "Full Commercial IP Ownership"
    ],
    estimatedLaunch: "Coming Soon • Q2 2026"
  },
  clinic: {
    slug: "clinic",
    title: "Clinic Website Demo",
    category: "Healthcare & Patient Care",
    tagline: "Modern healthcare practice & patient appointment platform",
    liveUrl: "https://clinic.krewmesh.agency",
    description:
      "A modern, accessible digital experience engineered for medical practices, multi-specialty clinics, and wellness providers. Features friction-free online booking, specialist doctor directories, treatment pricing calculators, and patient-first UX.",
    features: [
      "Frictionless online appointment booking & calendar sync",
      "Specialist practitioner directory with credential badges",
      "Interactive treatment guide & symptom self-assessment",
      "HIPAA-conscious inquiry & secure patient intake forms",
      "Ultra-fast mobile load speed (< 0.8s) for high search engine rank"
    ],
    deliverables: [
      "Custom React / Next.js Healthcare Portal",
      "Doctor & Treatment CMS Architecture",
      "Integrated WhatsApp & SMS Booking Alerts",
      "Local Clinic SEO & Google Business Optimization"
    ],
    estimatedLaunch: "Live Now"
  },
  business: {
    slug: "business",
    title: "Business Website Demo",
    category: "Corporate & Enterprise",
    tagline: "High-credibility corporate presence & commercial showcase",
    description:
      "A sleek, conversion-focused enterprise web architecture built for consulting firms, B2B technology companies, and commercial services. Crafted with modern kinetic interactions, verifiable trust signals, and high-converting lead funnels.",
    features: [
      "Interactive capabilities matrix & solution configurator",
      "Dynamic case studies with quantifiable ROI metrics",
      "Multi-step enterprise proposal inquiry pipeline",
      "Executive team profiles and corporate governance showcase",
      "Enterprise security headers, 99+ Core Web Vitals score"
    ],
    deliverables: [
      "Enterprise Grade Next.js Corporate Platform",
      "Modular Case Study & Service CMS",
      "HubSpot / CRM & Analytics Integration",
      "Global CDN Delivery & Enterprise SSL"
    ],
    estimatedLaunch: "Coming Soon • Q2 2026"
  },
  cafe: {
    slug: "cafe",
    title: "Cafe Landing Page Demo",
    category: "Hospitality & Specialty Food",
    tagline: "Atmospheric storytelling, artisan menu & table reservations",
    liveUrl: "https://cafe.krewmesh.agency",
    description:
      "An immersive, sensory digital storefront designed for specialty coffee roasters, boutique cafes, and fine culinary spaces. Combines rich visual storytelling, dynamic seasonal menus, table reservations, and coffee subscription ordering.",
    features: [
      "Interactive live seasonal menu with dietary filters",
      "Instant table reservation & private event booking widget",
      "Bean roastery storytelling & tasting notes selector",
      "Local pickup ordering & recurring coffee subscription flow",
      "Instagram feed integration & live Google Maps locator"
    ],
    deliverables: [
      "High-Aesthetic Hospitality Landing Page",
      "Real-time Digital Menu Management",
      "Table Reservation & OpenTable / Resy Sync",
      "Square / Stripe Payment Integration Ready"
    ],
    estimatedLaunch: "Live Now"
  },
  "interior-design": {
    slug: "interior-design",
    title: "Interior Design Website Demo",
    category: "Architecture & Spatial Design",
    tagline: "Editorial visual portfolio & bespoke project showcase",
    liveUrl: "https://inter.krewmesh.agency/",
    description:
      "An editorial-grade spatial design portfolio designed for architects, luxury interior decorators, and bespoke staging studios. Highlighting full-bleed gallery reveals, before-and-after slider comparisons, material libraries, and client consultation funnels.",
    features: [
      "High-resolution project gallery with before/after comparisons",
      "Interactive material, lighting & texture moodboard showcase",
      "Client design consultation scheduler & questionnaire",
      "Architectural press, publications, and awards index",
      "Silk-smooth page transitions with zero image pop-in"
    ],
    deliverables: [
      "Editorial Next.js Architecture Portfolio",
      "Client Proofing & Project Showcase CMS",
      "Custom Before/After Interactive Comparison Sliders",
      "High-Ticket Client Lead Generation Flow"
    ],
    estimatedLaunch: "Live Now"
  },
  photography: {
    slug: "photography",
    title: "Photography Portfolio Demo",
    category: "Visual Arts & Photography",
    tagline: "High-resolution visual archive, proofing galleries & print orders",
    liveUrl: "https://wedtale.krewmesh.agency/",
    description:
      "A cinematic, high-aesthetic portfolio platform engineered for commercial photographers, fashion directors, and visual artists. Features ultra-responsive full-bleed masonry grids, client proofing portals, EXIF metadata overlays, and print fulfillment integration.",
    features: [
      "Ultra-responsive masonry and lightbox gallery with zero image compression loss",
      "Private client proofing portal with digital watermark protection and selection approvals",
      "Integrated print lab store & custom framing checkout flow",
      "Exif camera telemetry & shooting condition data overlays",
      "Lightning-fast responsive image delivery via edge CDN"
    ],
    deliverables: [
      "Bespoke High-Resolution Next.js Photography Portfolio",
      "Private Client Proofing & Download Gallery CMS",
      "Digital Print Storefront & Stripe Payment Integration",
      "Commercial Image Protection & Watermark Automation"
    ],
    estimatedLaunch: "Live Now"
  },
  "3d-print-studio": {
    slug: "3d-print-studio",
    title: "3D Print Studio Demo",
    category: "Additive Manufacturing & Prototyping",
    tagline: "Instant STL/CAD file quoting, additive manufacturing & engineering lab",
    liveUrl: "https://3dprint.krewmesh.agency/",
    description:
      "A modern additive manufacturing and rapid prototyping studio portal. Equipped with an interactive 3D file viewer (STL, OBJ, STEP), automated volumetric material slicing calculations, instant pricing estimation, and production batch tracking.",
    features: [
      "Interactive 3D model viewer with rotation, bounding box measurement & wireframe inspection",
      "Real-time volume calculation & instant material quoting (Resin, PLA, Nylon, SLS)",
      "Automated order intake with manufacturing tolerances and infill presets",
      "Live order status tracker from slicing to print bed to quality inspection",
      "Industrial & enterprise bulk order RFP inquiry flow"
    ],
    deliverables: [
      "WebGL / Three.js Interactive 3D Model Viewer",
      "Automated Volumetric Slicing & Price Estimator Engine",
      "Production Batch Tracking & Client Order Portal",
      "Secure Enterprise NDA & CAD File Upload Pipeline"
    ],
    estimatedLaunch: "Live Now"
  }
};

export async function generateStaticParams() {
  return Object.keys(DEMO_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = DEMO_DATA[slug];
  if (!demo) {
    return { title: "Demo Coming Soon | Krew / Mesh" };
  }
  return {
    title: `${demo.title} — Coming Soon | Krew / Mesh`,
    description: demo.description
  };
}

export default async function DemoComingSoonPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = DEMO_DATA[slug];

  if (!demo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ffc691] selection:text-black">
      <Header />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        {/* Ambient background glow */}
        <div 
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(239, 103, 28, 0.4) 0%, transparent 70%)"
          }}
        />

        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-[#ffc691] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Live Tickets &amp; Demos</span>
          </Link>
        </div>

        {/* Header Badge & Title */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>{demo.estimatedLaunch}</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            {demo.category}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white display-font">
            {demo.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-medium max-w-3xl leading-relaxed">
            {demo.tagline}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            {demo.description}
          </p>
        </div>


        {/* Two column features & deliverables preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Key Features */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Zap size={18} className="text-[#ffc691]" />
              <h3>What&apos;s Included In This Architecture</h3>
            </div>
            <ul className="space-y-3.5">
              {demo.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 size={16} className="text-[#ffc691] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables & Timeline */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <ShieldCheck size={18} className="text-[#ffc691]" />
              <h3>Production Scope &amp; Tech Stack</h3>
            </div>
            <ul className="space-y-3.5">
              {demo.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#ffc691]" />
                <span>Turnaround: 1–2 Weeks</span>
              </span>
              <span className="font-semibold text-white">Full IP Ownership</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {demo.liveUrl && (
            <Link
              href={demo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ef671c] hover:bg-[#ff8533] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-lg shadow-[#ef671c]/25"
            >
              <span>Launch Live Website</span>
              <ArrowUpRight size={16} />
            </Link>
          )}
          <Link
            href="/contact?service=web-development"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
          >
            <span>Inquire About Building This</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
          >
            <span>Back to Live Tickets</span>
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
