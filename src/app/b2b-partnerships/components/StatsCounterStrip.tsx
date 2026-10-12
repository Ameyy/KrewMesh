"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  from?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function AnimatedNumber({
  value,
  from = 0,
  suffix = "",
  duration = 2.0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [current, setCurrent] = useState<number>(from);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    let startTimestamp: number | null = null;
    const startVal = from;
    const endVal = value;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      
      // Premium easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.round(startVal + (endVal - startVal) * ease);
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, mounted, value, from, duration]);

  return (
    <span ref={ref} className={className}>
      {mounted ? current : value}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    value: 100,
    from: 0,
    suffix: "%",
    color: "text-[#D5360C]",
    label: "Ghost / White-Label",
    subtext: "Zero studio branding",
  },
  {
    value: 48,
    from: 0,
    suffix: "h",
    color: "text-[#E6D5BD]",
    label: "Rapid Kick-Off",
    subtext: "Active sprint commits",
  },
  {
    value: 0,
    from: 15,
    suffix: "%",
    color: "text-[#D5360C]",
    label: "Client Poaching",
    subtext: "Ironclad non-solicitation",
  },
  {
    value: 100,
    from: 0,
    suffix: "%",
    color: "text-[#E6D5BD]",
    label: "Agency IP Ownership",
    subtext: "Code & Figma 100% yours",
  },
];

export function StatsCounterStrip() {
  return (
    <div className="pt-12 sm:pt-16 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#181818]/90 to-[#121212]/90 border border-[#E6D5BD]/15 hover:border-[#D5360C]/50 transition-all duration-300 text-left overflow-hidden shadow-xl"
          >
            {/* Ambient top corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D5360C]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#D5360C]/20 transition-all duration-300" />

            {/* Huge Animated Number */}
            <div className="relative z-10 flex items-baseline">
              <AnimatedNumber
                value={stat.value}
                from={stat.from}
                suffix={stat.suffix}
                duration={1.8}
                className={`text-4xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-tight ${stat.color} leading-none`}
              />
            </div>

            {/* Labels */}
            <div className="relative z-10 mt-3 sm:mt-4 space-y-1">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E6D5BD] font-semibold">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#E6D5BD]/55 font-light leading-tight">
                {stat.subtext}
              </div>
            </div>

            {/* Subtle bottom border accent */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#E6D5BD]/10 to-transparent group-hover:via-[#D5360C]/40 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
