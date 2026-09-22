"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "motion/react";
import { SocialCloud } from "@/components/ui/footer-section-4-utils/social-cloud";

const FOOTER_TITLE = "Shaping Ideas Into Experiences";

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

    // For external / new tab links, allow standard browser navigation
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return;
    }

    // For any page routes on the current site, ensure we start at the top
    if (typeof window !== "undefined" && href !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const [subscribed, setSubscribed] = React.useState(false);
  const [newsletterEmail, setNewsletterEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  const footerLinks = [
    {
      title: "Sitemap",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Work", href: "/#work" },
        { label: "Packages & Pricing", href: "/#packages" },
        { label: "About Studio", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Full Sitemap Directory", href: "/sitemap" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Branding", href: "/services/branding" },
        { label: "Design", href: "/services/design" },
        { label: "Digital", href: "/services/digital" },
        { label: "Development", href: "/services/development" },
        { label: "AI Products", href: "/services/ai" },
        { label: "SaaS Platforms", href: "/services/saas" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Start a Project", href: "/contact" },
        { label: "Cookie Settings", href: "#cookie-settings" },
        { label: "hello@krewmesh.agency", href: "mailto:hello@krewmesh.agency" },
        { label: "+91 920 983 9142", href: "tel:+919209839142" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram (@krewmesh)", href: "https://www.instagram.com/krewmesh/" },
        { label: "LinkedIn", href: "https://www.linkedin.com" },
        { label: "Behance", href: "https://www.behance.net" },
        { label: "X (Twitter)", href: "https://x.com" },
        { label: "GitHub", href: "https://github.com" },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 px-4 [--color-primary:#003AF9]">
      <motion.div
        className="container mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {/* Blue Card (Left in image, described as Right by user potentially) */}
          <motion.div
            className="relative w-full md:w-1/3 min-h-[300px] md:min-h-[600px] overflow-hidden rounded-2xl bg-[#003AF9] bg-[var(--color-primary)] flex flex-col justify-between p-8 md:p-10"
            variants={itemVariants}
          >
            {/* SVG Noise Overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-90 pointer-events-none mix-blend-multiply z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter2)" />
            </svg>

            {/* Top Logo */}
            <div className="relative z-10">
              <Link
                href="/"
                onClick={(e) => handleLinkClick(e, "/")}
                className="inline-block group"
                aria-label="Krew / Mesh Home"
                title="Krew / Mesh Home"
              >
                <img
                  src="/krewmesh-logo-white.png"
                  alt="Krew / Mesh Logo"
                  className="h-9 md:h-11 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-lg font-bold text-white capitalize">
                {FOOTER_TITLE}
              </h3>
              <SocialCloud className="text-white/80 gap-4" />
              <p className="text-xs text-white/60">
                &copy; {new Date().getFullYear()} Krew / Mesh, All rights reserved
              </p>
            </div>
          </motion.div>

          {/* White Card (Right in image) */}
          <motion.div
            className="w-full md:w-2/3 rounded-2xl bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 p-8 md:p-12 flex flex-col justify-between min-h-[500px] md:min-h-[600px]"
            variants={itemVariants}
          >
            {/* Top Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {footerLinks.map((section, idx) => (
                <div key={idx} className="flex flex-col space-y-6">
                  <h4 className="text-lg font-bold text-black dark:text-white">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col space-y-3 text-neutral-600 dark:text-neutral-400 font-medium">
                    {section.links.map((link, linkIdx) => {
                      if (link.href === "#cookie-settings") {
                        return (
                          <li key={linkIdx}>
                            <button
                              type="button"
                              onClick={() => {
                                if (typeof window !== "undefined") {
                                  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
                                }
                              }}
                              style={{ border: 'none', outline: 'none', background: 'transparent', padding: 0 }}
                              className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left text-neutral-600 dark:text-neutral-400 font-medium"
                            >
                              <span>{link.label}</span>
                            </button>
                          </li>
                        );
                      }

                      const isNewTab = link.href.startsWith("http");
                      return (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            target={isNewTab ? "_blank" : undefined}
                            rel={isNewTab ? "noopener noreferrer" : undefined}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            scroll={link.href.startsWith("/#") ? false : true}
                            className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Newsletter */}
            <div className="space-y-4 mt-12 md:mt-0">
              <h4 className="text-lg font-bold text-black dark:text-white">
                Newsletter
              </h4>
              {subscribed ? (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                  ✓ Thank you for subscribing to Krew / Mesh insights.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="flex-1 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white bg-transparent text-black dark:text-white border border-neutral-300 dark:border-neutral-700"
                  />
                  <button type="submit" className="rounded-md bg-black text-white dark:bg-white dark:text-black px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export { Footer4 };
