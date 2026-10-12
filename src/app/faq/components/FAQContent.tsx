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
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div 
          className="relative flex items-center bg-[#101010]/[0.05] border border-[#101010]/15 rounded-full px-4 py-1 backdrop-blur-md transition-colors"
        >
          <Search className="h-4 w-4 text-[#101010]/60 pointer-events-none shrink-0" />
          <input
            id="faq-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. cost, timeline, mobile, SEO, updates)..."
            style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}
            className="w-full pl-3 pr-8 py-3 bg-transparent rounded-full text-[#101010] placeholder:text-[#101010]/60 placeholder:opacity-100 text-sm font-medium border-none outline-none focus:outline-none focus:ring-0 transition-colors"
            aria-label="Search questions"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
              className="absolute right-3.5 p-1 rounded-full text-[#101010]/60 hover:text-[#D5360C] transition-colors cursor-pointer border-none outline-none bg-transparent"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Header Info & Toggle */}
      <div 
        className="max-w-3xl mx-auto flex items-center justify-between text-xs text-[#101010]/70 pb-3 mb-4 px-1 font-semibold"
      >
        <div>
          <span>{filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}</span>
          {searchTerm && <span className="text-[#D5360C]"> for &ldquo;{searchTerm}&rdquo;</span>}
        </div>
        {filteredFAQs.length > 0 && (
          <button
            type="button"
            onClick={toggleAll}
            style={{ border: 'none', outline: 'none', background: 'transparent', boxShadow: 'none' }}
            className="text-xs font-mono uppercase tracking-wider text-[#101010]/70 hover:text-[#D5360C] transition-colors cursor-pointer flex items-center gap-1.5 border-none outline-none bg-transparent p-0 font-bold"
            aria-label={allExpanded ? 'Collapse all questions' : 'Expand all questions'}
          >
            <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
          </button>
        )}
      </div>

      {/* Accordion */}
      <h2 className="sr-only">General Agency Questions &amp; Answers</h2>
      <div className="max-w-3xl mx-auto space-y-2">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-16 px-4">
            <HelpCircle size={32} className="mx-auto text-[#101010]/50 mb-3" />
            <h3 className="text-base font-bold text-[#101010] mb-1">No matching questions</h3>
            <p className="text-sm text-[#101010]/75 max-w-sm mx-auto mb-6 font-medium">
              We couldn&apos;t find anything matching &ldquo;{searchTerm}&rdquo;. Try another keyword or clear your search.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101010] text-xs text-[#E6D5BD] hover:bg-[#D5360C] transition-all cursor-pointer font-bold border-none outline-none"
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
                className="py-3.5 px-4 sm:px-5 rounded-xl border border-[#101010]/12 bg-[#101010]/[0.03] hover:border-[#101010]/25 transition-all"
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
                    <span className="text-xs font-mono font-bold text-[#D5360C] pt-1 shrink-0">
                      {questionNumber}
                    </span>
                    <span className={`text-base sm:text-lg transition-colors ${isOpen ? 'text-[#101010] font-bold' : 'text-[#101010] font-semibold group-hover:text-[#D5360C]'}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 pt-1 text-[#101010]/60 group-hover:text-[#D5360C] transition-colors">
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
                    className="pt-3 pb-3 pl-8 sm:pl-9 pr-2 text-sm sm:text-base leading-relaxed text-[#101010]/80 font-medium"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Section */}
      <div className="max-w-xl mx-auto mt-20 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#101010] tracking-tight">
          Still have a question?
        </h2>
        <p className="text-sm text-[#101010]/80 leading-relaxed font-medium">
          Need details on pricing, custom features, or project scheduling? Reach out directly and we will help you plan your next steps.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#101010] text-[#E6D5BD] hover:bg-[#D5360C] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} />
          </Link>
          <a
            href="https://wa.me/919209839142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#101010]/20 bg-[#101010]/[0.05] hover:bg-[#101010] hover:text-[#E6D5BD] text-[#101010] text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
