'use client';

import styles from './CtaFooter.module.css';
import Link from 'next/link';
import { CrowdCanvas } from './ui/crowd-canvas';
import { RainbowButton } from './ui/rainbow-button';

export default function CtaFooter() {
  return (
    <>
      <section id="contact" className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaBg}></div>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={`display-font ${styles.headline}`}>
              HAVE AN IDEA?<br />
              LET&apos;S BUILD IT.
            </h2>
            <p className={styles.subline}>
              We partner with ambitious brands and founders to create digital products that leave a mark.
            </p>
            <div className={styles.ctaActions}>
              <RainbowButton href="/contact">
                Start a Project
              </RainbowButton>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.brandCol}>
            <div className={styles.footerLogoWrapper}>
              <Link href="/" aria-label="KREW / MESH Home" title="KREW / MESH Home">
                <img src="/logo.png" alt="KREW / MESH Logo" className={styles.footerLogoImg} />
              </Link>
            </div>
            <p className={styles.footerDesc}>Creative Technology Studio</p>
          </div>
          
          <div className={styles.linksCol}>
            <a href="/#work">Work</a>
            <a href="/#services">Services</a>
            <a href="/#packages">Builds &amp; Pricing</a>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
                }
              }}
              style={{ border: 'none', outline: 'none', background: 'transparent', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
            >
              Cookie Settings
            </button>
            <a href="/sitemap">Sitemap</a>
          </div>
          
          <div className={styles.socialCol}>
            <a href="https://www.instagram.com/krewmesh/" target="_blank" rel="noopener noreferrer">Instagram (@krewmesh)</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@krewmesh.agency">hello@krewmesh.agency</a>
            <a href="tel:+919209839142">+91 920 983 9142</a>
          </div>
        </div>
        <div className={`container ${styles.bottomBar}`}>
          <p>&copy; {new Date().getFullYear()} Krew / Mesh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
