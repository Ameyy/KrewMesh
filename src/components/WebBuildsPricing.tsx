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

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  prices: Record<string, string>; // package id -> formatted price
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    label: 'INR (₹)',
    flag: '🇮🇳',
    prices: {
      fastforward: '₹9,999',
      deepweb: '₹19,999',
      ecom: '₹29,999',
      fullsend: '₹49,999+',
    },
  },
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'USD ($)',
    flag: '🇺🇸',
    prices: {
      fastforward: '$149',
      deepweb: '$299',
      ecom: '$449',
      fullsend: '$749+',
    },
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    label: 'EUR (€)',
    flag: '🇪🇺',
    prices: {
      fastforward: '€139',
      deepweb: '€279',
      ecom: '€419',
      fullsend: '€699+',
    },
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    label: 'GBP (£)',
    flag: '🇬🇧',
    prices: {
      fastforward: '£119',
      deepweb: '£239',
      ecom: '£359',
      fullsend: '£599+',
    },
  },
  AED: {
    code: 'AED',
    symbol: 'AED ',
    label: 'AED',
    flag: '🇦🇪',
    prices: {
      fastforward: 'AED 549',
      deepweb: 'AED 1,099',
      ecom: 'AED 1,649',
      fullsend: 'AED 2,749+',
    },
  },
};

