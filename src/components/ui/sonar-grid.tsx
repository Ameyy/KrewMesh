"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SonarGridProps {
  id?: string;
  ringWidth?: number;
  speed?: number;
  amplitude?: number;
  pingEvery?: number;
  interactive?: boolean;
  spacing?: number;
  baseOpacity?: number;
  color?: string;
  pingArea?: [number, number, number, number];
  className?: string;
  children?: React.ReactNode;
}

interface Ping {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
}

function parseColorToRgb(colorStr: string): [number, number, number] {
  if (colorStr.startsWith("#")) {
    let hex = colorStr.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  if (colorStr.startsWith("rgb")) {
    const match = colorStr.match(/\d+/g);
    if (match && match.length >= 3) {
      return [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])];
    }
  }
  return [16, 16, 16]; // Default to soft black
}

export function SonarGrid({
  id = "sonar-grid",
  ringWidth = 90,
  speed = 260,
  amplitude = 2.2,
  pingEvery = 2.4,
  interactive = true,
  spacing = 26,
  baseOpacity = 0.28,
  color,
  pingArea = [0.22, 0.18, 0.78, 0.82],
  className,
  children,
}: SonarGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pingsRef = useRef<Ping[]>([]);
  const lastTimeRef = useRef<number>(0);
  const lastAmbientPingRef = useRef<number>(0);
  const prefersReduced = useReducedMotion();

  const addPing = useCallback((x: number, y: number, width: number, height: number, initialRadius = 0) => {
    const maxRadius = Math.hypot(
      Math.max(x, width - x),
      Math.max(y, height - y)
    ) + ringWidth;

    pingsRef.current.push({
      x,
      y,
      radius: initialRadius,
      maxRadius,
    });
  }, [ringWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Resolve color
    let rgb: [number, number, number] = [16, 16, 16];
    if (color) {
      rgb = parseColorToRgb(color);
    } else {
      const computed = window.getComputedStyle(container);
      const fg = computed.getPropertyValue("--foreground") || computed.color || "#101010";
      rgb = parseColorToRgb(fg.trim());
    }

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.round(rect.width);
      height = Math.round(rect.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateSize();

    // Spawn an initial ring mid-flight on first mount
    if (width > 0 && height > 0 && pingsRef.current.length === 0 && !prefersReduced) {
      const [minX, minY, maxX, maxY] = pingArea;
      const initialX = width * (minX + (maxX - minX) * 0.5);
      const initialY = height * (minY + (maxY - minY) * 0.45);
      addPing(initialX, initialY, width, height, Math.min(width, height) * 0.3);
    }

    const ro = new ResizeObserver(() => {
      updateSize();
    });
    ro.observe(container);

    const render = (time: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
        lastAmbientPingRef.current = time;
      }

      const delta = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      // Ambient ping scheduling
      if (!prefersReduced && pingEvery > 0 && time - lastAmbientPingRef.current >= pingEvery * 1000) {
        lastAmbientPingRef.current = time;
        const [minX, minY, maxX, maxY] = pingArea;
        const pingX = width * (minX + Math.random() * (maxX - minX));
        const pingY = height * (minY + Math.random() * (maxY - minY));
        addPing(pingX, pingY, width, height, 0);
      }

      ctx.clearRect(0, 0, width, height);

      // Advance pings
      if (!prefersReduced) {
        for (let i = pingsRef.current.length - 1; i >= 0; i--) {
          const ping = pingsRef.current[i];
          ping.radius += speed * delta;
          if (ping.radius > ping.maxRadius) {
            pingsRef.current.splice(i, 1);
          }
        }
      }

      const pings = pingsRef.current;
      const halfRing = ringWidth / 2;
      const [r, g, b] = rgb;
      const baseDotRadius = 1.25;

      // Render dot grid
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const startX = (width - (cols - 1) * spacing) / 2;
      const startY = (height - (rows - 1) * spacing) / 2;

      for (let c = 0; c < cols; c++) {
        const dotX = startX + c * spacing;
        if (dotX < -spacing || dotX > width + spacing) continue;

        for (let row = 0; row < rows; row++) {
          const dotY = startY + row * spacing;
          if (dotY < -spacing || dotY > height + spacing) continue;

          let maxIntensity = 0;

          if (!prefersReduced && pings.length > 0) {
            for (let i = 0; i < pings.length; i++) {
              const ping = pings[i];
              const dist = Math.hypot(dotX - ping.x, dotY - ping.y);
              const diff = Math.abs(dist - ping.radius);

              if (diff < halfRing) {
                // Smooth cosine bell falloff
                const wave = Math.cos((diff / halfRing) * (Math.PI / 2));
                // Distance fade as ping expands
                const fade = Math.max(0, 1 - ping.radius / ping.maxRadius);
                const intensity = wave * fade;
                if (intensity > maxIntensity) {
                  maxIntensity = intensity;
                }
              }
            }
          }

          const dotOpacity = Math.min(
            1,
            baseOpacity * (1 + (amplitude - 1) * maxIntensity)
          );
          const dotRadius = baseDotRadius * (1 + (amplitude - 1) * 0.45 * maxIntensity);

          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotOpacity})`;
          ctx.fill();
        }
      }

      if (!prefersReduced) {
        animId = requestAnimationFrame(render);
      }
    };

    if (prefersReduced) {
      // Single static render for reduced motion
      render(0);
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [
    color,
    spacing,
    baseOpacity,
    speed,
    ringWidth,
    amplitude,
    pingEvery,
    pingArea,
    addPing,
    prefersReduced,
  ]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || prefersReduced) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addPing(x, y, rect.width, rect.height, 0);
  };

  return (
    <div
      ref={containerRef}
      id={id}
      onPointerDown={handlePointerDown}
      className={cn("relative overflow-hidden select-none", className)}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />
      {children}
    </div>
  );
}

export default SonarGrid;
