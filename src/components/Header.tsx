'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Sparkles, Users, Mail, Menu, X, ArrowUpRight, LucideIcon, Briefcase } from 'lucide-react';
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
  { title: 'About', icon: Users, href: '/#about' },
  { title: 'Careers', icon: Briefcase, href: '/careers' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();

  // Listen to hash updates and handle smooth scrolling on mount / route change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      setActiveHash(hash);
      if (hash) {
        const targetId = hash.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [pathname]);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveHash('');
      return;
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 90;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', `/#${targetId}`);
          setActiveHash(`#${targetId}`);
        }
      }
    }
  };

  return (
    <>
      <header className={styles.navContainer}>
        <div className={styles.navInner}>
          {/* Brand Logo (Icon Only) */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={styles.logoWrapper}
            data-cursor="HOME"
            aria-label="KREW / MESH Home"
          >
            <img
              src="/logo.png"
              alt="KREW / MESH Logo"
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
                    ? href === `/${activeHash}`
                    : pathname === href;

              return (
                <Link
                  key={title}
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, href)}
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

          {/* Vintage Ringing Phone Contact Button with Comic Speech Bubble on the Right */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={styles.vintagePhoneButton}
            data-cursor="LET'S TALK"
            aria-label="Let's Talk - Contact Us"
          >
            {/* Vibrating Phone Badge */}
            <div className={styles.phoneBadge}>
              <img
                src="/vintage-phone-white.png"
                alt="Vintage Antique Telephone"
                className={styles.vintagePhoneImg}
              />
            </div>

            {/* Comic Style Speech Bubble Floating on Right */}
            <div className={styles.comicBubbleRight}>
              <span>LET&apos;S TALK!</span>
            </div>
          </Link>

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
                onClick={(e) => handleNavClick(e, href)}
              >
                <Icon size={20} />
                <span>{title}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              <Mail size={20} />
              <span>Contact Us</span>
            </Link>
          </li>
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
