"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface ServiceFaqItem {
  q: string;
  a: string;
}

interface ServiceFaqAccordionProps {
  faqs: ServiceFaqItem[];
  accentColor: string;
}

export function ServiceFaqAccordion({ faqs, accentColor }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white/[0.04] border-white/20 shadow-lg"
                : "bg-white/[0.02] border-white/[0.08] hover:border-white/15"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 text-base md:text-lg font-semibold text-white tracking-tight">
                <span
                  className="w-2 h-2 rounded-full shrink-0 transition-opacity"
                  style={{
                    backgroundColor: accentColor,
                    opacity: isOpen ? 1 : 0.4,
                  }}
                />
                {faq.q}
              </span>
              <div
                className={`p-1.5 rounded-full border border-white/10 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-white/10 text-white" : "text-neutral-400"
                }`}
              >
                <ChevronDown className="size-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base text-neutral-300 leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-200">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
