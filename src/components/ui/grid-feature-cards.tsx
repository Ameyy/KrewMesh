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
  href?: string;
  isExternal?: boolean;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const targetHref = feature.href || (feature.slug ? `/services/${feature.slug}` : undefined);

  const cardContent = (
    <GlowingStarsBackgroundCard className={cn("h-full group/card transition-all duration-300 hover:border-[#D5360C]/50 shadow-md", className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <feature.icon className="text-[#D5360C] size-6 group-hover/card:scale-110 transition-transform" strokeWidth={1.8} aria-hidden />
        {targetHref && (
          <div className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#E6D5BD] group-hover/card:text-[#D5360C] transition-colors font-semibold">
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

  if (targetHref) {
    return (
      <Link
        href={targetHref}
        target={feature.isExternal ? "_blank" : undefined}
        rel={feature.isExternal ? "noopener noreferrer" : undefined}
        className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-xl"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
