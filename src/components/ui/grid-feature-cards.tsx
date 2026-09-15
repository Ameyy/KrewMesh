"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "@/components/ui/glowing-stars";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  slug?: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const cardContent = (
    <GlowingStarsBackgroundCard className={cn("h-full group/card transition-all duration-300 hover:border-white/20", className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <feature.icon className="text-white/80 size-6 group-hover/card:text-white transition-colors" strokeWidth={1.5} aria-hidden />
        {feature.slug && (
          <div className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover/card:text-white transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
          </div>
        )}
      </div>
      <GlowingStarsTitle>{feature.title}</GlowingStarsTitle>
      <div className="mt-4">
        <GlowingStarsDescription>
          {feature.description}
        </GlowingStarsDescription>
      </div>
    </GlowingStarsBackgroundCard>
  );

  if (feature.slug) {
    return (
      <Link href={`/services/${feature.slug}`} className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-xl">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
