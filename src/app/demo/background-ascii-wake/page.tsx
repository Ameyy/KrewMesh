"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, RefreshCw, Layers } from "lucide-react";
import { WakeGlyph } from "@/components/ui/background-ascii-wake";

export default function AsciiWakePreviewPage() {
  const [cellSize, setCellSize] = useState<number>(9);
  const [color, setColor] = useState<string>("#101010");
  const [seed, setSeed] = useState<number>(0);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#E6D5BD] text-[#101010]">
      {/* Interactive ASCII Wake Canvas */}
      <div key={`${cellSize}-${color}-${seed}`} className="absolute inset-0">
        <WakeGlyph
          cellSize={cellSize}
          color={color}
          globalPointer={true}
          className="w-full h-full"
        />
      </div>

      {/* Floating Header & Navigation */}
      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pointer-events-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#101010]/20 bg-[#E6D5BD]/80 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-[#101010] hover:bg-[#D5360C] hover:border-[#D5360C] hover:text-[#E6D5BD] transition-all shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>Back to Website</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-xs font-mono uppercase tracking-wider text-[#D5360C]">
            <span className="w-2 h-2 rounded-full bg-[#D5360C] animate-pulse" />
            <span>ASCII Wake Effect // Active</span>
          </div>
        </div>

        {/* Live Controls */}
        <div className="flex flex-wrap items-center gap-3 bg-[#E6D5BD]/90 backdrop-blur-md border border-[#101010]/15 rounded-2xl p-2.5 shadow-xl">
          {/* Cell Density Selector */}
          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="px-2 text-[#101010]/60">CELL:</span>
            {[8, 9, 10, 12].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setCellSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  cellSize === size
                    ? "bg-[#101010] text-[#E6D5BD] shadow-sm"
                    : "text-[#101010]/70 hover:bg-[#101010]/10"
                }`}
              >
                {size}px
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-[#101010]/20" />

          {/* Color Selector */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="px-1 text-[#101010]/60">INK:</span>
            <button
              type="button"
              onClick={() => setColor("#101010")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                color === "#101010"
                  ? "bg-[#101010] text-[#E6D5BD] shadow-sm"
                  : "text-[#101010]/70 hover:bg-[#101010]/10"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#101010] border border-white/40" />
              <span>Soft Black</span>
            </button>
            <button
              type="button"
              onClick={() => setColor("#D5360C")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                color === "#D5360C"
                  ? "bg-[#D5360C] text-[#E6D5BD] shadow-sm"
                  : "text-[#101010]/70 hover:bg-[#101010]/10"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#D5360C]" />
              <span>Burnt Orange</span>
            </button>
          </div>

          <div className="h-4 w-px bg-[#101010]/20" />

          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            title="Reseed ambient scatter"
            className="p-1.5 rounded-lg text-[#101010]/70 hover:text-[#D5360C] hover:bg-[#101010]/10 transition-colors"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Floating Center Badge / Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-6 text-center pointer-events-none select-none">
        <div className="max-w-2xl bg-[#E6D5BD]/40 backdrop-blur-sm border border-[#101010]/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#101010]/15 bg-[#101010]/5 text-[11px] font-mono uppercase tracking-widest text-[#101010] mb-4">
            <Sparkles size={12} className="text-[#D5360C]" />
            <span>Interactive Comet Field</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            ASCII WAKE
          </h1>
          <p className="text-sm sm:text-base text-[#101010]/80 font-mono max-w-lg mx-auto leading-relaxed">
            Move your cursor or swipe anywhere across the screen. Faster passes carve thin, fleeting ribbons; slow passes leave lingering dense glyph blooms.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-[#101010]/60">
            <span>DENSITY: {cellSize}px</span>
            <span>•</span>
            <span>COLOR: {color === "#101010" ? "Soft Black" : "Burnt Orange"}</span>
            <span>•</span>
            <span>MODE: Global Pointer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
