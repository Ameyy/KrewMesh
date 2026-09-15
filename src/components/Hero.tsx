'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { RainbowButton } from './ui/rainbow-button';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Lens interaction setup
    const hero = heroRef.current;
    if (hero) {
      // Set initial state to center of screen
      hero.style.setProperty('--x', (window.innerWidth / 2).toString());
      hero.style.setProperty('--y', (window.innerHeight / 2).toString());

      // Use GSAP quickTo for super performant fluid interpolation (Framer Motion spring alternative)
      const xTo = gsap.quickTo(hero, "--x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(hero, "--y", { duration: 0.5, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      hero.addEventListener('mousemove', handleMouseMove);
      
      // Cleanup
      return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const handleScrollToWork = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background Interactive Reveal Layer */}
      <div className={styles.bgContainer}>
        {/* Grayscale Blurred Base */}
        <img src="/hero-bg.jpg" alt="Background Texture" className={styles.baseLayer} />
        
        {/* Full Color Masked Reveal */}
        <img src="/hero-bg.jpg" alt="Reveal Texture" className={styles.revealLayer} />
        
        {/* Lens Box and Crosshair */}
        <div className={styles.lensBorder}></div>
        <div className={styles.crosshair}></div>
      </div>

      <div className={styles.content}>
        <h1 ref={titleRef} className="display-font">
          WE BUILD<br />
          DIGITAL WORLDS.
        </h1>
        <p ref={subtitleRef} className={styles.supportText}>
          Krew / Mesh is a creative-tech studio building brands, digital experiences, websites, AI products and software for ambitious businesses.
        </p>
        <div className={styles.actions}>
          <RainbowButton 
            href="#work" 
            onClick={handleScrollToWork} 
            className="text-sm font-semibold rounded-full h-12 px-7"
            data-cursor="EXPLORE"
          >
            Explore our work &rarr;
          </RainbowButton>
          <RainbowButton 
            href="/contact" 
            className="text-sm font-semibold rounded-full h-12 px-7"
            data-cursor="START"
          >
            Start a project
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}
