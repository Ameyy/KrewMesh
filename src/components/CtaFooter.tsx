'use client';

import styles from './CtaFooter.module.css';
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
              LET'S MAKE IT REAL.
            </h2>
            <p className={styles.supportText}>
              Tell us what you're building. We'll figure out the rest.
            </p>
            <div className={styles.actions}>
              <RainbowButton href="tel:+919209839142" className="text-sm font-semibold rounded-full h-12 px-7">
                Start a project &rarr;
              </RainbowButton>
              <RainbowButton href="#work" className="text-sm font-semibold rounded-full h-12 px-7 [animation-delay:-1s]">
                View our work
              </RainbowButton>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.brandCol}>
            <div className={styles.footerLogoWrapper}>
              <img src="/logo.png" alt="KREW / MESH Logo" className={styles.footerLogoImg} />
            </div>
            <p className={styles.footerDesc}>Creative Technology Studio</p>
          </div>
          
          <div className={styles.linksCol}>
            <a href="/#work">Work</a>
            <a href="/#services">Services</a>
            <a href="/demo/ecommerce">Demo</a>
            <a href="/#about">About</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className={styles.socialCol}>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">LinkedIn</a>
            <a href="tel:+919209839142">+91 920 983 9142</a>
          </div>
        </div>
        <div className={`container ${styles.bottomBar}`}>
          <p>&copy; 2026 Krew / Mesh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
