"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  badge?: string;
}

interface FooterGroup {
  subheading?: string;
  links: FooterLinkItem[];
}

interface FooterColumn {
  index: string;
  category: string;
  groups: FooterGroup[];
}

export default function Footer4() {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          window.history.pushState(null, "", `/#${targetId}`);
        }
      } else {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("km_scroll_target", targetId);
        }
      }
      return;
    }

    if (href === "#cookie-settings") {
      e.preventDefault();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("open-cookie-settings"));
      }
      return;
    }

    // For external links or protocols, let standard navigation take over
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return;
    }

    // For any page routes on the current site, ensure we scroll to top
    if (typeof window !== "undefined" && href !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError("");
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
  };

  // Structured into 6 distinct architectural columns matching the reference layout
  const columns: FooterColumn[] = [
    {
      index: "01",
      category: "What we do",
      groups: [
        {
          subheading: "Design & Identity",
          links: [
            { label: "Brand Strategy & Identity", href: "/services/branding" },
            { label: "UI/UX & Prototyping", href: "/services/design" },
            { label: "3D & Interactive Experiences", href: "/services/digital" },
          ],
        },
        {
          subheading: "Engineering & AI",
          links: [
            { label: "Next.js Web Engineering", href: "/services/development" },
            { label: "AI Solutions & Automation", href: "/services/ai" },
            { label: "Full-Stack SaaS Platforms", href: "/services/saas" },
          ],
        },
        {
          subheading: "Commercial",
          links: [
            { label: "Website Packages", href: "/#packages" },
            { label: "Design Systems", href: "/services" },
          ],
        },
      ],
    },
    {
      index: "02",
      category: "Who we serve",
      groups: [
        {
          subheading: "Industry Demos",
          links: [
            { label: "E-Commerce Storefront", href: "https://ecomm.krewmesh.agency/", external: true },
            { label: "Photography & Studio", href: "https://wedtale.krewmesh.agency/", external: true },
            { label: "3D Print Studio Portal", href: "https://3dprint.krewmesh.agency/", external: true },
            { label: "Interior Design Showcase", href: "https://inter.krewmesh.agency/", external: true },
            { label: "Clinic & Healthcare", href: "https://clinic.krewmesh.agency", external: true },
            { label: "Cafe & Roastery", href: "https://cafe.krewmesh.agency", external: true },
            { label: "Fitness & Gym Club", href: "https://gym.krewmesh.agency", external: true },
          ],
        },
        {
          subheading: "Interactive Labs",
          links: [
            { label: "ASCII Comet Wake", href: "/demo/background-ascii-wake" },
            { label: "Enterprise Portal", href: "/demo/business" },
          ],
        },
      ],
    },
    {
      index: "03",
      category: "About us",
      groups: [
        {
          subheading: "Studio",
          links: [
            { label: "About Studio", href: "/about" },
            { label: "Manifesto & Story", href: "/about" },
            { label: "Studio Dispatches", href: "/blog" },
            { label: "Careers & Open Roles", href: "/careers" },
            { label: "Frequently Asked Questions", href: "/faq" },
            { label: "Full Sitemap", href: "/sitemap" },
          ],
        },
      ],
    },
    {
      index: "04",
      category: "Security & Legal",
      groups: [
        {
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Preferences", href: "#cookie-settings" },
          ],
        },
      ],
    },
    {
      index: "05",
      category: "Get started",
      groups: [
        {
          subheading: "Direct Engagement",
          links: [
            { label: "Start a Project", href: "/contact" },
            { label: "Book a Strategy Call", href: "/contact" },
            {
              label: "Agency & Studio Overflow",
              href: "/b2b-partnerships",
              highlight: true,
              badge: "B2B",
            },
            { label: "+91 920 983 9142", href: "tel:+919209839142" },
          ],
        },
        {
          subheading: "Channels",
          links: [
            { label: "Instagram (@krewmesh)", href: "https://www.instagram.com/krewmesh/", external: true },
            { label: "LinkedIn", href: "https://linkedin.com/company/krew-mesh-agency", external: true },
            { label: "X (@KrewMesh)", href: "https://x.com/KrewMesh", external: true },
            { label: "GitHub", href: "https://github.com/", external: true },
          ],
        },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#101010] text-[#E6D5BD] border-t border-[#E6D5BD]/15 overflow-hidden pt-16 sm:pt-24 pb-12 selection:bg-[#D5360C]/30">
      {/* Subtle top ambient burnt orange glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[800px] h-[350px] bg-[#D5360C]/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Header: Talk with sales / studio style CTA matching Lightspark reference */}
        <div className="mb-14 sm:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E6D5BD]/15">
          <div>
            <span className="block text-xs font-mono uppercase tracking-widest text-[#D5360C] mb-3 font-semibold">
              Ready to Shape the Future?
            </span>
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className="group inline-flex items-center gap-3 sm:gap-4 text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#E6D5BD] hover:text-[#D5360C] transition-colors"
            >
              <span>Talk with studio</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-3 text-[#D5360C]">
                →
              </span>
            </Link>
          </div>

          {/* Minimalist Newsletter Subscription Form */}
          <div className="w-full lg:w-auto max-w-md">
            <span className="block text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/50 mb-2 font-medium">
              Studio Dispatches & Insights
            </span>
            {subscribed ? (
              <div className="px-4 py-2.5 rounded-full bg-[#D5360C]/15 border border-[#D5360C]/40 text-[#E6D5BD] text-xs font-mono">
                ✓ Subscribed to Krew / Mesh updates.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterError) setNewsletterError("");
                  }}
                  placeholder="Enter your email"
                  className="flex-1 min-w-[200px] rounded-full px-4 py-2.5 text-xs bg-[#151515] text-[#E6D5BD] placeholder:text-[#E6D5BD]/40 border border-[#E6D5BD]/20 focus:border-[#D5360C] focus:outline-none transition-colors font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#D5360C] hover:bg-[#b82d09] text-[#E6D5BD] text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
            {newsletterError && (
              <p className="text-[11px] font-mono text-[#D5360C] mt-1">{newsletterError}</p>
            )}
          </div>
        </div>

        {/* 5-Column Grid with Vertical Border Dividers matching reference webp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-[#E6D5BD]/15">
          {columns.map((col, idx) => (
            <div
              key={col.index}
              className={`flex flex-col justify-between py-8 lg:py-6 px-0 sm:px-4 lg:px-6 border-b sm:border-b-0 border-[#E6D5BD]/15 ${
                idx !== columns.length - 1 ? "lg:border-r border-[#E6D5BD]/15" : ""
              } ${idx === 0 ? "lg:pl-0" : ""} ${idx === columns.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div>
                {/* Column Top Subdued Category Label */}
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#E6D5BD]/40 mb-6 font-semibold">
                  {col.category}
                </span>

                {/* Column Link Groups (Bulletless clean lists) */}
                <div className="space-y-6">
                  {col.groups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      {group.subheading && (
                        <span className="block text-[11px] font-mono text-[#E6D5BD]/35 uppercase tracking-wider">
                          {group.subheading}
                        </span>
                      )}
                      <ul className="list-none p-0 m-0 space-y-2">
                        {group.links.map((link, lIdx) => (
                          <li key={lIdx} className="list-none p-0 m-0 leading-snug">
                            {link.external ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/item inline-flex items-center gap-1 text-[13px] text-[#E6D5BD]/75 hover:text-[#D5360C] transition-colors font-normal"
                              >
                                <span>{link.label}</span>
                                <ArrowUpRight
                                  size={11}
                                  className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#D5360C]"
                                />
                              </a>
                            ) : link.highlight ? (
                              <Link
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="group/b2b inline-flex items-center gap-2 px-2.5 py-1 -ml-2 rounded-lg bg-[#D5360C]/15 hover:bg-[#D5360C] text-[#D5360C] hover:text-[#E6D5BD] border border-[#D5360C]/40 hover:border-[#D5360C] transition-all duration-300 text-[13px] font-medium shadow-[0_0_15px_rgba(213,54,12,0.15)] hover:shadow-[0_0_20px_rgba(213,54,12,0.35)]"
                              >
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5360C] opacity-75 group-hover/b2b:bg-[#E6D5BD]" />
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5360C] group-hover/b2b:bg-[#E6D5BD]" />
                                </span>
                                <span className="tracking-tight">{link.label}</span>
                                {link.badge && (
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#D5360C] text-[#E6D5BD] group-hover/b2b:bg-[#101010] group-hover/b2b:text-[#E6D5BD]">
                                    {link.badge}
                                  </span>
                                )}
                              </Link>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="inline-block text-[13px] text-[#E6D5BD]/75 hover:text-[#D5360C] transition-colors font-normal"
                              >
                                {link.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column Bottom Index Number */}
              <div className="mt-10 pt-4 text-[11px] font-mono text-[#E6D5BD]/25">
                {col.index}
              </div>
            </div>
          ))}
        </div>

        {/* Gigantic Stylized Watermark Wordmark across bottom width matching Lightspark reference */}
        <div className="w-full overflow-hidden select-none pointer-events-none text-center my-8 sm:my-14">
          <span className="text-[11.5vw] font-black tracking-tighter text-[#E6D5BD]/[0.045] uppercase leading-none block font-display whitespace-nowrap">
            krew/mesh
          </span>
        </div>

        {/* Bottom Copyright and Meta Bar */}
        <div className="pt-6 border-t border-[#E6D5BD]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E6D5BD]/45">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Krew / Mesh Studio.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>(18.5204° N, 73.8567° E) // Pune • Indore • Global</span>
            <span className="text-[#D5360C] font-semibold">100% IP Code Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer4 };
