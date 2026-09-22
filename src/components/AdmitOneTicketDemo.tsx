"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AdmitOneTicket, {
  TICKET_STYLE,
  TICKET_TEXTURE,
  TICKET_GRADIENT,
  TICKET_LAYOUT
} from "@/components/ui/admit-one-ticket";

interface DemoItem {
  id: number;
  label: string;
  name: string;
  presenter: string;
  event: string;
  venue: string;
  dates: string;
  stubText: string;
  watermark: string;
  url: string;
  isLive: boolean;
  texture: typeof TICKET_TEXTURE;
  gradient: typeof TICKET_GRADIENT;
  layout: typeof TICKET_LAYOUT;
}

const DEMOS: DemoItem[] = [
  {
    id: 1,
    label: "Ecomm Website",
    name: "DEMO WEBSITE IS LIVE NOW",
    presenter: "KREW / MESH • ECOMM WEBSITE",
    event: "WATCH ANYTIME",
    venue: "LIVE ONLINE STORE",
    dates: "WATCH ANYTIME",
    stubText: "COMING SOON",
    watermark: "ECOMM",
    url: "#",
    isLive: false,
    texture: {
      ...TICKET_TEXTURE,
      shape: "warp",
      colorBack: "#ef671c",
      colorFront: "#ffc691",
      colorHighlight: "#fe9046",
      speed: 0.4
    },
    gradient: {
      ...TICKET_GRADIENT,
      colorLight: "#ffc691",
      colorMid: "#fe9046",
      colorDark: "#ef671c"
    },
    layout: {
      ...TICKET_LAYOUT,
      inkColor: "#5a3520",
      watermarkColor: "#ffdcbe"
    }
  },
  {
    id: 2,
    label: "Clinic Website",
    name: "DEMO WEBSITE IS LIVE NOW",
    presenter: "KREW / MESH • CLINIC WEBSITE",
    event: "WATCH ANYTIME",
    venue: "PATIENT APPOINTMENTS",
    dates: "WATCH ANYTIME",
    stubText: "COMING SOON",
    watermark: "CLINIC",
    url: "/demo/clinic",
    isLive: false,
    texture: {
      ...TICKET_TEXTURE,
      shape: "wave",
      colorBack: "#3bbad4",
      colorFront: "#a8ecfa",
      colorHighlight: "#e0faff",
      speed: 0.45
    },
    gradient: {
      ...TICKET_GRADIENT,
      colorLight: "#e0faff",
      colorMid: "#a8ecfa",
      colorDark: "#3bbad4"
    },
    layout: {
      ...TICKET_LAYOUT,
      inkColor: "#06313d",
      watermarkColor: "#cbf7ff"
    }
  },
  {
    id: 3,
    label: "Cafe Landing Page",
    name: "DEMO WEBSITE IS LIVE NOW",
    presenter: "KREW / MESH • CAFE LANDING",
    event: "WATCH ANYTIME",
    venue: "ARTISAN COFFEE & MENU",
    dates: "WATCH ANYTIME",
    stubText: "LIVE NOW",
    watermark: "CAFE",
    url: "https://cafe.krewmesh.agency",
    isLive: true,
    texture: {
      ...TICKET_TEXTURE,
      shape: "dots",
      colorBack: "#36ad64",
      colorFront: "#9ef2bd",
      colorHighlight: "#d5fbe3",
      speed: 0.35
    },
    gradient: {
      ...TICKET_GRADIENT,
      colorLight: "#d5fbe3",
      colorMid: "#9ef2bd",
      colorDark: "#36ad64"
    },
    layout: {
      ...TICKET_LAYOUT,
      inkColor: "#0b3319",
      watermarkColor: "#e6fdf0"
    }
  },
  {
    id: 4,
    label: "Interior Design Website",
    name: "DEMO WEBSITE IS LIVE NOW",
    presenter: "KREW / MESH • INTERIOR DESIGN",
    event: "WATCH ANYTIME",
    venue: "SPATIAL ARCHITECTURE",
    dates: "WATCH ANYTIME",
    stubText: "COMING SOON",
    watermark: "DESIGN",
    url: "/demo/interior-design",
    isLive: false,
    texture: {
      ...TICKET_TEXTURE,
      shape: "swirl",
      colorBack: "#db7a21",
      colorFront: "#ffca7a",
      colorHighlight: "#ffebb8",
      speed: 0.5
    },
    gradient: {
      ...TICKET_GRADIENT,
      colorLight: "#ffebb8",
      colorMid: "#ffca7a",
      colorDark: "#db7a21"
    },
    layout: {
      ...TICKET_LAYOUT,
      inkColor: "#3d1c05",
      watermarkColor: "#fff4d4"
    }
  }
];

