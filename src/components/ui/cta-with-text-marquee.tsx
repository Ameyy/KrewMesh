"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";

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
  "Branding",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "3D Experiences",
  "AI Products",
  "SaaS Platforms"
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
                  <Link href="/contact" className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,103,75,0.3)] text-center">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start a project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    href="/#work" 
                    onClick={(e) => {
                      const el = document.getElementById('work');
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group relative px-8 py-4 bg-transparent text-foreground rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-foreground/10 border border-foreground/40 text-center"
                  >
                    View our work
                  </Link>
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
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight py-6 marquee-item text-foreground uppercase text-center md:text-left"
                      >
                        {item}
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
      <section className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] overflow-hidden bg-background pointer-events-none select-none">
        <CrowdCanvas src="/images/peeps/all-peeps-inverted.png" rows={15} cols={7} className="w-full h-full opacity-85" />
      </section>

      {/* 03: Last Section - Logo, numbers, location, and social links */}
      <footer className="w-full bg-background border-t border-foreground/20 py-10 relative z-10">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-foreground/80 text-sm font-medium">
          <div className="mb-4 md:mb-0">
            <span className="inline-flex items-center gap-2">
              India <img src="https://flagcdn.com/w20/in.png" srcSet="https://flagcdn.com/w40/in.png 2x" width="20" alt="India" className="inline-block" />
            </span>
          </div>
          <div className="w-48 h-16 md:w-64 md:h-20 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/logo-footer.png" alt="KM Shuriken Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <a href="tel:+919209839142" className="hover:text-primary transition-colors block">+91 920 983 9142</a>
            <div className="hidden md:flex gap-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BEHANCE</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
