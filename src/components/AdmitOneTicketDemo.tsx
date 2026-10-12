"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";

interface DemoItem {
  id: number;
  label: string;
  category: string;
  url: string;
  description: string;
  year: string;
}

const DEMOS: DemoItem[] = [
  {
    id: 1,
    label: "Ecomm Website",
    category: "Storefront & Retail",
    url: "https://ecomm.krewmesh.agency/",
    description: "Next.js headless e-commerce store with real-time cart and fluid product transitions.",
    year: "2026",
  },
  {
    id: 2,
    label: "Clinic Website",
    category: "Healthcare & Booking",
    url: "https://clinic.krewmesh.agency",
    description: "Ultra-clean clinical patient portal, automated scheduling and doctor profiles.",
    year: "2026",
  },
  {
    id: 3,
    label: "Cafe Landing Page",
    category: "Hospitality & Food",
    url: "https://cafe.krewmesh.agency",
    description: "Artisan coffee roastery interactive menu, spatial imagery and booking flow.",
    year: "2026",
  },
  {
    id: 4,
    label: "Interior Design Website",
    category: "Architecture & Studio",
    url: "https://inter.krewmesh.agency/",
    description: "Spatial architecture portfolio featuring horizontal gallery and materials showcase.",
    year: "2026",
  },
  {
    id: 5,
    label: "Photography Portfolio",
    category: "Editorial & Film",
    url: "https://wedtale.krewmesh.agency/",
    description: "High-contrast editorial photography archive with cinematic lightbox experiences.",
    year: "2026",
  },
  {
    id: 6,
    label: "3D Print Studio",
    category: "Prototyping & Tech",
    url: "https://3dprint.krewmesh.agency/",
    description: "Additive manufacturing studio showcase with interactive parametric configurators.",
    year: "2026",
  },
  {
    id: 7,
    label: "Gym & Fitness",
    category: "Athletics & Club",
    url: "https://gym.krewmesh.agency",
    description: "High-energy training schedule, membership checkout and club facility tours.",
    year: "2026",
  },
];

export default function AdmitOneTicketDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-transparent py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden border-y border-[#101010]/10">
      {/* Dynamic Novatrix / Water Wave Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <GradientMesh 
          colors={["#E6D5BD", "#D5360C", "#101010"]}
          distortion={4.5}
          swirl={0.4}
          speed={0.8}
          scale={1.1}
          waveAmp={0.08}
          grain={0.05}
        />
      </div>

      {/* Subtle overlay to preserve high text contrast */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(230, 213, 189, 0.4) 0%, rgba(230, 213, 189, 0.85) 75%, #E6D5BD 100%)"
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5360C]/40 bg-[#D5360C]/15 text-[#D5360C] text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5360C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5360C]"></span>
            </span>
            <span>LIVE PRODUCTION DEMOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase display-font leading-tight">
            EXPLORE LIVE DEMOS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#101010]/75 max-w-xl">
            Click any project below to test performance, interactions, and design systems in real-time.
          </p>
        </div>

        {/* Clean Editorial Text-Only Link Directory */}
        <div className="w-full divide-y divide-[#101010]/15 border-y border-[#101010]/15">
          {DEMOS.map((demo, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <Link
                key={demo.id}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 px-3 sm:px-6 transition-all duration-300 hover:bg-[#101010]/[0.04] cursor-pointer"
              >
                {/* Left: Number + Title */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-semibold text-[#D5360C] tracking-widest pt-1 sm:pt-0">
                    0{demo.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#101010] group-hover:text-[#D5360C] transition-colors duration-200">
                        {demo.label}
                      </h3>
                      <span className="hidden md:inline-flex items-center text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#101010]/15 bg-[#101010]/5 text-[#101010]/70 group-hover:border-[#D5360C]/30 group-hover:text-[#D5360C] transition-colors">
                        {demo.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#101010]/65 mt-1 sm:mt-1.5 max-w-lg line-clamp-1 group-hover:text-[#101010]/85 transition-colors">
                      {demo.description}
                    </p>
                  </div>
                </div>

                {/* Right: Launch Action Link */}
                <div className="mt-3 sm:mt-0 flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-[#101010]/60 group-hover:text-[#D5360C] transition-colors">
                  <span className="group-hover:translate-x-0.5 transition-transform">Launch Live Site</span>
                  <ArrowUpRight 
                    size={16} 
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#101010]/50 group-hover:text-[#D5360C]" 
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Helper Info */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[#101010]/60">
          <Sparkles size={14} className="text-[#D5360C]" />
          <span>All 7 demo websites are live and running on high-speed Next.js infrastructure</span>
        </div>
      </div>
    </section>
  );
}