type PackageItem = {
  id: string;
  number: string;
  name: string;
  priceINR: string;
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
    priceINR: '₹9,999',
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
    priceINR: '₹19,999',
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
    priceINR: '₹29,999',
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
    priceINR: '₹49,999+',
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
  const [currency, setCurrency] = useState<CurrencyCode>('INR');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [showComparison, setShowComparison] = useState(false);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeCurrencyConfig = CURRENCIES[currency] || CURRENCIES.INR;

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-transparent text-[#101010] overflow-hidden scroll-mt-20">
      {/* Subtle top ambient gradient */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse at top, rgba(213, 54, 12, 0.2) 0%, rgba(230, 213, 189, 0) 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-[11px] font-medium tracking-[0.2em] text-[#D5360C] uppercase">
            <span>Pricing &amp; Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase leading-[1.08]">
            Plans &amp; Pricing.
          </h2>

          <p className="text-[#101010]/75 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Transparent, fixed-scope web engineering. Predictable delivery timelines with zero hidden retainers.
          </p>

          {/* Currency Converter Switcher */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#101010]/70">
              Currency:
            </span>
            <div 
              role="radiogroup" 
              aria-label="Select currency for pricing"
              className="inline-flex p-1 rounded-full bg-[#101010]/5 border border-[#101010]/15 backdrop-blur-md"
            >
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                const isSelected = currency === code;
                const item = CURRENCIES[code];
                return (
                  <button
                    key={code}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setCurrency(code)}
                    className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#D5360C] text-[#E6D5BD] shadow-md shadow-[#D5360C]/25 scale-[1.02]'
                        : 'text-[#101010]/70 hover:text-[#101010] hover:bg-[#101010]/10'
                    }`}
                  >
                    <span className="text-xs leading-none">{item.flag}</span>
                    <span>{code}</span>
                  </button>
                );
              })}
            </div>
          </div>
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
                    ? 'border-2 border-[#D5360C] bg-[#D5360C] text-[#E6D5BD] shadow-[0_16px_45px_rgba(213,54,12,0.4)] hover:shadow-[0_20px_55px_rgba(213,54,12,0.5)] scale-[1.02] z-10'
                    : 'border border-[#E6D5BD]/10 bg-[#101010] text-[#E6D5BD] hover:border-[#E6D5BD]/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Upper Content - Strictly Pixel-Aligned on All 4 Cards */}
                <div className="flex flex-col space-y-4">
                  {/* 1. Header (Tier number + badge): Exact h-7 */}
                  <div className="flex items-center justify-between gap-2 h-7">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      isFeatured ? 'text-[#E6D5BD]' : 'text-[#E6D5BD]/70'
                    }`}>
                      {pkg.number} // {pkg.name}
                    </span>

                    {pkg.badge ? (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${
                        isFeatured 
                          ? 'border-[#101010] bg-[#101010] text-[#E6D5BD] shadow-md' 
                          : 'border-[#E6D5BD]/15 bg-[#E6D5BD]/[0.05] text-[#E6D5BD]/80'
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
                      <span className={`text-3xl sm:text-4xl font-bold tracking-tight tabular-nums ${
                        isFeatured ? 'text-[#E6D5BD]' : 'text-[#E6D5BD]'
                      }`}>
                        {activeCurrencyConfig.prices[pkg.id] || pkg.priceINR}
                      </span>
                      <span className={`text-xs uppercase tracking-wider ${
                        isFeatured ? 'text-[#E6D5BD]/85 font-semibold' : 'text-[#E6D5BD]/60'
                      }`}>
                        / {pkg.priceLabel}
                      </span>
                    </div>
                    <p className={`text-xs mt-2 font-medium leading-tight ${
                      isFeatured ? 'text-[#E6D5BD] font-semibold' : 'text-[#E6D5BD]/80'
                    }`}>
                      {pkg.whatItMeans}
                    </p>
                  </div>

                  {/* 3. Turnaround Info: Exact h-5 */}
                  <div className={`h-5 text-xs font-semibold flex items-center gap-1.5 ${
                    isFeatured ? 'text-[#E6D5BD]' : 'text-[#E6D5BD]/70 font-medium'
                  }`}>
                    <span className={isFeatured ? 'text-[#101010]' : 'text-[#D5360C]'}>⏱</span>
                    <span>{pkg.turnaround}</span>
                  </div>

                  {/* 4. Short Pitch: Exact h-10 */}
                  <div className="h-10 flex items-start">
                    <p className={`text-xs leading-relaxed line-clamp-2 ${
                      isFeatured ? 'text-[#E6D5BD]/90 font-medium' : 'text-[#E6D5BD]/70'
                    }`}>
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Actions: Direct CTA + Polished Deliverables Toggle Button (Laser Aligned) */}
                <div className={`mt-5 pt-5 border-t space-y-2.5 ${
                  isFeatured ? 'border-[#101010]/20' : 'border-[#E6D5BD]/15'
                }`}>
                  <Link
                    href={`/contact?package=${pkg.id}&currency=${currency}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full h-11 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#101010] text-[#E6D5BD] hover:bg-[#181818] border border-[#101010] shadow-xl hover:scale-[1.01]'
                        : 'bg-[#E6D5BD]/10 hover:bg-[#E6D5BD]/20 border border-[#E6D5BD]/20 text-[#E6D5BD] hover:border-[#D5360C]'
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
                    className={`w-full h-10 px-3.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center justify-between cursor-pointer border ${
                      isFeatured
                        ? isExpanded
                          ? 'bg-[#101010] text-[#E6D5BD] border-[#101010] shadow-md'
                          : 'bg-[#101010]/20 hover:bg-[#101010]/30 border-[#101010]/30 text-[#E6D5BD]'
                        : isExpanded
                          ? 'bg-[#E6D5BD]/15 text-[#E6D5BD] border-[#D5360C]/50 shadow-sm'
                          : 'bg-[#E6D5BD]/5 hover:bg-[#E6D5BD]/10 border-[#E6D5BD]/15 text-[#E6D5BD]/80 hover:text-[#E6D5BD]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span 
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          isExpanded 
                            ? (isFeatured ? 'bg-[#E6D5BD]' : 'bg-[#D5360C]') 
                            : (isFeatured ? 'bg-[#E6D5BD]/80' : 'bg-[#E6D5BD]/40')
                        }`} 
                      />
                      <span className="text-[11px] uppercase tracking-wider font-semibold">
                        {isExpanded ? 'Hide Deliverables' : 'View Deliverables'}
                      </span>
                    </span>
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isFeatured
                          ? isExpanded ? 'rotate-180 bg-[#101010] text-[#E6D5BD]' : 'bg-[#101010]/30 text-[#E6D5BD]'
                          : isExpanded ? 'rotate-180 bg-[#D5360C] text-[#E6D5BD]' : 'bg-[#E6D5BD]/10 text-[#E6D5BD]/70'
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
                      ? `grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t ${
                          isFeatured ? 'border-[#101010]/20' : 'border-[#E6D5BD]/15'
                        }` 
                      : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                  }`}
                >
                  <div className="overflow-hidden space-y-4">
                    {/* Optional includes note (e.g. for DEEPWEB) */}
                    {pkg.includesNote && (
                      <div className={`text-[11px] font-semibold ${
                        isFeatured ? 'text-[#E6D5BD]' : 'text-[#E6D5BD]/90'
                      }`}>
                        {pkg.includesNote}
                      </div>
                    )}

                    {/* Features Checklist */}
                    <div className="space-y-2">
                      <span className={`text-[10px] uppercase tracking-wider font-bold block mb-2 ${
                        isFeatured ? 'text-[#101010]' : 'text-[#E6D5BD]/60'
                      }`}>
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check 
                              size={14} 
                              className={`mt-0.5 shrink-0 ${
                                isFeatured ? 'text-[#101010]' : 'text-[#D5360C]'
                              }`} 
                              strokeWidth={2.5}
                            />
                            <span className={`leading-snug ${
                              isFeatured ? 'text-[#E6D5BD] font-medium' : 'text-[#E6D5BD]/85'
                            }`}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Suited For Box */}
                    <div className={`pt-3 border-t text-[11px] leading-relaxed ${
                      isFeatured 
                        ? 'border-[#101010]/20 text-[#E6D5BD]' 
                        : 'border-[#E6D5BD]/10 text-[#E6D5BD]/70'
                    }`}>
                      <span className={`font-bold block mb-0.5 ${
                        isFeatured ? 'text-[#101010]' : 'text-[#E6D5BD]'
                      }`}>
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
                      className={`w-full text-center text-[10px] uppercase tracking-wider pt-1 transition-colors cursor-pointer ${
                        isFeatured ? 'text-[#101010] hover:text-[#101010]/80 font-bold' : 'text-[#E6D5BD]/60 hover:text-[#E6D5BD]'
                      }`}
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#101010]/15 bg-[#101010]/5 hover:bg-[#D5360C]/10 hover:border-[#D5360C] text-xs text-[#101010]/80 hover:text-[#D5360C] transition-all cursor-pointer"
          >
            <span>{showComparison ? 'Hide Specifications Matrix' : 'Compare All 4 Packages Side-by-Side'}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Clean Feature Comparison Matrix */}
        {showComparison && (
          <div className="mt-10 rounded-2xl border border-[#E6D5BD]/15 bg-[#101010] p-6 sm:p-10 shadow-2xl animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6D5BD]/15">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#E6D5BD]">
                  Package Specifications.
                </h3>
                <p className="text-xs sm:text-sm text-[#E6D5BD]/70 mt-1">
                  Side-by-side breakdown of velocities, architecture, and engineering deliverables.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D5360C] text-[#E6D5BD] text-xs font-semibold uppercase tracking-wider hover:bg-[#b82d09] transition-colors shrink-0"
              >
                <span>Consult Our Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E6D5BD]/15 text-[#E6D5BD]/60 uppercase text-[11px] tracking-wider">
                    <th className="py-4 pr-4 font-semibold text-[#E6D5BD]">Scope &amp; Capability</th>
                    <th className="py-4 px-3 font-semibold text-[#E6D5BD]">FASTFORWARD</th>
                    <th className="py-4 px-3 font-semibold text-[#E6D5BD]">DEEPWEB</th>
                    <th className="py-4 px-3 font-semibold text-[#E6D5BD]">ECOM</th>
                    <th className="py-4 pl-3 font-semibold text-[#E6D5BD]">FULL SEND</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6D5BD]/10 text-[#E6D5BD]/80">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-[#E6D5BD]/[0.03] transition-colors">
                      <td className="py-3.5 pr-4 font-medium text-[#E6D5BD]">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.f === 'boolean' ? (
                          row.f ? <CheckCircle2 size={16} className="text-[#D5360C]" /> : <Minus size={16} className="text-[#E6D5BD]/30" />
                        ) : (
                          <span className="text-[#E6D5BD]/75">{row.f}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.d === 'boolean' ? (
                          row.d ? <CheckCircle2 size={16} className="text-[#D5360C]" /> : <Minus size={16} className="text-[#E6D5BD]/30" />
                        ) : (
                          <span className="font-medium text-[#E6D5BD]">{row.d}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        {typeof row.e === 'boolean' ? (
                          row.e ? <CheckCircle2 size={16} className="text-[#D5360C]" /> : <Minus size={16} className="text-[#E6D5BD]/30" />
                        ) : (
                          <span className="text-[#E6D5BD]/75">{row.e}</span>
                        )}
                      </td>
                      <td className="py-3.5 pl-3">
                        {typeof row.s === 'boolean' ? (
                          row.s ? <CheckCircle2 size={16} className="text-[#D5360C]" /> : <Minus size={16} className="text-[#E6D5BD]/30" />
                        ) : (
                          <span className="font-medium text-[#E6D5BD]">{row.s}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Studio Manifesto Quote Banner Strip (100% Full-Bleed Screen Width) */}
        <div className="mt-20 sm:mt-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#D5360C] py-14 sm:py-20 px-6 sm:px-12 text-center shadow-2xl border-y border-[#D5360C] select-none overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-5">
            <blockquote className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#E6D5BD] uppercase leading-tight font-sans">
              &ldquo;We don&apos;t build websites to fill a URL.<br className="hidden sm:inline" />
              We build digital spaces people actually remember.&rdquo;
            </blockquote>

            <div className="inline-flex items-center justify-center gap-3 pt-3">
              <span className="h-px w-12 bg-[#101010]/40" />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#101010] font-mono font-black">
                KREW / MESH &mdash; DIGITAL CRAFT MANIFESTO
              </p>
              <span className="h-px w-12 bg-[#101010]/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

