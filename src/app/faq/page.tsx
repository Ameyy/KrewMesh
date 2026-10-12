import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SubpageHeaderBanner from '@/components/SubpageHeaderBanner';
import { FAQ_ITEMS } from '@/data/faq';
import FAQContent from './components/FAQContent';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://krewmesh.agency';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Krew / Mesh',
  description:
    'Find clear answers to common questions about Krew / Mesh web development, UI/UX design packages, delivery timelines, and full code ownership.',
  keywords: [
    'Krew Mesh FAQ',
    'web development questions',
    'website pricing FAQ',
    'UI UX design process',
    'Next.js development studio',
    'website deliverables and ownership'
  ],
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Krew / Mesh Studio',
    description:
      'Direct answers about our design craft, transparent packages starting at ₹9,999, Next.js architecture, and 100% IP code ownership.',
    url: `${baseUrl}/faq`,
    siteName: 'KREW / MESH',
    type: 'website',
  },
};

// Generate Schema.org FAQPage structured data for Google Rich Results
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/faq#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.summaryAnswer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/faq#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'FAQ',
          item: `${baseUrl}/faq`,
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-background text-[#101010] pt-8 sm:pt-12 pb-24 overflow-hidden selection:bg-[#101010]/10">
      {/* Schema.org FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D5360C]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-[11px] sm:text-xs font-mono tracking-widest text-[#D5360C] uppercase backdrop-blur-md font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
            <span>KREW / MESH • KNOWLEDGE BASE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase leading-[1.1]">
            Frequently Asked <span className="text-[#D5360C]">Questions.</span>
          </h1>

          <p className="text-[#101010]/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Direct, transparent answers about our website packages, transparent pricing, Next.js architecture, and studio workflow.
          </p>
        </div>

        {/* Clean FAQ Accordion */}
        <FAQContent />
      </div>
    </div>
  );
}
