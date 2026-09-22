'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Minus,
  Sparkles
} from 'lucide-react';

type PackageItem = {
  id: string;
  number: string;
  name: string;
  price: string;
  priceLabel: string;
  whatItMeans: string;
  description: string;
  badge?: string;
  includesNote?: string;
  turnaround: string;
  features: string[];
  goodFor: string;
  featured?: boolean;
};

const PACKAGES: PackageItem[] = [
  {
    id: 'fastforward',
    number: '01',
    name: 'FASTFORWARD',
    price: '₹9,999',
    priceLabel: 'Starting',
    whatItMeans: 'Get online. Fast.',
    description: 'For businesses that need a clean, high-converting presence without a long turnaround.',
    turnaround: '3–5 days delivery',
    features: [
      'Up to 5 custom pages',
      'Responsive design across all devices',
      'Custom visual art direction',
      'Contact & WhatsApp enquiry integration',
      'Basic search engine optimization (SEO)',
      'Google Maps & business listing setup',
      'Speed & asset performance optimization',
      'Production deployment & domain link',
    ],
    goodFor: 'Local businesses, creators, consultants, and early startups.',
    featured: false,
  },
  {
    id: 'deepweb',
    number: '02',
    name: 'DEEPWEB',
    price: '₹19,999',
    priceLabel: 'Starting',
    whatItMeans: 'More depth. More control.',
    description: 'A serious multi-page business website built for brand authority and lead conversion.',
    badge: 'RECOMMENDED',
    includesNote: 'Everything in FASTFORWARD, plus:',
    turnaround: '7–10 days delivery',
    features: [
      'Up to 10 custom pages',
      'Custom animations & micro-interactions',
      'Blog or Content Management System (CMS)',
      'High-converting multi-step lead capture',
      'On-page SEO & structured schema data',
      'Full analytics & event tracking setup',
      'Branded design system & component depth',
      'Priority post-launch support window',
    ],
    goodFor: 'Agencies, clinics, professional practices, and scaling brands.',
    featured: true,
  },
  {
    id: 'ecom',
    number: '03',
    name: 'ECOM',
    price: '₹29,999',
    priceLabel: 'Starting',
    whatItMeans: 'Digital storefront.',
    description: 'Engineered for seamless transactions, product storytelling, and frictionless checkout.',
    turnaround: '10–14 days delivery',
    features: [
      'Full e-commerce platform & storefront',
      'Product catalog, variations & collections',
      'Interactive cart drawer & smooth checkout',
      'Payment gateway & UPI integration',
      'Automated shipping & tax rate setup',
      'Order & inventory management dashboard',
      'Product schema & Google Shopping readiness',
      'Mobile-first conversion architecture',
    ],
    goodFor: 'D2C brands, boutique lifestyle, apparel, and merchandise.',
    featured: false,
  },
  {
    id: 'fullsend',
    number: '04',
    name: 'FULL SEND',
    price: '₹49,999+',
    priceLabel: 'Starting',
    whatItMeans: 'Bespoke digital craft.',
    description: 'Zero templates. Fully bespoke interactive experience built around your brand identity.',
    badge: 'BESPOKE',
    turnaround: 'Scope-based timeline',
    features: [
      'Fully custom architecture & visual language',
      '3D elements, shaders, or canvas motion',
      'Bespoke UX/UI prototyping & motion design',
      'Custom API, CRM, or ERP integrations',
      'Enterprise technical SEO architecture',
      'Sub-second page performance tuning',
      'Dedicated art director & lead engineer',
      'White-glove deployment & handover',
    ],
    goodFor: 'Visionary brands wanting an unforgettable digital flagship.',
    featured: false,
  },
];

