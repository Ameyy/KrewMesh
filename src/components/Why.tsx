'use client';

import React from 'react';
import Container from '@/components/container';
import WhyUsBento from './WhyUsBento';

export default function Why() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />
      
      <Container className="mb-8 sm:mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 mb-5 uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ABOUT US // CREATIVE STUDIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase max-w-3xl leading-[1.1] mb-4">
          Small Krew. <span className="text-neutral-500">Bold Design.</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          We combine graphic design, branding, and modern web development to craft memorable visual identities and high-impact digital experiences that make brands impossible to ignore.
        </p>
      </Container>

      <WhyUsBento />
    </section>
  );
}
