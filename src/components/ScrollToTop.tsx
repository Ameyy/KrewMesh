'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 280px or more
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.scrollTopButton} ${isVisible ? styles.visible : ''}`}
      aria-label="Scroll to top of page"
      data-cursor="TOP"
    >
      <span className={styles.iconWrapper}>
        <ArrowUp size={20} strokeWidth={2.2} />
      </span>
      <span className={styles.tooltip}>Back to Top</span>
    </button>
  );
}
