'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/container';
import WhyUsBento from './WhyUsBento';

export default function Why() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D5360C]/[0.03] blur-[120px] pointer-events-none rounded-full" />
      
      <Container className="mb-8 sm:mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-[11px] sm:text-xs font-mono tracking-widest text-[#D5360C] mb-5 uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
          <span>ABOUT US // CREATIVE STUDIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase max-w-3xl leading-[1.1] mb-4">
          Small Krew. <span className="text-[#D5360C]">Bold Design.</span>
        </h2>
        <p className="text-[#101010]/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6 font-medium">
          We combine graphic design, branding, and modern web development to craft memorable visual identities and high-impact digital experiences that make brands impossible to ignore.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#101010]/20 bg-[#101010]/5 hover:bg-[#D5360C] hover:border-[#D5360C] text-[#101010] hover:text-[#E6D5BD] text-xs sm:text-sm font-semibold tracking-wide transition-all backdrop-blur-md group"
          data-cursor="ABOUT"
        >
          <span>Meet the Team &amp; Explore Our Story</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </Container>

      <WhyUsBento />
    </section>
  );
}
