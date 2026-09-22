'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  HelpCircle, 
  RotateCcw,
  X
} from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faq';

export default function FAQContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(new Set(['cost-pricing', 'timeline-launch']));

  // Filter items based on search query across question, summaryAnswer, and keywords
  const filteredFAQs = useMemo(() => {
    if (!searchTerm.trim()) return FAQ_ITEMS;

    const query = searchTerm.toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const matchesQuestion = item.question.toLowerCase().includes(query);
      const matchesSummary = item.summaryAnswer.toLowerCase().includes(query);
      const matchesKeywords = item.keywords.some((k) => k.toLowerCase().includes(query));

      return matchesQuestion || matchesSummary || matchesKeywords;
    });
  }, [searchTerm]);

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Single smart toggle button: If all items currently shown are open, collapse all. Otherwise, expand all.
  const allExpanded = filteredFAQs.length > 0 && filteredFAQs.every((item) => openItemIds.has(item.id));
  const toggleAll = () => {
    if (allExpanded) {
      setOpenItemIds(new Set());
    } else {
      setOpenItemIds(new Set(filteredFAQs.map((item) => item.id)));
    }
  };

  return (
    <div className="w-full">
      {/* Search Bar — Completely Borderless & Box-Free */}
      <div className="max-w-xl mx-auto mb-12">
        <div 
          className="relative flex items-center bg-neutral-900/70 rounded-full px-4 py-1 backdrop-blur-md transition-colors border-none"
          style={{ border: 'none', outline: 'none' }}
        >
          <Search className="h-4 w-4 text-neutral-500 pointer-events-none shrink-0" />
          <input
            id="faq-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. cost, timeline, mobile, SEO, updates)..."
            style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}
            className="w-full pl-3 pr-8 py-3 bg-transparent rounded-full text-white placeholder-neutral-500 text-sm border-none outline-none focus:outline-none focus:ring-0 transition-colors"
            aria-label="Search questions"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
              className="absolute right-3.5 p-1 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer border-none outline-none bg-transparent"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Header Info & Single Smart Toggle — Completely Borderless */}
      <div 
        className="max-w-3xl mx-auto flex items-center justify-between text-xs text-neutral-500 pb-3 mb-4 px-1 border-none"
        style={{ border: 'none', outline: 'none' }}
      >
        <div>
          <span>{filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}</span>
          {searchTerm && <span className="text-neutral-400"> for &ldquo;{searchTerm}&rdquo;</span>}
        </div>
        {filteredFAQs.length > 0 && (
          <button
            type="button"
            onClick={toggleAll}
            style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border-none outline-none bg-transparent p-0"
            aria-label={allExpanded ? 'Collapse all questions' : 'Expand all questions'}
          >
            <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
          </button>
        )}
      </div>

      {/* Accordion — Completely Borderless & Box-Free */}
      <div className="max-w-3xl mx-auto space-y-1">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-16 px-4">
            <HelpCircle size={32} className="mx-auto text-neutral-600 mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">No matching questions</h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-6">
              We couldn&apos;t find anything matching &ldquo;{searchTerm}&rdquo;. Try another keyword or clear your search.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs text-white transition-all cursor-pointer border-none outline-none"
            >
              <RotateCcw size={12} />
              <span>Clear Search</span>
            </button>
          </div>
        ) : (
          filteredFAQs.map((item, index) => {
            const isOpen = openItemIds.has(item.id);
            const questionNumber = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={item.id} 
                className="py-3 px-2 sm:px-3 rounded-lg transition-colors border-none"
                style={{ border: 'none', outline: 'none' }}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
                  className="w-full py-1.5 flex items-start justify-between gap-6 text-left group cursor-pointer border-none outline-none bg-transparent p-0 focus:outline-none select-none"
                >
                  <div className="flex items-start gap-4 pr-2">
                    <span className="text-xs font-mono text-neutral-500 pt-1 shrink-0">
                      {questionNumber}
                    </span>
                    <span className={`text-base sm:text-lg transition-colors ${isOpen ? 'text-white font-semibold' : 'text-neutral-300 font-medium group-hover:text-white'}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 pt-1 text-neutral-500 group-hover:text-white transition-colors">
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="pt-3 pb-3 pl-8 sm:pl-9 pr-2 text-sm sm:text-base leading-relaxed text-neutral-400 border-none outline-none"
                    style={{ border: 'none', outline: 'none' }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Section — Completely Borderless */}
      <div className="max-w-xl mx-auto mt-24 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Still have a question?
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Need details on pricing, custom features, or project scheduling? Reach out directly and we will help you plan your next steps.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} />
          </Link>
          <a
            href="https://wa.me/919209839142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
