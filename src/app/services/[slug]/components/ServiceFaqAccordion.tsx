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
                ? "bg-[#101010]/[0.05] border-[#101010]/25 shadow-sm"
                : "bg-[#101010]/[0.02] border-[#101010]/12 hover:border-[#101010]/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 text-base md:text-lg font-semibold text-[#101010] tracking-tight">
                <span
                  className="w-2 h-2 rounded-full shrink-0 transition-opacity"
                  style={{
                    backgroundColor: accentColor || "#D5360C",
                    opacity: isOpen ? 1 : 0.5,
                  }}
                />
                {faq.q}
              </span>
              <div
                className={`p-1.5 rounded-full border border-[#101010]/15 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#101010]/10 text-[#101010]" : "text-[#101010]/60"
                }`}
              >
                <ChevronDown className="size-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base text-[#101010]/80 leading-relaxed border-t border-[#101010]/10 animate-in fade-in duration-200 font-medium">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
