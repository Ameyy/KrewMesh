import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faq';
import FAQContent from './components/FAQContent';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://krewmesh.agency';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Krew / Mesh Studio',
  description:
    'Answers to common questions about Krew / Mesh web development, UI/UX design, FASTFORWARD & DEEPWEB pricing packages, Next.js tech stack, delivery timelines, and project ownership.',
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
    <div className="relative min-h-screen bg-black text-white pt-32 sm:pt-40 pb-24 overflow-hidden selection:bg-white/20 selection:text-white">
      {/* Schema.org FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back Link / Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Studio Overview</span>
          </Link>
        </div>

        {/* Header (Clean, professional, zero gradient text) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KREW / MESH • KNOWLEDGE BASE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1]">
            Frequently Asked <span className="text-neutral-500">Questions.</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Direct, transparent answers about our web builds, pricing packages, Next.js architecture, and studio workflow.
          </p>
        </div>

        {/* Clean, Non-Boxy FAQ Accordion */}
        <FAQContent />
      </div>
    </div>
  );
}
