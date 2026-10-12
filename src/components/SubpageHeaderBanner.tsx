"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SubpageHeaderBannerProps {
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  className?: string;
}

const DEFAULT_PAGE_META: Record<string, { label: string; parent?: { label: string; href: string } }> = {
  "/about": { label: "About Us // Story" },
  "/contact": { label: "Contact // Start a Project" },
  "/services": { label: "Capabilities & Practices" },
  "/services/branding": { label: "Brand Strategy & Identity", parent: { label: "Services", href: "/services" } },
  "/services/design": { label: "UI/UX Design & Prototyping", parent: { label: "Services", href: "/services" } },
  "/services/digital": { label: "3D & Interactive Experiences", parent: { label: "Services", href: "/services" } },
  "/services/development": { label: "Web & Next.js Engineering", parent: { label: "Services", href: "/services" } },
  "/services/ai": { label: "AI Solutions & Automation", parent: { label: "Services", href: "/services" } },
  "/services/saas": { label: "Full-Stack SaaS Platforms", parent: { label: "Services", href: "/services" } },
  "/blog": { label: "Studio Dispatches // Blog" },
  "/faq": { label: "Frequently Asked Questions" },
  "/careers": { label: "Careers // Join The Krew" },
  "/sitemap": { label: "Architecture // Sitemap" },
  "/privacy": { label: "Legal // Privacy Policy" },
  "/b2b-partnerships": { label: "B2B // Agency Partner & White-Label" },
  "/website-design-pune": { label: "Website Design // Pune", parent: { label: "Services", href: "/services" } },
  "/website-development-pune": { label: "Web Development // Pune", parent: { label: "Services", href: "/services" } },
  "/ui-ux-design-pune": { label: "UI/UX Design // Pune", parent: { label: "Services", href: "/services" } },
  "/website-design-indore": { label: "Website Design // Indore", parent: { label: "Services", href: "/services" } },
  "/website-development-indore": { label: "Web Development // Indore", parent: { label: "Services", href: "/services" } },
  "/framer-agency-indore": { label: "Framer Agency // Indore", parent: { label: "Services", href: "/services" } },
};

export default function SubpageHeaderBanner({
  breadcrumbs,
  badge,
  className = "",
}: SubpageHeaderBannerProps) {
  const pathname = usePathname();

  // If on homepage, do not render
  if (!pathname || pathname === "/") return null;

  // Derive dynamic label and parent if not hardcoded
  let pageMeta = DEFAULT_PAGE_META[pathname];
  if (!pageMeta) {
    if (pathname.startsWith("/blog/")) {
      const slug = pathname.replace("/blog/", "");
      pageMeta = {
        label: slug.replace(/-/g, " ").toUpperCase(),
        parent: { label: "Blog", href: "/blog" },
      };
    } else if (pathname.startsWith("/services/")) {
      const slug = pathname.replace("/services/", "");
      pageMeta = {
        label: slug.replace(/-/g, " ").toUpperCase(),
        parent: { label: "Services", href: "/services" },
      };
    } else if (pathname.startsWith("/demo/")) {
      const slug = pathname.replace("/demo/", "");
      pageMeta = {
        label: slug.replace(/-/g, " ").toUpperCase(),
        parent: { label: "Demos", href: "/#work" },
      };
    } else {
      pageMeta = {
        label: pathname
          .replace(/^\//, "")
          .split("/")
          .pop()
          ?.replace(/-/g, " ")
          .toUpperCase() || "PAGE",
      };
    }
  }

  const activeBadge = badge || pageMeta.label;
  const parent = pageMeta.parent;

  return (
    <div
      className={`relative w-full border-b border-[#101010]/15 bg-[#E6D5BD]/30 overflow-hidden pt-24 sm:pt-28 pb-5 sm:pb-6 ${className}`}
      aria-label="Page Breadcrumb Banner"
    >
      {/* Dynamic Novatrix / Water Wave Gradient Mesh Video Background (Full Screen End-to-End) */}
      <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden">
        <GradientMesh
          colors={["#E6D5BD", "#D5360C", "#101010"]}
          distortion={4.5}
          swirl={0.4}
          speed={0.8}
          scale={1.1}
          waveAmp={0.08}
          grain={0.05}
        />
      </div>

      {/* Subtle overlay to preserve ultra-high text contrast */}
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(230, 213, 189, 0.3) 0%, rgba(230, 213, 189, 0.85) 85%, #E6D5BD 100%)",
        }}
      />

      {/* Content Layer: Left Breadcrumbs */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
        {/* Left Side: Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#101010]/80 hover:text-[#D5360C] transition-colors font-semibold"
          >
            <ArrowLeft size={13} className="stroke-[2.5]" />
            <span>Home</span>
          </Link>

          <span className="text-[#101010]/30 font-mono text-xs">/</span>

          {breadcrumbs ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs font-mono uppercase tracking-widest text-[#101010]/80 hover:text-[#D5360C] transition-colors font-semibold"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-widest text-[#101010]/80 font-semibold">
                    {crumb.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-[#101010]/30 font-mono text-xs">/</span>
                )}
              </React.Fragment>
            ))
          ) : parent ? (
            <>
              <Link
                href={parent.href}
                className="text-xs font-mono uppercase tracking-widest text-[#101010]/80 hover:text-[#D5360C] transition-colors font-semibold"
              >
                {parent.label}
              </Link>
              <span className="text-[#101010]/30 font-mono text-xs">/</span>
            </>
          ) : null}

          {/* Active Page Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#101010]/[0.08] border border-[#101010]/15 text-[#101010] font-semibold backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
            <span>{activeBadge}</span>
          </span>
        </nav>
      </div>
    </div>
  );
}
