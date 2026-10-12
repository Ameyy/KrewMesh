'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SonarGrid } from '@/components/ui/sonar-grid';
import styles from './EditorialHero.module.css';

export default function EditorialHero() {
  return (
    <SonarGrid
      id="hero-sonar-grid"
      ringWidth={90}
      speed={260}
      amplitude={2.2}
      pingEvery={2.4}
      interactive={true}
      spacing={26}
      baseOpacity={0.25}
      color="#101010"
      pingArea={[0.22, 0.18, 0.78, 0.82]}
      className={styles.heroSection}
    >
      <div className={styles.typographyWrapper}>

        {/* ================= ROW 1: TRANS [BADGE] FORMING ================= */}
        <motion.div
          className={styles.titleRow}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating Label: WEB & APP DEVELOPMENT (Top-Left) */}
          <Link
            href="/services/development"
            className={`${styles.serviceTag} ${styles.tagTopLeft}`}
          >
            WEB & APP<br />DEVELOPMENT
          </Link>

          <span className={styles.heroWord}>TRANS</span>

          {/* Badge 1: Accent Burnt Orange Square with Ivory Geometric Starburst */}
          <motion.div
            className={styles.badgeSquare}
            whileHover={{ scale: 1.08, rotate: 6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            title="Krew Mesh Starburst"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-3/5 h-3/5 fill-[#E6D5BD] transition-transform duration-500 hover:rotate-45"
              aria-hidden="true"
            >
              <rect x="42" y="6" width="16" height="88" rx="6" />
              <rect x="6" y="42" width="88" height="16" rx="6" />
              <rect x="42" y="6" width="16" height="88" rx="6" transform="rotate(45 50 50)" />
              <rect x="42" y="6" width="16" height="88" rx="6" transform="rotate(-45 50 50)" />
              <circle cx="50" cy="50" r="10" fill="#D5360C" />
            </svg>
          </motion.div>

          <span className={styles.heroWord}>FORMING</span>

          {/* Floating Label: BRAND STRATEGY & VISUAL IDENTITY (Top-Right) */}
          <Link
            href="/services/branding"
            className={`${styles.serviceTag} ${styles.tagTopRight}`}
          >
            BRAND STRATEGY<br />& VISUAL IDENTITY
          </Link>
        </motion.div>

        {/* ================= ROW 2: IDEAS [MESH] INTO + [CTA BUTTON] ================= */}
        <motion.div
          className={styles.titleRow}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.heroWord}>IDEAS</span>

          {/* Badge 2: 4-Octagon Geometric Mesh in Soft Black */}
          <motion.div
            className={styles.badgeMesh}
            whileHover={{ scale: 1.1, rotate: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            title="Krew Mesh Network"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-[#101010]"
              aria-hidden="true"
            >
              {/* Top-Left Octagon */}
              <polygon points="12,2 38,2 48,12 48,38 38,48 12,48 2,38 2,12" />
              {/* Top-Right Octagon */}
              <polygon points="62,2 88,2 98,12 98,38 88,48 62,48 52,38 52,12" />
              {/* Bottom-Left Octagon */}
              <polygon points="12,52 38,52 48,62 48,88 38,98 12,98 2,88 2,62" />
              {/* Bottom-Right Octagon */}
              <polygon points="62,52 88,52 98,62 98,88 88,98 62,98 52,88 52,62" />
            </svg>
          </motion.div>

          <span className={styles.heroWord}>INTO</span>

          {/* CTA Button: Work with us ↗ */}
          <Link
            href="/contact"
            className={styles.ctaButton}
            id="hero-cta-button"
            aria-label="Work with Krew Mesh"
          >
            <span>Work with us</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* ================= ROW 3: EXPERI [ARROW] ENCES ================= */}
        <motion.div
          className={styles.titleRow}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating Label: UI/UX DESIGN & PROTOTYPING (Bottom-Left) */}
          <Link
            href="/services/design"
            className={`${styles.serviceTag} ${styles.tagBottomLeft}`}
          >
            UI/UX DESIGN<br />& PROTOTYPING
          </Link>

          <span className={`${styles.heroWord} ${styles.heroWordOrange}`}>EXPERI</span>

          {/* Badge 3: Soft Black Circle with Diagonal Arrow */}
          <motion.div
            className={styles.badgeCircle}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            title="Explore Experiences"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-1/2 h-1/2 fill-none stroke-[#E6D5BD] stroke-[2.7] stroke-linecap-round stroke-linejoin-round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.div>

          <span className={`${styles.heroWord} ${styles.heroWordOrange}`}>ENCES</span>

          {/* Floating Label: AI AUTOMATION & SAAS PLATFORMS (Bottom-Right) */}
          <Link
            href="/services/ai"
            className={`${styles.serviceTag} ${styles.tagBottomRight}`}
          >
            AI AUTOMATION<br />& SAAS PLATFORMS
          </Link>
        </motion.div>

      </div>
    </SonarGrid>
  );
}
