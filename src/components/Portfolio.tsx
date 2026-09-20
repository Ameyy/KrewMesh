'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';
import { RainbowButton } from './ui/rainbow-button';
import styles from './Portfolio.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    name: 'Clinic Demo Website',
    category: 'Healthcare & Clinic',
    year: '2026',
    desc: 'Modern healthcare practice & patient appointment platform',
    details: 'A modern, accessible digital experience designed for medical clinics, featuring instant appointment scheduling, specialist doctor profiles, interactive treatment guides, and patient-first navigation.',
    tags: ['Clinic Website', 'Online Booking', 'Healthcare UX', 'Responsive Web']
  },
  {
    id: '02',
    name: 'E-Commerce Demo Website',
    category: 'E-Commerce',
    year: '2026',
    desc: 'High-converting online store & seamless shopping experience',
    details: 'A fast, conversion-optimized e-commerce storefront engineered with fluid product catalog filtering, interactive cart drawers, quick-view modals, and secure, frictionless checkout.',
    tags: ['E-Commerce', 'Online Store', 'Fast Checkout', 'Product Catalog'],
    demoUrl: '/demo/ecommerce'
  },
  {
    id: '03',
    name: '3D Printed Products Business',
    category: '3D & Manufacturing',
    year: '2026',
    desc: 'Commercial showcase & custom manufacturing platform',
    details: 'An interactive commercial website built for a custom 3D printing studio, highlighting physical product showcases, material specifications, bespoke quote configurators, and precision manufacturing capabilities.',
    tags: ['3D Printing', 'Product Showcase', 'Custom Manufacturing', 'Web Design']
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const scrollWrapper = scrollWrapperRef.current;
      if (!container || !scrollWrapper) return;

      const panels = gsap.utils.toArray('.' + styles.panel);

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollWrapper.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} id="work" className={styles.portfolioSection}>
        <div className={styles.header}>
          <h2 className={`display-font ${styles.headline}`}>
            WORK THAT<br />
            MOVES PEOPLE.
          </h2>
        </div>

        <div ref={scrollWrapperRef} className={styles.scrollWrapper}>
          <div className={styles.track}>
            {projects.map((project) => (
              <div key={project.id} className={styles.panel}>
                <div className={styles.panelInner}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageOverlay} />
                    <span className={styles.projectId}>{project.id}</span>
                  </div>
                  
                  <div className={styles.projectInfo}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    
                    {'demoUrl' in project && project.demoUrl ? (
                      <RainbowButton
                        href={project.demoUrl}
                        className="mt-4 self-start rounded-full h-10 px-6 text-xs font-bold"
                        data-cursor="DEMO"
                        aria-label={`Open ${project.name} demo`}
                      >
                        Details
                      </RainbowButton>
                    ) : (
                      <RainbowButton 
                        className="mt-4 self-start rounded-full h-10 px-6 text-xs font-bold"
                        onClick={() => setSelectedProject(project)}
                        data-cursor="VIEW"
                        aria-label={`View ${project.name} details`}
                      >
                        Details
                      </RainbowButton>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0e0e0e] p-6 md:p-8 shadow-2xl text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white tracking-wider">
                  {selectedProject.id}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {selectedProject.category} &bull; {selectedProject.year}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Project Details"
                data-cursor="CLOSE"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="py-6 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                {selectedProject.name}
              </h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {selectedProject.details}
              </p>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/90"
                  >
                    <Sparkles size={12} className="opacity-60" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <RainbowButton 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto rounded-full h-11 px-6 text-sm font-semibold [animation-delay:-1s]"
              >
                Back to Projects
              </RainbowButton>
              {'demoUrl' in selectedProject && selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 text-sm font-semibold bg-white text-black hover:bg-white/90 transition-colors"
                  data-cursor="DEMO"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
              <RainbowButton 
                href={`/contact?service=${encodeURIComponent(selectedProject.category.toLowerCase())}`}
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 text-sm font-semibold"
                data-cursor="DISCUSS"
              >
                <span>Inquire About Similar Project</span>
                <ArrowUpRight size={16} />
              </RainbowButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
