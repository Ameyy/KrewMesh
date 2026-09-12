'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface SmoothScrollHeroProps {
  scrollHeight?: number;
  desktopImage?: string;
  mobileImage?: string;
  videoSrc?: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  title?: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SmoothScrollHero({
  scrollHeight = 1500,
  desktopImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
  mobileImage,
  videoSrc,
  initialClipPercentage = 20,
  finalClipPercentage = 100,
  title,
  subtitle,
  badge,
  children,
  className = "",
}: SmoothScrollHeroProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const clipPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    [initialClipPercentage, finalClipPercentage]
  );

  const clipPath = useTransform(clipPercentage, (val) => {
    const inset = (100 - val) / 2;
    return `inset(${inset}% ${inset}% ${inset}% ${inset}% round 16px)`;
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const effectiveMobileImage = mobileImage || desktopImage;

  return (
    <div
      ref={targetRef}
      className={`relative w-full h-[80vh] md:h-screen overflow-hidden bg-background z-40 ${className}`}
    >
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden shadow-2xl z-0"
      >
        {videoSrc ? (
          <motion.video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ scale }}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        ) : (
          <>
            <motion.img
              src={desktopImage}
              alt="Hero Desktop"
              style={{ scale }}
              className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <motion.img
              src={effectiveMobileImage}
              alt="Hero Mobile"
              style={{ scale }}
              className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-60"
            />
          </>
        )}
      </motion.div>

      {children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-20">
          {children}
        </div>
      )}
      
      {(title || subtitle || badge) && (
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-10"
        >
          {badge && (
            <span className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/90 bg-foreground/10 backdrop-blur-md rounded-full border border-foreground/20">
              {badge}
            </span>
          )}
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary max-w-4xl drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl drop-shadow">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
