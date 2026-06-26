'use client';

import React, { useEffect } from 'react';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import ByTeam from '@/components/solutions/ByTeam';
import ByIndustry from '@/components/solutions/ByIndustry';
import CtaSection from '@/components/shared/CtaSection';

export default function SolutionsPage() {
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

  return (
    <main id="main">
      <SolutionsHero />
      <ByTeam />
      <ByIndustry />
      <CtaSection
        title="Find the fit for your team"
        description="Tell us how your team works and we'll show you the quickest way to get going."
        primaryBtnText="Book a demo"
        secondaryBtnText="See pricing"
        primaryBtnHref="/contact"
        secondaryBtnHref="/pricing"
      />
    </main>
  );
}
