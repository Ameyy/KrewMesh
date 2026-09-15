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
      iconColor: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-600/10",
      borderDefault: "border-cyan-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(6,182,212,0.3)]"
    },
    { 
      icon: Phone, 
      delay: 0.2, 
      iconColor: "text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]",
      gradient: "bg-gradient-to-br from-fuchsia-500/20 to-pink-600/10",
      borderDefault: "border-fuchsia-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(217,70,239,0.3)]"
    },
    { 
      icon: Tablet, 
      delay: 0.15, 
      iconColor: "text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]",
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-600/10",
      borderDefault: "border-amber-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(245,158,11,0.3)]"
    },
    { 
      icon: Laptop, 
      delay: 0.25, 
      iconColor: "text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.7)]",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-600/10",
      borderDefault: "border-emerald-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(16,185,129,0.3)]"
    },
    { 
      icon: Watch, 
      delay: 0.3, 
      iconColor: "text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.7)]",
      gradient: "bg-gradient-to-br from-rose-500/20 to-red-600/10",
      borderDefault: "border-rose-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(244,63,94,0.3)]"
    },
    { 
      icon: Tv, 
      delay: 0.2, 
      iconColor: "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.7)]",
      gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-600/10",
      borderDefault: "border-blue-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(59,130,246,0.3)]"
    },
    { 
      icon: Speaker, 
      delay: 0.4, 
      iconColor: "text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/10",
      borderDefault: "border-violet-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(139,92,246,0.3)]"
    },
    { 
      icon: Headphones, 
      delay: 0.35, 
      iconColor: "text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.7)]",
      gradient: "bg-gradient-to-br from-pink-500/20 to-rose-600/10",
      borderDefault: "border-pink-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(236,72,153,0.3)]"
    },
    { 
      icon: Cpu, 
      delay: 0.45, 
      iconColor: "text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.7)]",
      gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-600/10",
      borderDefault: "border-teal-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(20,184,166,0.3)]"
    },
    { 
      icon: HardDrive, 
      delay: 0.5, 
      iconColor: "text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]",
      gradient: "bg-gradient-to-br from-orange-500/20 to-amber-600/10",
      borderDefault: "border-orange-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(249,115,22,0.3)]"
    },
    { 
      icon: Mouse, 
      delay: 0.4, 
      iconColor: "text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.7)]",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-violet-600/10",
      borderDefault: "border-indigo-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(99,102,241,0.3)]"
    },
    { 
      icon: Keyboard, 
      delay: 0.55, 
      iconColor: "text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.7)]",
      gradient: "bg-gradient-to-br from-lime-500/20 to-emerald-600/10",
      borderDefault: "border-lime-500/40",
      shadowDefault: "shadow-[0_0_25px_rgba(132,204,22,0.3)]"
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
          "group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden",
          item.borderDefault,
          item.shadowDefault,
          "hover:border-white/15 hover:shadow-none hover:scale-95"
        )}
      >
        {/* Colors always visible gradient background */}
        <div className={cn("absolute inset-0 transition-opacity duration-300", item.gradient, "group-hover:opacity-0")} />
        
        {/* Black background that appears on hover */}
        <div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon: colored by default, dim on hover */}
        <Icon 
          className={cn(
            "relative z-10 w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300",
            item.iconColor,
            "group-hover:text-neutral-500 group-hover:drop-shadow-none group-hover:scale-90"
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
