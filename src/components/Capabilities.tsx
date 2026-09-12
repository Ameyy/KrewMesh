'use client';

import React from 'react';
import styles from './Capabilities.module.css';

const capabilityGroups = [
  {
    title: 'Brand & Identity',
    items: ['Brand Strategy', 'Visual Identity', 'Art Direction']
  },
  {
    title: 'Digital & UI',
    items: ['Graphic Design', 'UI/UX', 'Web Design']
  },
  {
    title: 'Development & 3D',
    items: ['Web Development', '3D Experiences', 'Motion Graphics']
  },
  {
    title: 'AI & Automation',
    items: ['AI Products', 'SaaS', 'Automation', 'Digital Strategy']
  }
];

export default function Capabilities() {
  return (
    <section className={`section ${styles.capabilitiesSection}`}>
      <div className={`container ${styles.splitLayout}`}>
        {/* Left Side: Headline */}
        <div className={styles.leftColumn}>
          <h2 className={`display-font ${styles.headline}`}>
            BUILT FOR<br />
            WHAT'S NEXT.
          </h2>
        </div>

        {/* Right Side: Diagonal Card Stack */}
        <div className={styles.rightColumn}>
          <div className={styles.stackContainer}>
            {capabilityGroups.map((group, index) => (
              <div 
                key={index} 
                className={styles.card}
                style={{ 
                  '--card-index': index,
                  zIndex: index 
                } as React.CSSProperties} 
              >
                <h3 className={`display-font ${styles.cardTitle}`}>{group.title}</h3>
                <ul className={styles.cardList}>
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
