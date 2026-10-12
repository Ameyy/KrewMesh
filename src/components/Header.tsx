'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Sparkles, 
  Users, 
  Mail, 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight,
  ChevronDown,
  LucideIcon, 
  Zap, 
  HelpCircle, 
  BookOpen,
  Target,
  PenTool,
  Monitor,
  Code,
  Cloud,
  Play
} from 'lucide-react';
import styles from './Header.module.css';

interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
  hasDropdown?: boolean;
}

interface ServiceDropdownItem {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

const serviceDropdownItems: ServiceDropdownItem[] = [
  {
    title: 'Branding',
    desc: 'Identity systems, logos & styleguides',
    href: '/services/branding',
    icon: Target,
  },
  {
    title: 'Design',
    desc: 'UI/UX design & creative direction',
    href: '/services/design',
    icon: PenTool,
  },
  {
    title: 'Digital',
    desc: '3D experiences & modern websites',
    href: '/services/digital',
    icon: Monitor,
  },
  {
    title: 'Development',
    desc: 'Ultra-fast Next.js apps & software',
    href: '/services/development',
    icon: Code,
  },
  {
    title: 'AI Solutions',
    desc: 'Automation & intelligent products',
    href: '/services/ai',
    icon: Sparkles,
  },
  {
    title: 'SaaS Platforms',
    desc: 'Scalable SaaS product architecture',
    href: '/services/saas',
    icon: Cloud,
  },
];

const leftNavItems: NavItem[] = [
  { title: 'Services', icon: Sparkles, href: '/services', hasDropdown: true },
  { title: 'Pricing', icon: Zap, href: '/#packages' },
  { title: 'Demo', icon: Play, href: '/#work' },
];

const rightNavItems: NavItem[] = [
  { title: 'About', icon: Users, href: '/about' },
  { title: 'Blogs', icon: BookOpen, href: '/blog' },
  { title: 'FAQ', icon: HelpCircle, href: '/faq' },
];

const mobileNavItems: NavItem[] = [
  { title: 'Home', icon: Home, href: '/' },
  { title: 'Services', icon: Sparkles, href: '/services', hasDropdown: true },
  { title: 'Pricing', icon: Zap, href: '/#packages' },
  { title: 'Demo', icon: Play, href: '/#work' },
  { title: 'About', icon: Users, href: '/about' },
  { title: 'Blogs', icon: BookOpen, href: '/blog' },
  { title: 'FAQ', icon: HelpCircle, href: '/faq' },
  { title: 'Contact', icon: Mail, href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Handle click outside & escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

    const hashTarget = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    const sessionTarget = typeof window !== 'undefined' ? sessionStorage.getItem('km_scroll_target') : null;
    const target = sessionTarget || hashTarget;

    if (target) {
      if (sessionTarget && typeof window !== 'undefined') {
        sessionStorage.removeItem('km_scroll_target');
      }
      const scrollToTarget = () => {
        const el = document.getElementById(target);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActiveHash(target);
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer1 = setTimeout(scrollToTarget, 150);
        const timer2 = setTimeout(scrollToTarget, 400);
      }
    }

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

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const handleNavClick = (href?: string) => (e?: React.MouseEvent) => {
    setIsOpen(false);
    setDropdownOpen(false);
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
    setDropdownOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
        setActiveHash('');
      }
    }
  };

  const isItemActive = (href: string) => {
    if (href === '/') return pathname === '/' && !activeHash;
    if (href.startsWith('/#')) return activeHash === href.replace('/#', '');
    if (href === '/services') return pathname.startsWith('/services');
    if (href === '/demo') return pathname.startsWith('/demo');
    if (href === '/blog') return pathname.startsWith('/blog');
    return pathname === href;
  };

