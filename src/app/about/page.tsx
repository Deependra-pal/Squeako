'use client';

import React, { useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import MetricsGrid from '@/components/shared/MetricsGrid';
import Principles from '@/components/about/Principles';
import CtaSection from '@/components/shared/CtaSection';

export default function AboutPage() {
  // Intersection Observer scroll animation triggers
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');

    const animateCount = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = '1';
      const target = parseInt(el.getAttribute('data-count') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1100;
      let t0: number | null = null;

      const step = (ts: number) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString('en-IN') + suffix;
      };
      requestAnimationFrame(step);
    };

    let io: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const targetEl = en.target as HTMLElement;
              targetEl.classList.add('in');
              io?.unobserve(targetEl);
              targetEl.querySelectorAll('[data-count]').forEach((c) => animateCount(c as HTMLElement));
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io?.observe(el));
    } else {
      els.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.classList.add('in');
        htmlEl.querySelectorAll('[data-count]').forEach((c) => animateCount(c as HTMLElement));
      });
    }

    return () => {
      if (io) {
        els.forEach((el) => io?.unobserve(el));
      }
    };
  }, []);

  const aboutMetrics = [
    { count: '70', suffix: '%', label: 'Lower cost than legacy tools' },
    { count: '6', suffix: '-in-1', label: 'Tools replaced' },
    { count: '100', suffix: '%', label: 'Data hosted in India' },
    { count: '5', suffix: ' min', label: 'To set up' },
  ];

  return (
    <main id="main">
      <AboutHero />
      <AboutStory />
      <MetricsGrid metrics={aboutMetrics} />
      <Principles /> 
      <CtaSection
        title="Come build a calmer workday"
        description="Join the Indian teams moving their conversations to one app that just works."
        primaryBtnText="Start free"
        secondaryBtnText="Contact us"
        primaryBtnHref="/contact"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
