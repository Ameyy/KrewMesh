"use client";

import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

type LiquidTheme = "primary" | "secondary" | "accent";

export interface ServiceItem {
  title: string;
  description: string;
  theme: LiquidTheme;
}

export interface LiquidServicesProps {
  services?: ServiceItem[];
  reveal?: "hover" | "always";
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "BRANDING",
    description: "Identity systems, logos, visual language and brand experiences.",
    theme: "primary",
  },
  {
    title: "DESIGN",
    description: "Graphic design, communication design and creative direction.",
    theme: "secondary",
  },
  {
    title: "DIGITAL",
    description: "Websites, interfaces and immersive digital experiences.",
    theme: "accent",
  },
  {
    title: "DEVELOPMENT",
    description: "High-performance websites, web applications and software.",
    theme: "accent",
  },
  {
    title: "AI",
    description: "AI-powered products, automation and intelligent experiences.",
    theme: "primary",
  },
  {
    title: "SAAS",
    description: "Product strategy, UI/UX and scalable SaaS platforms.",
    theme: "secondary",
  }
];

const PALETTES: Record<LiquidTheme, string[]> = {
  // [color1, color2, color3, background]
  primary: ["#210892", "#3a1fae", "#150566", "#FDFDFD"], // Deep blue
  secondary: ["#FF674B", "#ff8873", "#cc4d35", "#FDFDFD"], // Coral
  accent: ["#B0CC58", "#c8e275", "#8da840", "#FDFDFD"], // Lime
};

function LiquidCanvas({
  theme,
  active,
}: {
  theme: LiquidTheme;
  active: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");

    if (!canvas || !host || !context) return;

    const colors = PALETTES[theme];
    const mouse = { x: 0.36, y: 0.44 };
    const smooth = { ...mouse };

    let frame = 0;
    let raf = 0;
    let visible = true;
    let width = 1;
    let height = 1;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.35);

      width = Math.max(1, Math.round(rect.width * ratio));
      height = Math.max(1, Math.round(rect.height * ratio));

      canvas.width = width;
      canvas.height = height;
    };

    const radialBlob = (
      x: number,
      y: number,
      radius: number,
      color: string,
      opacity = 1
    ) => {
      const gradient = context.createRadialGradient(
        x,
        y,
        radius * 0.05,
        x,
        y,
        radius
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(0.42, `${color}dc`);
      gradient.addColorStop(1, `${color}00`);

      context.globalAlpha = opacity;
      context.fillStyle = gradient;
      context.beginPath();
      context.ellipse(
        x,
        y,
        radius * 1.25,
        radius * 0.82,
        Math.sin(frame * 0.008) * 0.75,
        0,
        Math.PI * 2
      );
      context.fill();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = colors[3];
      context.fillRect(0, 0, width, height);

      smooth.x += (mouse.x - smooth.x) * 0.045;
      smooth.y += (mouse.y - smooth.y) * 0.045;

      const t = frame * 0.012;
      const radius = Math.max(width, height) * 0.55;

      context.save();
      context.globalCompositeOperation = "screen"; // Changed to screen for dark mode glow
      context.filter = `blur(${Math.max(24, width * 0.075)}px)`;

      radialBlob(
        smooth.x * width,
        smooth.y * height,
        radius,
        colors[0],
        0.95
      );

      radialBlob(
        width * (0.72 + Math.sin(t * 0.7) * 0.16),
        height * (0.3 + Math.cos(t * 0.5) * 0.18),
        radius * 0.85,
        colors[1],
        0.82
      );

      radialBlob(
        width * (0.28 + Math.cos(t * 0.55) * 0.18),
        height * (0.76 + Math.sin(t * 0.8) * 0.13),
        radius * 0.9,
        colors[2],
        0.72
      );

      context.restore();

      context.save();
      context.globalCompositeOperation = "screen";
      context.globalAlpha = 0.28;
      context.filter = `blur(${Math.max(18, width * 0.04)}px)`;

      for (let index = 0; index < 5; index++) {
        const y =
          height *
          (0.15 +
            index * 0.2 +
            Math.sin(t * 0.65 + index * 1.4) * 0.09);

        context.beginPath();
        context.lineWidth = Math.max(28, height * 0.11);
        context.strokeStyle = index % 2 ? colors[1] : colors[0];

        context.moveTo(-width * 0.15, y);
        context.bezierCurveTo(
          width * 0.2,
          y + Math.sin(t + index) * height * 0.28,
          width * 0.75,
          y - Math.cos(t * 0.7 + index) * height * 0.3,
          width * 1.15,
          y + Math.sin(t * 0.5 + index) * height * 0.15
        );

        context.stroke();
      }

      context.restore();

      const vignette = context.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );

      vignette.addColorStop(0, "rgba(255,255,255,0.02)");
      vignette.addColorStop(1, "rgba(255,255,255,0.6)"); // Stronger vignette for light mode

      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    };

    const animate = () => {
      if (visible && active) {
        frame += reducedMotion ? 0 : 1;
        draw();
      }

      raf = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();

      mouse.x = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width)
      );

      mouse.y = Math.min(
        1,
        Math.max(0, (event.clientY - rect.top) / rect.height)
      );
    };

    const handlePointerLeave = () => {
      mouse.x = 0.36;
      mouse.y = 0.44;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });

    resize();
    draw();

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);

    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerleave", handlePointerLeave);

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [active, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="liquid-grid-canvas"
      aria-hidden="true"
    />
  );
}

