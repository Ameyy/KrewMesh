"use client";

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Monitor, Phone, Tablet, Laptop, Watch, Tv, Speaker, Headphones, Cpu, HardDrive, Mouse, Keyboard } from "lucide-react"

export function IntegrationsGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const icons = [
    { 
      icon: Monitor, 
      delay: 0.1, 
      color: "group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.85)]",
      bgHover: "hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
    },
    { 
      icon: Phone, 
      delay: 0.2, 
      color: "group-hover:text-fuchsia-400 group-hover:drop-shadow-[0_0_12px_rgba(232,121,249,0.85)]",
      bgHover: "hover:border-fuchsia-500/50 hover:bg-gradient-to-br hover:from-fuchsia-500/20 hover:to-pink-600/10 hover:shadow-[0_0_25px_rgba(217,70,239,0.35)]"
    },
    { 
      icon: Tablet, 
      delay: 0.15, 
      color: "group-hover:text-amber-400 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.85)]",
      bgHover: "hover:border-amber-500/50 hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-orange-600/10 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
    },
    { 
      icon: Laptop, 
      delay: 0.25, 
      color: "group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.85)]",
      bgHover: "hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-600/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
    },
    { 
      icon: Watch, 
      delay: 0.3, 
      color: "group-hover:text-rose-400 group-hover:drop-shadow-[0_0_12px_rgba(251,113,133,0.85)]",
      bgHover: "hover:border-rose-500/50 hover:bg-gradient-to-br hover:from-rose-500/20 hover:to-red-600/10 hover:shadow-[0_0_25px_rgba(244,63,94,0.35)]"
    },
    { 
      icon: Tv, 
      delay: 0.2, 
      color: "group-hover:text-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.85)]",
      bgHover: "hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
    },
    { 
      icon: Speaker, 
      delay: 0.4, 
      color: "group-hover:text-violet-400 group-hover:drop-shadow-[0_0_12px_rgba(167,139,250,0.85)]",
      bgHover: "hover:border-violet-500/50 hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-purple-600/10 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
    },
    { 
      icon: Headphones, 
      delay: 0.35, 
      color: "group-hover:text-pink-400 group-hover:drop-shadow-[0_0_12px_rgba(244,114,182,0.85)]",
      bgHover: "hover:border-pink-500/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-rose-600/10 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]"
    },
    { 
      icon: Cpu, 
      delay: 0.45, 
      color: "group-hover:text-teal-400 group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.85)]",
      bgHover: "hover:border-teal-500/50 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-600/10 hover:shadow-[0_0_25px_rgba(20,184,166,0.35)]"
    },
    { 
      icon: HardDrive, 
      delay: 0.5, 
      color: "group-hover:text-orange-400 group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.85)]",
      bgHover: "hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-amber-600/10 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]"
    },
    { 
      icon: Mouse, 
      delay: 0.4, 
      color: "group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.85)]",
      bgHover: "hover:border-indigo-500/50 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-violet-600/10 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
    },
    { 
      icon: Keyboard, 
      delay: 0.55, 
      color: "group-hover:text-lime-400 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.85)]",
      bgHover: "hover:border-lime-500/50 hover:bg-gradient-to-br hover:from-lime-500/20 hover:to-emerald-600/10 hover:shadow-[0_0_25px_rgba(132,204,22,0.35)]"
    },
  ]

  const renderItem = (i: number) => {
    const item = icons[i]
    if (!item) return null
    const Icon = item.icon
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={controls}
        variants={{ visible: { opacity: 1, scale: 1, y: 0, transition: { delay: item.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
        className={cn(
          "group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl border border-white/5 bg-[#0a0a0a] cursor-pointer transition-all duration-300",
          "hover:scale-105",
          item.bgHover
        )}
      >
        <Icon 
          className={cn(
            "w-6 h-6 sm:w-8 sm:h-8 opacity-60 text-white transition-all duration-300",
            "group-hover:opacity-100 group-hover:scale-110 group-hover:fill-current/30",
            item.color
          )} 
          strokeWidth={1.5} 
        />
      </motion.div>
    )
  }

  // Generate random positions that somewhat resemble a scatter
  const getGridItemStyle = (index: number) => {
    // Basic grid logic with some offset
    const row = Math.floor(index / 4)
    const col = index % 4
    
    // Add some random scatter effect
    const xOffset = Math.round(Math.sin(index * 13) * 20)
    const yOffset = Math.round(Math.cos(index * 17) * 20)
    
    return {
      x: xOffset,
      y: yOffset,
      rotate: Math.round(Math.sin(index) * 15), // slight rotation
    }
  }

  return (
    <section className="bg-background py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              EVERYTHING<br />CONNECTS.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Krew / Mesh brings strategy, design, technology and intelligence into one connected creative system.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-4">
               {['STRATEGY', 'BRAND', 'DESIGN', 'CODE', 'AI', 'GROWTH'].map((tag) => (
                  <div key={tag} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white tracking-wider">
                    {tag}
                  </div>
               ))}
            </div>
          </div>

          {/* Grid Content */}
          <div 
            ref={containerRef}
            className="relative h-full w-full flex items-center justify-center lg:justify-end"
          >
            <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] py-12">
              
              {/* Column 1 (2 items) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 mt-16 sm:mt-24">
                {[0, 1].map(renderItem)}
              </div>

              {/* Column 2 (3 items) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {[2, 3, 4].map(renderItem)}
              </div>

              {/* Column 3 (2 items) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 mt-16 sm:mt-24">
                {[5, 6].map(renderItem)}
              </div>

              {/* Column 4 (3 items) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {[7, 8, 9].map(renderItem)}
              </div>

              {/* Column 5 (2 items) */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 mt-16 sm:mt-24">
                {[10, 11].map(renderItem)}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
