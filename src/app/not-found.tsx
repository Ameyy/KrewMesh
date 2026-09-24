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
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-24 overflow-hidden selection:bg-white/20">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[140px] opacity-25 rounded-full"
        style={{ background: "#FF1493" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/3 w-[450px] h-[350px] blur-[150px] opacity-20 rounded-full"
        style={{ background: "#00E5FF" }}
      />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono tracking-widest text-neutral-400 mb-6 uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Error 404 • Destination Lost</span>
        </div>

        {/* 404 Large Display */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none select-none mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
          Lost In The Mesh.
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-medium tracking-wide transition-all backdrop-blur-md hover:border-white/30"
          >
            <Compass size={16} />
            <span>Explore Sitemap</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
