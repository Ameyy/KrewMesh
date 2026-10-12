"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, ExternalLink, FileCode, Shield } from "lucide-react";

export function SitemapQuickActions() {
  const [copied, setCopied] = useState(false);
  const sitemapUrl = "https://krewmesh.agency/sitemap.xml";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sitemapUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {/* XML Sitemap Card */}
      <div className="relative rounded-2xl border border-[#101010]/15 bg-[#101010]/[0.04] backdrop-blur-xl p-6 transition-all hover:border-[#D5360C]/40">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5360C]/10 text-[#D5360C] border border-[#D5360C]/20">
              <FileCode className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D5360C] font-bold">
                Google Search Console Feed
              </span>
              <h3 className="text-base font-bold text-[#101010]">XML Sitemap Index</h3>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-500/20">
            Validated XML
          </span>
        </div>

        <p className="text-xs text-[#101010]/80 leading-relaxed mb-4 font-medium">
          Machine-readable XML index compliant with Sitemaps.org and Google Search Console protocol.
          Contains canonical URLs, lastmod timestamps, and indexing priorities.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-4 py-2 text-xs font-bold text-[#E6D5BD] transition-colors hover:bg-[#D5360C]"
          >
            <span>Open sitemap.xml</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#101010]/20 bg-[#101010]/[0.05] px-4 py-2 text-xs font-bold text-[#101010] transition-colors hover:bg-[#101010] hover:text-[#E6D5BD]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#D5360C]" />
                <span className="text-[#D5360C]">Copied for GSC!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy URL for Console</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Robots.txt Card */}
      <div className="relative rounded-2xl border border-[#101010]/15 bg-[#101010]/[0.04] backdrop-blur-xl p-6 transition-all hover:border-[#D5360C]/40">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5360C]/10 text-[#D5360C] border border-[#D5360C]/20">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D5360C] font-bold">
                Search Engine Protocol
              </span>
              <h3 className="text-base font-bold text-[#101010]">Robots Directives</h3>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-[#101010]/[0.08] px-2.5 py-0.5 text-[11px] font-bold text-[#101010] border border-[#101010]/15">
            robots.txt
          </span>
        </div>

        <p className="text-xs text-[#101010]/80 leading-relaxed mb-4 font-medium">
          Instructs Googlebot, Bingbot, and legitimate web crawlers on allowable paths while
          directly referencing the canonical sitemap location.
        </p>

        <div className="flex items-center gap-2">
          <Link
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#101010]/20 bg-[#101010]/[0.05] px-4 py-2 text-xs font-bold text-[#101010] transition-colors hover:bg-[#101010] hover:text-[#E6D5BD]"
          >
            <span>Inspect robots.txt</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* LLMs.txt GEO / AEO Feed Card */}
      <div className="relative rounded-2xl border border-[#101010]/15 bg-[#101010]/[0.04] backdrop-blur-xl p-6 transition-all hover:border-[#D5360C]/40 md:col-span-2">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5360C]/10 text-[#D5360C] border border-[#D5360C]/20">
              <span className="text-xs font-mono font-bold">AI</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D5360C] font-bold">
                Generative Engine Optimization (GEO & AEO)
              </span>
              <h3 className="text-base font-bold text-[#101010]">LLMs Context & Knowledge Feed</h3>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-[#D5360C]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#D5360C] border border-[#D5360C]/30">
            llms.txt Validated
          </span>
        </div>

        <p className="text-xs text-[#101010]/80 leading-relaxed mb-4 font-medium">
          Structured markdown specification for AI inference engines (ChatGPT, Perplexity, Gemini, Claude, SearchGPT) indexing Krew / Mesh studio capabilities, white-label B2B overflow, and verified citations.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-4 py-2 text-xs font-bold text-[#E6D5BD] transition-colors hover:bg-[#D5360C]"
          >
            <span>Open llms.txt</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <span className="text-[11px] font-mono text-[#101010]/60">
            Standard: https://krewmesh.agency/llms.txt
          </span>
        </div>
      </div>
    </div>
  );
}
