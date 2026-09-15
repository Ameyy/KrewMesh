"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface HolographicBeamsProps {
  density?: number; // Number of pillars / beams
  speed?: number; // Movement speed
  aberration?: number; // Intensity of RGB chromatic shift in px
  opacity?: number; // Brightness (0-100 or 0-1)
  className?: string;
  children?: React.ReactNode;
}

interface Pillar {
  xRatio: number;
  width: number;
  speedMultiplier: number;
  swayAmp: number;
  swayPhase: number;
  pulsePhase: number;
  pulseSpeed: number;
  baseOpacity: number;
}

export function HolographicBeams({
  density = 15,
  speed = 1.5,
  aberration = 3,
  opacity = 90,
  className,
  children,
}: HolographicBeamsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Initialize pillars based on density
    const count = Math.max(3, Math.round(density));
    const pillars: Pillar[] = [];

    for (let i = 0; i < count; i++) {
      pillars.push({
        xRatio: (i + Math.random() * 0.5) / count,
        width: 25 + Math.random() * 55,
        speedMultiplier: 0.6 + Math.random() * 0.8,
        swayAmp: 10 + Math.random() * 25,
        swayPhase: Math.random() * Math.PI * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.8 + Math.random() * 1.2,
        baseOpacity: 0.35 + Math.random() * 0.55,
      });
    }

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);
    resize();

    // Optimize performance when off-screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    const normOpacity = (opacity > 1 ? opacity / 100 : opacity) * 0.85;

    let startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (now - startTime) * 0.001;
      ctx.clearRect(0, 0, width, height);

      // Additive blending for holographic chromatic aberration
      ctx.globalCompositeOperation = "lighter";

      const rOffset = -aberration;
      const gOffset = 0;
      const bOffset = aberration;

      for (let i = 0; i < pillars.length; i++) {
        const p = pillars[i];

        // Animated position with smooth sway
        const sway = Math.sin(elapsed * speed * p.speedMultiplier + p.swayPhase) * p.swayAmp;
        let baseX = (p.xRatio * width + sway) % width;
        if (baseX < 0) baseX += width;

        // Pulsing luminance
        const pulse = 0.55 + 0.45 * Math.sin(elapsed * speed * p.pulseSpeed + p.pulsePhase);
        const alpha = p.baseOpacity * pulse * normOpacity;
        const halfW = p.width / 2;

        if (alpha <= 0.01) continue;

        // 1. Red / Magenta channel shifted by rOffset
        {
          const x = baseX + rOffset;
          const grad = ctx.createLinearGradient(x - halfW, 0, x + halfW, 0);
          grad.addColorStop(0, "rgba(255, 20, 80, 0)");
          grad.addColorStop(0.3, `rgba(255, 30, 90, ${alpha * 0.7})`);
          grad.addColorStop(0.5, `rgba(255, 40, 120, ${alpha})`);
          grad.addColorStop(0.7, `rgba(255, 30, 90, ${alpha * 0.7})`);
          grad.addColorStop(1, "rgba(255, 20, 80, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(x - halfW, 0, p.width, height);
        }

        // 2. Green / Cyan channel at center
        {
          const x = baseX + gOffset;
          const grad = ctx.createLinearGradient(x - halfW, 0, x + halfW, 0);
          grad.addColorStop(0, "rgba(0, 240, 200, 0)");
          grad.addColorStop(0.3, `rgba(0, 255, 210, ${alpha * 0.75})`);
          grad.addColorStop(0.5, `rgba(30, 255, 230, ${alpha * 1.1})`);
          grad.addColorStop(0.7, `rgba(0, 255, 210, ${alpha * 0.75})`);
          grad.addColorStop(1, "rgba(0, 240, 200, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(x - halfW, 0, p.width, height);
        }

        // 3. Blue / Violet channel shifted by bOffset
        {
          const x = baseX + bOffset;
          const grad = ctx.createLinearGradient(x - halfW, 0, x + halfW, 0);
          grad.addColorStop(0, "rgba(60, 100, 255, 0)");
          grad.addColorStop(0.3, `rgba(80, 130, 255, ${alpha * 0.7})`);
          grad.addColorStop(0.5, `rgba(100, 160, 255, ${alpha})`);
          grad.addColorStop(0.7, `rgba(80, 130, 255, ${alpha * 0.7})`);
          grad.addColorStop(1, "rgba(60, 100, 255, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(x - halfW, 0, p.width, height);
        }
      }

      // Vertical fade mask: softer at top and bottom edges
      ctx.globalCompositeOperation = "destination-in";
      const vMask = ctx.createLinearGradient(0, 0, 0, height);
      vMask.addColorStop(0, "rgba(0, 0, 0, 0)");
      vMask.addColorStop(0.15, "rgba(0, 0, 0, 1)");
      vMask.addColorStop(0.85, "rgba(0, 0, 0, 1)");
      vMask.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = vMask;
      ctx.fillRect(0, 0, width, height);

      // Subtle holographic scanlines overlay
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1.5);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [density, speed, aberration, opacity]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden pointer-events-none select-none",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export { HolographicBeams as BeamsBackground };
export default HolographicBeams;