// Matrix Comparison Data
const COMPARISON_ROWS = [
  { feature: 'Target Turnaround', f: '3–5 Days', d: '7–10 Days', e: '10–14 Days', s: 'Scope Dependent' },
  { feature: 'Page Capacity', f: 'Up to 5 Pages', d: 'Up to 10 Pages', e: 'Full Catalog & Store', s: 'Unlimited Custom' },
  { feature: 'Design Architecture', f: 'Custom Visual Direction', d: 'Brand Systems & Depth', e: 'Storefront & Merchandising', s: 'Bespoke 3D & Spatial' },
  { feature: 'CMS / Blog Engine', f: false, d: true, e: true, s: true },
  { feature: 'E-Commerce & Checkout', f: false, d: false, e: true, s: 'Available' },
  { feature: 'Payment Gateway & Shipping', f: false, d: false, e: true, s: 'Available' },
  { feature: 'Custom Interactions & Motion', f: 'Standard Motion', d: 'Advanced Interactions', e: 'Cart & Product Motion', s: '3D / Shader / Physics' },
  { feature: 'Lead & Contact Integration', f: 'Contact & WhatsApp', d: 'Custom Multi-Step Forms', e: 'Checkout & Customer Accounts', s: 'API / CRM Pipelines' },
  { feature: 'SEO & Search Indexing', f: 'Basic Meta & Sitemap', d: 'On-Page & Schema Markup', e: 'Product Schema & Feed', s: 'Full Technical Audit' },
  { feature: 'Analytics & Tracking', f: 'Basic Setup', d: 'Full Event Tracking', e: 'E-commerce Funnel Tracking', s: 'Custom Telemetry' },
  { feature: 'Priority Engineering', f: false, d: false, e: false, s: true },
];

