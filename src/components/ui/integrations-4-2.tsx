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
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: Phone, 
      delay: 0.2, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
    },
    { 
      icon: Tablet, 
      delay: 0.15, 
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: Laptop, 
      delay: 0.25, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
    },
    { 
      icon: Watch, 
      delay: 0.3, 
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: Tv, 
      delay: 0.2, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
    },
    { 
      icon: Speaker, 
      delay: 0.4, 
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: Headphones, 
      delay: 0.35, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
    },
    { 
      icon: Cpu, 
      delay: 0.45, 
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: HardDrive, 
      delay: 0.5, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
    },
    { 
      icon: Mouse, 
      delay: 0.4, 
      iconColor: "text-[#D5360C]",
      gradient: "bg-[#D5360C]/10",
      borderDefault: "border-[#D5360C]/30",
      shadowDefault: "shadow-[0_0_20px_rgba(213,54,12,0.15)]"
    },
    { 
      icon: Keyboard, 
      delay: 0.55, 
      iconColor: "text-[#101010]",
      gradient: "bg-[#101010]/5",
      borderDefault: "border-[#101010]/20",
      shadowDefault: "shadow-[0_0_20px_rgba(16,16,16,0.1)]"
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
          "group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden bg-[#E6D5BD]",
          item.borderDefault,
          item.shadowDefault,
          "hover:border-[#D5360C] hover:scale-95"
        )}
      >
        {/* Colors always visible background */}
        <div className={cn("absolute inset-0 transition-opacity duration-300", item.gradient, "group-hover:opacity-0")} />
        
        {/* Hover background */}
        <div className="absolute inset-0 bg-[#D5360C]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon: colored by default, accent on hover */}
        <Icon 
          className={cn(
            "relative z-10 w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300",
            item.iconColor,
            "group-hover:text-[#D5360C] group-hover:scale-110"
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
    
    return {
      x: Math.round(Math.sin(index * 13) * 20),
      y: Math.round(Math.cos(index * 17) * 20),
      rotate: Math.round(Math.sin(index) * 15),
    }
  }

  return (
    <section className="bg-transparent py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold tracking-tight text-primary uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              EVERYTHING<br />
              <span className="text-secondary">CONNECTS.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Krew / Mesh brings strategy, design, technology and intelligence into one connected creative system.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-4">
               {['STRATEGY', 'BRAND', 'DESIGN', 'CODE', 'AI', 'GROWTH'].map((tag) => (
                  <div key={tag} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wider">
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
