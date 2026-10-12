import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const metadata: Metadata = {
  title: "404 — Page Not Found | KREW / MESH",
  description: "The page you are looking for does not exist or has been relocated.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#E6D5BD] text-[#101010] flex items-center justify-center px-6 py-24 overflow-hidden selection:bg-[#D5360C]/20">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[140px] opacity-15 rounded-full"
        style={{ background: "#D5360C" }}
      />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#101010]/20 bg-[#101010]/5 text-[11px] font-mono tracking-widest text-[#101010] mb-6 uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
          <span>Error 404 • Destination Lost</span>
        </div>

        {/* 404 Large Display */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-[#101010] uppercase leading-none select-none mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#D5360C] mb-4">
          Lost In The Mesh.
        </h2>

        <p className="text-[#101010]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
          The requested coordinate does not exist, has moved, or has been reconstructed. Let&apos;s get you back to the main studio experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <RainbowButton href="/">
            <span className="flex items-center gap-2">
              <Home size={16} />
              Return Home
            </span>
          </RainbowButton>

          <Link
            href="/sitemap"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#101010]/20 bg-[#101010]/5 hover:bg-[#D5360C] hover:border-[#D5360C] hover:text-[#E6D5BD] text-[#101010] text-sm font-semibold tracking-wide transition-all backdrop-blur-md"
          >
            <Compass size={16} />
            <span>Explore Sitemap</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
