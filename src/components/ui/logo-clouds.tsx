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
  icon: l.imageSrc ? (
    <img
      src={l.imageSrc}
      srcSet={`${l.imageSrc} 1x, ${l.imageSrc2x || l.imageSrc} 2x`}
      alt={l.name}
      className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain select-none transition-all duration-300 opacity-90 hover:opacity-100"
      loading="lazy"
    />
  ) : l.Icon ? (
    <l.Icon className="h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 opacity-90 hover:opacity-100 transition-opacity" style={{ color: l.color }} aria-hidden="true" />
  ) : null,
  name: l.name,
  id: l.id,
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
        scale: 1.08,
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      className="flex items-center justify-center p-2 sm:p-3 cursor-default select-none"
    >
      <div className="flex items-center justify-center">
        {logo.icon}
      </div>
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

      <div className="relative z-10 mx-auto mt-8 max-w-6xl sm:mt-12 px-2">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-14">
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