export default function AdmitOneTicketDemo() {
  const [ticketWidth, setTicketWidth] = useState(741);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      // Keep 741px maximum on desktop, scale gracefully on mobile/tablet
      const padding = window.innerWidth < 640 ? 32 : 48;
      const available = window.innerWidth - padding;
      setTicketWidth(Math.min(741, Math.max(300, available)));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentDemo = DEMOS[activeDemoIndex] || DEMOS[0];

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#281d14] py-12 sm:py-16 px-4 sm:px-6 md:px-8 overflow-hidden border-y border-white/5">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(circle at 50% 45%, rgba(239, 103, 28, 0.18) 0%, rgba(40, 29, 20, 0.6) 60%, #281d14 100%)"
        }}
      />

      {/* Header section: Watch Demo Live on this Ticket */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-8 max-w-5xl px-4">
        {/* Animated Live Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ef671c]/40 bg-[#ef671c]/15 text-[#ffc691] text-xs font-semibold uppercase tracking-widest mb-4 shadow-lg backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc691] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef671c]"></span>
          </span>
          Watch Demo Live On This Ticket
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ffc691] uppercase display-font leading-tight">
          Watch Demo Live On This Ticket
        </h2>

        {/* Demo selector buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {DEMOS.map((demo, index) => {
            const isActive = index === activeDemoIndex;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemoIndex(index)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#ffc691] text-[#281d14] shadow-lg shadow-[#ffc691]/20 scale-105"
                    : "bg-black/35 text-[#ffc691]/75 border border-[#ffc691]/20 hover:border-[#ffc691]/50 hover:text-[#ffc691] hover:bg-black/50"
                }`}
                aria-label={`Switch to ${demo.label}`}
              >
                {demo.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ticket Container wrapped with Link for seamless navigation */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <Link
          href={currentDemo.url}
          target={currentDemo.url.startsWith("http") ? "_blank" : undefined}
          rel={currentDemo.url.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (currentDemo.url === "#") {
              e.preventDefault();
            }
          }}
          className="group block relative focus:outline-none transition-transform duration-300 hover:scale-[1.015] cursor-pointer"
          aria-label={`Open ${currentDemo.label} - ${currentDemo.isLive ? "Live Demo" : "Coming Soon"}`}
          title={`Click to open ${currentDemo.label}`}
        >
          <AdmitOneTicket
            key={currentDemo.id}
            name={currentDemo.name}
            presenter={currentDemo.presenter}
            event={currentDemo.event}
            venue={currentDemo.venue}
            dates={currentDemo.dates}
            stubText={currentDemo.stubText}
            watermark={currentDemo.watermark}
            width={ticketWidth}
            texture={currentDemo.texture}
            gradient={currentDemo.gradient}
            layout={currentDemo.layout}
          />
        </Link>

        {/* Visual action button below the ticket */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            href={currentDemo.url}
            target={currentDemo.url.startsWith("http") ? "_blank" : undefined}
            rel={currentDemo.url.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (currentDemo.url === "#") {
                e.preventDefault();
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#ffc691]/40 bg-black/40 hover:bg-[#ffc691] text-[#ffc691] hover:text-[#281d14] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#ffc691]/25 hover:scale-105"
          >
            <span>
              {currentDemo.url === "#"
                ? `${currentDemo.label} (Coming Soon)`
                : currentDemo.isLive
                ? `Launch Live ${currentDemo.label} Demo`
                : `Open ${currentDemo.label} (Coming Soon)`}
            </span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
