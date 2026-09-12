'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor]');
      
      if (interactive) {
        setIsHovering(true);
        const cursorLabel = interactive.getAttribute('data-cursor') || (interactive.tagName === 'A' ? 'OPEN' : '');
        setLabel(cursorLabel);
      } else {
        setIsHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Don't render custom cursor on touch devices
  }

  return (
    <div 
      ref={cursorRef} 
      className={`${styles.cursor} ${isHovering ? styles.active : ''}`}
    >
      <div className={styles.dot}></div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
