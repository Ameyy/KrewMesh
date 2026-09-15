"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Footer4 from "@/components/ui/footer-section-4";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll('.marquee-item')) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex flex-col overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  { text: "Branding", color: "#FF1493" },
  { text: "Graphic Design", color: "#00E5FF" },
  { text: "UI/UX Design", color: "#FFEA00" },
  { text: "Web Development", color: "#00FF66" },
  { text: "3D Experiences", color: "#BD00FF" },
  { text: "AI Products", color: "#00B4D8" },
  { text: "SaaS Platforms", color: "#FF5400" },
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.85;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {/* 01: CTA Section */}
      <section id="contact" className="relative min-h-[60vh] flex items-center justify-center px-6 py-16 overflow-hidden bg-background scroll-mt-24">
        <div className="w-full max-w-7xl animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}        
            <div className="flex-1 w-full lg:w-auto relative z-10">
              <div className="space-y-8 max-w-xl text-foreground">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up [animation-delay:200ms] text-foreground">
                  HAVE AN IDEA?<br />
                  <span className="text-secondary">LET'S MAKE IT REAL.</span>
                </h2>
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
                  From concept to deployment, we build digital products that scale and stand out.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
                  <RainbowButton 
                    href="/contact" 
                    className="h-14 px-8 rounded-full text-base sm:text-lg font-bold"
                  >
                    <span>Start a project</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </RainbowButton>
                  <RainbowButton 
                    href="/#work" 
                    onClick={(e) => {
                      const el = document.getElementById('work');
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="h-14 px-8 rounded-full text-base sm:text-lg font-bold [animation-delay:-1s]"
                  >
                    <span>View our work</span>
                  </RainbowButton>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full lg:w-auto mt-12 lg:mt-0 relative z-10">
              <div ref={marqueeRef} className="relative h-[600px] lg:h-[700px] flex items-center justify-center animate-fade-in-up [animation-delay:400ms] text-foreground">
                <div className="relative w-full h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
                    <VerticalMarquee speed={30} className="h-full">
                      {marqueeItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight py-6 marquee-item uppercase text-center md:text-left transition-opacity select-none"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.text}
                        </div>
                      ))}
                    </VerticalMarquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Dedicated Walking Crowd Section (Separate, completely non-overlapping) */}
      <section className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] overflow-hidden bg-white pointer-events-none select-none">
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} className="w-full h-full opacity-100" />
      </section>

      {/* 03: Footer Section */}
      <Footer4 />
    </>
  );
}
