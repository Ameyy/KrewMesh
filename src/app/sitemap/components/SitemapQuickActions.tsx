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
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all hover:border-white/20 hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileCode className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
                Google Search Console Feed
              </span>
              <h3 className="text-base font-semibold text-white">XML Sitemap Index</h3>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
            Validated XML
          </span>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
          Machine-readable XML index compliant with Sitemaps.org and Google Search Console protocol.
          Contains canonical URLs, lastmod timestamps, and indexing priorities.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500"
          >
            <span>Open sitemap.xml</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied for GSC!</span>
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
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all hover:border-white/20 hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400">
                Search Engine Protocol
              </span>
              <h3 className="text-base font-semibold text-white">Robots Exclusion Directives</h3>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-500/20">
            robots.txt
          </span>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
          Instructs Googlebot, Bingbot, and legitimate web crawlers on allowable paths while
          directly referencing the canonical sitemap location.
        </p>

        <div className="flex items-center gap-2">
          <Link
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <span>Inspect robots.txt</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
