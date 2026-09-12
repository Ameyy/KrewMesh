'use client';

import styles from './MeshNetwork.module.css';

export default function MeshNetwork() {
  return (
    <section id="about" className={`section ${styles.networkSection}`}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={`display-font ${styles.headline}`}>
            EVERYTHING<br />
            CONNECTS.
          </h2>
          <p className={styles.copy}>
            Krew / Mesh brings strategy, design, technology and intelligence into one connected creative system.
          </p>
          
          {/* Fallback/DOM representation of nodes if 3D is taking time to load */}
          <div className={styles.nodesList}>
            <span>Strategy</span>
            <span>Brand</span>
            <span>Design</span>
            <span>Code</span>
            <span>AI</span>
            <span>Growth</span>
          </div>
        </div>
      </div>
      
      {/* 3D Network interaction will be handled by GlobalCanvas based on scroll position */}
    </section>
  );
}
