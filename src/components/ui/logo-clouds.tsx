"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LOGOS } from "@/components/ui/logo-clouds-utils/logos";

export type LogoEntry = {
  icon: React.ReactNode;
  name?: string;
  id?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: string;
  subtitle?: string;
  interval?: number;
  stagger?: number;
  className?: string;
};

const WIPE_DURATION = 0.92;
const WIPE_TIMES = [0, 0.4, 1];

const DEFAULT_LOGOS: LogoEntry[] = LOGOS.map((l) => ({
  icon: (
    <l.Icon className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: l.color }} aria-hidden="true" />
  ),
  name: l.name,
  id: l.name,
}));

function LogoItem({
  logo,
  index,
  isWaving,
  stagger,
  totalCount,
  onDone,
}: {
  logo: LogoEntry;
  index: number;
  isWaving: boolean;
  stagger: number;
  totalCount: number;
  onDone: () => void;
}) {
  return (
    <motion.div
      aria-label={logo.name ?? "Logo"}
      animate={
        isWaving
          ? {
              clipPath: [
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
              ],
              filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
              opacity: [1, 0.2, 1],
            }
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              opacity: 1,
            }
      }
      transition={
        isWaving
          ? {
              clipPath: {
                duration: WIPE_DURATION,
                times: WIPE_TIMES,
                ease: ["easeIn", [0.16, 1, 0.3, 1]],
                delay: index * stagger,
              },
              filter: {
                duration: WIPE_DURATION * 0.9,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
              opacity: {
                duration: WIPE_DURATION * 0.85,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={() => {
        if (isWaving && index === totalCount - 1) onDone();
      }}
      whileHover={{
        scale: 1.07,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      className="flex w-20 sm:w-28 shrink-0 cursor-default flex-col items-center gap-2 p-3 rounded-2xl hover:bg-[#101010]/[0.03] transition-colors"
    >
      <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#101010]/[0.04] border border-[#101010]/10 shadow-sm backdrop-blur-sm transition-transform group-hover:scale-105">
        {logo.icon}
      </span>
      {logo.name && (
        <span className="select-none whitespace-nowrap text-[11px] font-mono uppercase tracking-wider font-semibold text-[#101010]/70 sm:text-xs">
          {logo.name}
        </span>
      )}
    </motion.div>
  );
}

export default function LogoCloudSwap({
  logos = DEFAULT_LOGOS,
  title = "TRUSTED BY AMBITIOUS FOUNDERS & GLOBAL BRANDS",
  subtitle = "Powering next-generation digital products, high-conversion web platforms, and venture-scale identities.",
  interval = 3200,
  stagger = 0.11,
  className,
}: LogoCloudSwapProps) {
  const [waving, setWaving] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => setWaving(true), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <section
      className={cn("w-full bg-transparent px-4 py-12 sm:py-16 relative overflow-hidden", className)}
      aria-label="Client & Partner Brands"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#D5360C]/[0.025] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5360C]/25 bg-[#D5360C]/[0.08] text-[11px] font-mono tracking-widest text-[#D5360C] uppercase backdrop-blur-md font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
          <span>CLIENT PARTNERSHIPS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101010] uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-[#101010]/70 max-w-xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-6xl sm:mt-12">
        {/* Desktop / Tablet layout */}
        <div className="hidden items-center justify-center gap-4 sm:flex sm:flex-wrap sm:gap-6 md:gap-8 lg:gap-10">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4 sm:hidden">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { LogoCloudSwap };
