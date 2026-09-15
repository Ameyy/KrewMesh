"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "bg-[linear-gradient(110deg,#0a0a0a_0.6%,#111113)] p-6 sm:p-7 md:p-8 w-full rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300 relative overflow-hidden flex flex-col justify-between group",
        className
      )}
    >
      <div className="flex items-center justify-center w-full mb-6">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "font-bold text-xl md:text-2xl text-white uppercase tracking-wider",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-sm text-neutral-400 font-light leading-relaxed mt-2",
        className
      )}
    >
      {children}
    </p>
  );
};

interface DotConfig {
  delay: number;
  duration: number;
}

const Star = ({
  config,
  mouseEnter,
}: {
  config?: DotConfig;
  mouseEnter: boolean;
}) => {
  if (!config) {
    return (
      <div className="relative flex items-center justify-center w-6 h-6">
        <div className="w-[2px] h-[2px] rounded-full bg-neutral-700/60" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.3,
          backgroundColor: "#525252",
          boxShadow: "0 0 0px rgba(56, 189, 248, 0)",
        }}
        animate={{
          scale: [1, 1, 1.4, 1, 1],
          opacity: [0.3, 0.3, 1, 0.3, 0.3],
          backgroundColor: [
            "#525252",
            "#525252",
            "#bae6fd",
            "#525252",
            "#525252",
          ],
          boxShadow: [
            "0 0 0px rgba(56, 189, 248, 0)",
            "0 0 0px rgba(56, 189, 248, 0)",
            "0 0 5px #38bdf8, 0 0 10px #0284c7",
            "0 0 0px rgba(56, 189, 248, 0)",
            "0 0 0px rgba(56, 189, 248, 0)",
          ],
        }}
        transition={{
          duration: mouseEnter ? config.duration * 0.75 : config.duration,
          repeat: Infinity,
          repeatType: "loop",
          delay: config.delay,
          times: [0, 0.35, 0.5, 0.65, 1],
          ease: "easeInOut",
        }}
        className="w-[2px] h-[2px] rounded-full pointer-events-none"
      />
    </div>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const columns = 10;
  const rows = 5;
  const totalStars = columns * rows;

  const [dotConfigs, setDotConfigs] = useState<DotConfig[] | null>(null);

  useEffect(() => {
    // Generate unique random cycle timings for each dot on this card
    const configs: DotConfig[] = [];
    for (let i = 0; i < totalStars; i++) {
      const duration = 4.5 + Math.random() * 4;
      const delay = Math.random() * 7;
      configs.push({ delay, duration });
    }
    setDotConfigs(configs);
  }, [totalStars]);

  return (
    <div
      className="grid gap-1.5 sm:gap-2 p-2 w-full justify-between items-center select-none"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: totalStars }).map((_, i) => (
        <Star
          key={i}
          config={dotConfigs ? dotConfigs[i] : undefined}
          mouseEnter={mouseEnter}
        />
      ))}
    </div>
  );
};

export default GlowingStarsBackgroundCard;