  return (
    <>
      <header className={styles.navContainer}>
        {/* Top Notched Island (Solidroad Inspired) */}
        <div className={styles.navIsland}>
          {/* Inverted Curved Fillet Corners */}
          <svg className={styles.earLeft} viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M28 0 H0 C15.46 0 28 12.54 28 28 V0Z" fill="#FFFFFF" />
          </svg>
          <svg className={styles.earRight} viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M0 0 H28 C12.54 0 0 12.54 0 28 V0Z" fill="#FFFFFF" />
          </svg>

          {/* Left Group of Navigation Links */}
          <nav className={styles.navGroupLeft} aria-label="Services, Pricing and Demos">
            {leftNavItems.map(({ title, href, hasDropdown }) => {
              if (hasDropdown) {
                return (
                  <div
                    key={title}
                    ref={dropdownContainerRef}
                    className={`${styles.dropdownContainer} ${dropdownOpen ? styles.open : ''}`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={href}
                      className={`${styles.navLink} ${isItemActive(href) || pathname.startsWith('/services') ? styles.active : ''}`}
                      onClick={handleNavClick(href)}
                      data-cursor="SERVICES"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{title}</span>
                      <ChevronDown className={styles.chevronIcon} />
                    </Link>

                    {/* Invisible Bridge */}
                    <div className={styles.dropdownBridge} />

                    {/* Floating Dropdown Card */}
                    <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownOpen : ''}`}>
                      <div className={styles.dropdownHeader}>
                        <span className={styles.dropdownHeaderTitle}>Practices &amp; Capabilities</span>
                        <span className={styles.dropdownHeaderTag}>6 Specialized Areas</span>
                      </div>

                      <div className={styles.dropdownGrid}>
                        {serviceDropdownItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={styles.dropdownItem}
                              onClick={() => setDropdownOpen(false)}
                              data-cursor="VIEW"
                            >
                              <div className={styles.dropdownItemIcon}>
                                <Icon size={16} />
                              </div>
                              <div className={styles.dropdownItemContent}>
                                <span className={styles.dropdownItemTitle}>
                                  {item.title}
                                </span>
                                <span className={styles.dropdownItemDesc}>
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className={styles.dropdownFooter}>
                        <Link
                          href="/services"
                          className={styles.dropdownFooterLink}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span>Explore All Practices</span>
                          <ArrowRight size={13} />
                        </Link>
                        <span className={styles.dropdownFooterHint}>From Strategy to Scale</span>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={title}
                  href={href}
                  className={`${styles.navLink} ${isItemActive(href) ? styles.active : ''}`}
                  onClick={handleNavClick(href)}
                  data-cursor={title.toUpperCase()}
                >
                  <span>{title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Emblem Icon (No text/wordmark) */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className={styles.logoWrapper}
            data-cursor="HOME"
            aria-label="KREW / MESH Home"
            title="KREW / MESH Home"
          >
            <img
              src="/icon.png"
              alt="KREW / MESH"
              width={1024}
              height={374}
              className={styles.logoImg}
              loading="eager"
            />
          </Link>

          {/* Right Group of Links + Primary Action Pill */}
          <div className={styles.navGroupRight}>
            {rightNavItems.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`${styles.navLink} ${isItemActive(href) ? styles.active : ''}`}
                onClick={handleNavClick(href)}
                data-cursor={title.toUpperCase()}
              >
                <span>{title}</span>
              </Link>
            ))}

            {/* Primary Action Button */}
            <Link
              href="/contact"
              className={styles.ctaPill}
              onClick={() => setIsOpen(false)}
              data-cursor="CONTACT"
              aria-label="Start a project with Krew Mesh"
            >
              <span>Start a Project</span>
              <ArrowRight className={styles.ctaPillArrow} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            data-cursor={isOpen ? 'CLOSE' : 'MENU'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

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
          {mobileNavItems.map(({ title, icon: Icon, href, hasDropdown }) => {
            if (hasDropdown) {
              return (
                <li key={title} className={styles.mobileServicesAccordion}>
                  <button
                    type="button"
                    className={`${styles.mobileAccordionToggle} ${mobileServicesOpen ? styles.open : ''}`}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Icon size={20} />
                      <span>{title}</span>
                    </div>
                    <ChevronDown size={18} className={styles.chevronIcon} />
                  </button>

                  {mobileServicesOpen && (
                    <ul className={styles.mobileSubList}>
                      {serviceDropdownItems.map((item) => {
                        const SubIcon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={styles.mobileSubLink}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                              }}
                            >
                              <SubIcon size={16} style={{ color: '#D5360C' }} />
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link
                          href="/services"
                          className={styles.mobileSubLink}
                          style={{ color: '#D5360C', fontWeight: 700 }}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          <ArrowRight size={16} />
                          <span>All Services Directory</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            }

            return (
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
            );
          })}
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
