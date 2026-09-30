'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Layers, Sparkles, Users, Mail, Menu, X, ArrowUpRight, LucideIcon, Briefcase, Zap, HelpCircle, BookOpen } from 'lucide-react';
import styles from './Header.module.css';

interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Home', icon: Home, href: '/' },
  { title: 'Services', icon: Sparkles, href: '/#services' },
  { title: 'Work', icon: Layers, href: '/#work' },
  { title: 'Pricing', icon: Zap, href: '/#packages' },
  { title: 'Blogs', icon: BookOpen, href: '/blog' },
  { title: 'About', icon: Users, href: '/about' },
  { title: 'Careers', icon: Briefcase, href: '/careers' },
  { title: 'FAQ', icon: HelpCircle, href: '/faq' },
  { title: 'Contact', icon: Mail, href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();



  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle hash scrolling on page load/transition & scroll spy for active nav item
  useEffect(() => {
    if (pathname !== '/') {
      setActiveHash('');
      return;
    }

    // Check for hash on mount or page transition
    const hash = window.location.hash.replace('#', '') || (typeof window !== 'undefined' ? sessionStorage.getItem('km_scroll_target') : null);
    if (hash) {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('km_scroll_target');
      }
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActiveHash(hash);
        }
      }, 150);
      return () => clearTimeout(timer);
    }

    // Scroll spy for sections: packages, work, services
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (scrollY < 200) {
        setActiveHash('');
        return;
      }
      const sections = ['packages', 'work', 'services'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 160;
          if (scrollY >= top) {
            setActiveHash(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (href?: string) => (e?: React.MouseEvent) => {
    setIsOpen(false);
    if (!href) return;

    if (href === '/' && pathname === '/') {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
        setActiveHash('');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        if (e) e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', `/#${targetId}`);
          setActiveHash(targetId);
        }
      } else {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('km_scroll_target', targetId);
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
        setActiveHash('');
      }
    }
  };

  return (
    <>
      <header className={styles.navContainer}>
        <div className={styles.navInner}>
          {/* Brand Logo (Home Button) */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className={styles.logoWrapper}
            data-cursor="HOME"
            aria-label="KREW / MESH Home"
            title="KREW / MESH Home"
          >
            <img
              src="/logo.png"
              alt="KREW / MESH — Creative Technology Studio Vector Wordmark"
              width={1024}
              height={374}
              loading="eager"
              decoding="async"
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navItems.map(({ title, icon: Icon, href }) => {
              const isActive =
                href === '/'
                  ? pathname === '/' && !activeHash
                  : href.startsWith('/#')
                    ? activeHash === href.replace('/#', '')
                    : pathname === href;

              return (
                <Link
                  key={title}
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={handleNavClick(href)}
                  data-cursor={title.toUpperCase()}
                >
                  <span className={styles.linkIcon}>
                    <Icon size={16} />
                  </span>
                  <span>{title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Floating WhatsApp Action Button */}
          <a
            href="https://wa.me/919209839142?text=Hi%20Krew%20Mesh%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="Chat with Krew / Mesh on WhatsApp"
            title="Chat on WhatsApp"
            data-cursor="WHATSAPP"
          >
            <svg
              className={styles.whatsappIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            data-cursor={isOpen ? 'CLOSE' : 'MENU'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`${styles.mobileDrawer} ${isOpen ? styles.open : ''}`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <ul className={styles.mobileList}>
          {navItems.map(({ title, icon: Icon, href }) => (
            <li key={title}>
              <Link
                href={href}
                className={styles.mobileLink}
                onClick={handleNavClick(href)}
              >
                <Icon size={20} />
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={styles.mobileCta}
          onClick={() => setIsOpen(false)}
        >
          <span>Start a Project</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </>
  );
}