export default function WebBuildsPricing() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [showComparison, setShowComparison] = useState(false);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden scroll-mt-20">
      {/* Subtle top ambient gradient - extremely subtle neutral only */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
            <span>Web Builds &amp; Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]">
            Plans &amp; Pricing.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Transparent, fixed-scope web engineering. Predictable delivery timelines with zero hidden retainers.
          </p>
        </div>

        {/* Minimal 4-Cards Grid with Laser-Aligned Baselines */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-start">
          {PACKAGES.map((pkg) => {
            const isExpanded = Boolean(expandedCards[pkg.id]);
            const isFeatured = pkg.featured;

            return (
              <div
                key={pkg.id}
                onClick={() => toggleCard(pkg.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(pkg.id);
                  }
                }}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 cursor-pointer select-none text-left ${
                  isFeatured
                    ? 'border border-white/25 bg-gradient-to-b from-white/[0.05] to-[#0A0A0A] shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:border-white/40'
                    : 'border border-white/[0.08] bg-[#0A0A0A] hover:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Upper Content - Strictly Pixel-Aligned on All 4 Cards */}
                <div className="flex flex-col space-y-4">
                  {/* 1. Header (Tier number + badge): Exact h-7 */}
                  <div className="flex items-center justify-between gap-2 h-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {pkg.number} // {pkg.name}
                    </span>

                    {pkg.badge ? (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border ${
                        isFeatured 
                          ? 'border-white/30 bg-white/10 text-white' 
                          : 'border-white/10 bg-white/[0.03] text-neutral-400'
                      }`}>
                        {pkg.badge}
                      </span>
                    ) : (
                      <span className="h-6 w-1 invisible" />
                    )}
                  </div>

                  {/* 2. Price Row: Exact h-[64px] */}
                  <div className="h-[64px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-1.5 leading-none">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">
                        / {pkg.priceLabel}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mt-2 font-medium leading-tight">
                      {pkg.whatItMeans}
                    </p>
                  </div>

                  {/* 3. Turnaround Info: Exact h-5 */}
                  <div className="h-5 text-xs text-neutral-400 font-medium flex items-center gap-1.5">
                    <span className="text-neutral-500">⏱</span>
                    <span>{pkg.turnaround}</span>
                  </div>

                  {/* 4. Short Pitch: Exact h-10 */}
                  <div className="h-10 flex items-start">
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Actions: Direct CTA + Polished Deliverables Toggle Button (Laser Aligned) */}
                <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-2.5">
                  <Link
                    href={`/contact?package=${pkg.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full h-11 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-white text-black hover:bg-neutral-200 shadow-md'
                        : 'bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 text-white hover:border-white/30'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={14} />
                  </Link>

                  {/* Polished Unfold Trigger Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(pkg.id);
                    }}
                    className={`w-full h-10 px-3.5 rounded-xl text-xs font-medium tracking-wide transition-all flex items-center justify-between cursor-pointer border ${
                      isExpanded
                        ? 'bg-white/10 text-white border-white/30 shadow-sm'
                        : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/10 hover:border-white/20 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span 
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          isExpanded ? 'bg-white' : 'bg-neutral-500'
                        }`} 
                      />
                      <span className="text-[11px] uppercase tracking-wider font-semibold">
                        {isExpanded ? 'Hide Deliverables' : 'View Deliverables'}
                      </span>
                    </span>
                    <div 
                      className={`w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-white/15 text-white' : 'text-neutral-400'
                      }`}
                    >
                      <ChevronDown size={13} />
                    </div>
                  </button>
                </div>

                {/* Unfoldable Feature Details Area (Smooth 60fps CSS Grid) */}
                <div 
                  className={`grid transition-all duration-400 ease-in-out ${
                    isExpanded 
                      ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-white/[0.08]' 
                      : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                  }`}
                >
                  <div className="overflow-hidden space-y-4">
                    {/* Optional includes note (e.g. for DEEPWEB) */}
                    {pkg.includesNote && (
                      <div className="text-[11px] text-neutral-300 font-medium">
                        {pkg.includesNote}
                      </div>
                    )}

                    {/* Features Checklist */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check 
                              size={14} 
                              className="mt-0.5 shrink-0 text-white" 
                              strokeWidth={2}
                            />
                            <span className="leading-snug text-neutral-300">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Suited For Box */}
                    <div className="pt-3 border-t border-white/[0.06] text-[11px] text-neutral-400 leading-relaxed">
                      <span className="font-semibold text-neutral-200 block mb-0.5">
                        Best Suited For:
                      </span>
                      <span>{pkg.goodFor}</span>
                    </div>

                    {/* Quick Close Trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(pkg.id);
                      }}
                      className="w-full text-center text-[10px] uppercase tracking-wider text-neutral-500 hover:text-neutral-300 pt-1 transition-colors cursor-pointer"
                    >
                      ↑ Close Deliverables
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-xs text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            <span>{showComparison ? 'Hide Specifications Matrix' : 'Compare All 4 Packages Side-by-Side'}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Clean Monochrome Feature Comparison Matrix */}
        {showComparison && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-950 p-6 sm:p-10 shadow-2xl animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  Package Specifications.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Side-by-side breakdown of velocities, architecture, and engineering deliverables.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Consult Our Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400 uppercase text-[11px] tracking-wider">
                    <th className="py-4 pr-4 font-semibold text-white">Scope &amp; Capability</th>
                    <th className="py-4 px-3 font-semibold text-white">FASTFORWARD</th>
                    <th className="py-4 px-3 font-semibold text-white">DEEPWEB</th>
                    <th className="py-4 px-3 font-semibold text-white">ECOM</th>
                    <th className="py-4 pl-3 font-semibold text-white">FULL SEND</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-neutral-300">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 pr-4 font-medium text-neutral-200">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.f === 'boolean' ? (
                          row.f ? <CheckCircle2 size={16} className="text-white" /> : <Minus size={16} className="text-neutral-600" />
                        ) : (
                          <span className="text-neutral-300">{row.f}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.d === 'boolean' ? (
                          row.d ? <CheckCircle2 size={16} className="text-white" /> : <Minus size={16} className="text-neutral-600" />
                        ) : (
                          <span className="font-medium text-white">{row.d}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.e === 'boolean' ? (
                          row.e ? <CheckCircle2 size={16} className="text-white" /> : <Minus size={16} className="text-neutral-600" />
                        ) : (
                          <span className="text-neutral-300">{row.e}</span>
                        )}
                      </td>
                      <td className="py-3.5 pl-3">
                        {typeof row.s === 'boolean' ? (
                          row.s ? <CheckCircle2 size={16} className="text-white" /> : <Minus size={16} className="text-neutral-600" />
                        ) : (
                          <span className="font-medium text-white">{row.s}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Minimal Studio Manifesto Quote */}
        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center border-t border-white/[0.08] pt-12 sm:pt-16">
          <blockquote className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-neutral-300 uppercase leading-snug">
            &ldquo;We don&apos;t build websites to fill a URL.<br className="hidden sm:inline" />
            We build digital spaces people actually remember.&rdquo;
          </blockquote>

          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
            KREW / MESH &mdash; DIGITAL CRAFT MANIFESTO
          </p>
        </div>

      </div>
    </section>
  );
}

