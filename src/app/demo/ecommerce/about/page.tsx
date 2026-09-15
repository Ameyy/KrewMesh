"use client";

import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Layers, 
  Globe, 
  Award,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-20 py-10 sm:py-16">
      
      {/* 01: Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-blue-600" />
            <span>AETHER Zurich Spatial Laboratory</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Engineering the physical artifacts of the post-human era.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded by materials scientists, spatial architects, and industrial designers. We build hardware that rejects planned obsolescence and pushes human sensory capabilities beyond biological limits.
          </p>
        </div>
      </section>

      {/* 02: Visual Lab Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80"
            alt="AETHER Hardware Laboratory"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400">FACILITY 01 &bull; ZURICH</span>
              <h3 className="text-xl sm:text-2xl font-bold">Sub-Micron Fabrication &amp; Tachyon Calibration Chamber</h3>
            </div>
            <span className="text-xs font-mono text-slate-300">CLEANROOM CLASS 100 // ISO 5</span>
          </div>
        </div>
      </section>

      {/* 03: Four Engineering Pillars */}
      <section id="technology" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Core Philosophy
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Four Engineering Directives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Cpu,
              title: "Tachyon Harmonic Resonators",
              desc: "Traditional quartz crystals drift over time. Our proprietary tachyon harmonic oscillators achieve an unprecedented accuracy of ±0.0001 seconds per millennium by aligning with local sub-atomic cosmic resonance."
            },
            {
              icon: Eye,
              title: "Direct Retinal Laser Projection",
              desc: "We eliminated heavy glass displays and focal distortion. By projecting collimated laser photons directly to the ocular fovea, users experience true infinity-focus spatial interfaces with zero optical fatigue."
            },
            {
              icon: ShieldCheck,
              title: "Monocrystalline Diamondoid & Titanium",
              desc: "Every chassis is carved from single-crystal synthetic diamondoid and Grade-5 titanium alloy. Thermal dissipation is instant, surface hardness reaches 9.5 Mohs, and resistance to environmental corrosion is absolute."
            },
            {
              icon: Zap,
              title: "Kinetic Ambient Flux Harvesting",
              desc: "Batteries that need daily wall charging are relics of the 2010s. AETHER wearables harvest micro-kinetic movements, ambient RF energy, and body-heat differentials for indefinite continuous operation."
            },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 04: Sustainability & 10-Year Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-100 border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              Circular Hardware Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Built to outlast generations, not quarters.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reject the consumer-tech cycle of disposable devices. Every AETHER component is modular, upgradeable, and backed by a comprehensive 10-Year Global Hardware Guarantee. When you retire an artifact, 100% of the precious titanium and diamondoid is recovered and remelted into next-generation systems.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-slate-800">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span>Zero Toxic Glues &bull; 100% Modular Mechanical Disassembly</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900">The AETHER 10-Year Warranty</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Unlimited free sensor recalibration &amp; cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Full crystal and titanium replacement against mechanical fracture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Priority queue for firmware &amp; neural telemetry updates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Guaranteed trade-in value towards Series 10 systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05: Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Ready to experience the future?
          </h2>
          <p className="text-sm text-slate-600">
            Browse our active hardware systems or speak with our spatial engineering concierge.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/demo/ecommerce/shop"
            className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>Explore Store Catalog</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors"
          >
            Contact KREW / MESH Agency
          </Link>
        </div>
      </section>

    </div>
  );
}

// Quick helper
function Eye(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
