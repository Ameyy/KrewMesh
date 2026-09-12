'use client';

import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Understand the problem, audience and opportunity.'
  },
  {
    num: '02',
    title: 'DEFINE',
    desc: 'Build the strategy, concept and direction.'
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Turn ideas into a refined visual and digital system.'
  },
  {
    num: '04',
    title: 'DEVELOP',
    desc: 'Build, launch and continuously improve.'
  }
];

export default function Process() {
  return (
    <section className={`section ${styles.processSection}`}>
      <div className="container">
        <h2 className={`display-font ${styles.headline}`}>
          FROM<br />
          THOUGHT &rarr; THING.
        </h2>
        
        <div className={styles.processGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