export default function Services({
  services = DEFAULT_SERVICES,
  reveal = "hover",
  className = "",
  style,
}: LiquidServicesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className={`section ${className}`} style={style}>
      <style>{`
        .liquid-grid-page {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--foreground);
        }

        .liquid-grid {
          width: 100%;
          container-type: inline-size;
        }

        .liquid-grid-header {
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1.1;
          margin-bottom: 5rem;
          text-transform: uppercase;
        }

        .liquid-grid-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          background: var(--surface);
          isolation: isolate;
        }

        .liquid-grid-cell {
          position: relative;
          min-width: 0;
          min-height: clamp(250px, 25vw, 350px);
          padding: clamp(28px, 4vw, 52px);
          border-left: 1px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
          outline: none;
          overflow: hidden;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          transition:
            color 500ms ease,
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Adjust borders for a 3-column, 2-row layout */
        .liquid-grid-cell:nth-child(3n+1) {
          border-left: 0;
        }
        .liquid-grid-cell:nth-child(n+4) {
          border-bottom: 0;
        }

        .liquid-grid-cell:focus-visible {
          box-shadow: inset 0 0 0 2px var(--accent);
        }

        .liquid-grid-cell.is-active {
          color: var(--foreground);
        }

        .liquid-grid-backdrop {
          position: absolute;
          inset: -2px;
          opacity: 0;
          transform: scale(1.035);
          transition:
            opacity 550ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .liquid-grid-cell.is-active .liquid-grid-backdrop {
          opacity: 1;
          transform: scale(1);
        }

        .liquid-grid-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }

        .liquid-grid-content {
          position: relative;
          z-index: 2;
          height: 100%;
          min-height: inherit;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 20px;
        }

        .liquid-grid-value {
          margin: 0;
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(32px, 3vw, 48px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 0.02em;
          white-space: nowrap;
          color: var(--foreground);
          transition: color 500ms ease;
        }
        
        .liquid-grid-cell.is-active .liquid-grid-value {
          color: var(--primary);
        }

        .liquid-grid-description {
          max-width: 35ch;
          margin: 0;
          font-size: clamp(14px, 1.2cqi, 17px);
          line-height: 1.55;
          letter-spacing: -0.015em;
          text-wrap: balance;
        }

        @media (max-width: 900px) {
          .liquid-grid-row {
            grid-template-columns: 1fr;
          }

          .liquid-grid-cell {
            min-height: 200px;
            border-left: 0 !important;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.1) !important;
          }

          .liquid-grid-cell:last-child {
            border-bottom: 0 !important;
          }

          .liquid-grid-content {
            gap: 24px;
          }

          .liquid-grid-description {
            font-size: 15px;
          }
        }

        @media (max-width: 520px) {
          .liquid-grid-page {
            padding: 12px 0;
          }

          .liquid-grid-row {
            border-radius: 14px;
          }

          .liquid-grid-cell {
            padding: 28px 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-grid-cell,
          .liquid-grid-backdrop {
            transition: none;
          }
        }
      `}</style>

      <div className="container liquid-grid-page">
        <div className={`liquid-grid ${className}`} style={style}>
          <h2 className="liquid-grid-header">
            IDEAS INTO<br />
            EXPERIENCES.
          </h2>
          <div className="liquid-grid-row">
            {services.map((service, index) => {
              const active = reveal === "always" || activeIndex === index;

              return (
                <article
                  key={`${service.title}-${index}`}
                  className={`liquid-grid-cell ${active ? "is-active" : ""}`}
                  tabIndex={0}
                  onPointerEnter={() => setActiveIndex(index)}
                  onPointerLeave={() =>
                    setActiveIndex((current) =>
                      current === index ? null : current
                    )
                  }
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() =>
                    setActiveIndex((current) =>
                      current === index ? null : current
                    )
                  }
                  onPointerDown={() => setActiveIndex(index)}
                >
                  <div className="liquid-grid-backdrop" aria-hidden="true">
                    <LiquidCanvas theme={service.theme} active={active} />
                  </div>

                  <div className="liquid-grid-content">
                    <h3 className="liquid-grid-value">{service.title}</h3>
                    <p className="liquid-grid-description">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
