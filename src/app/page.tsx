'use client';

import React, { useEffect } from 'react';

// Import Home Subcomponents
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ProblemStory from '@/components/home/ProblemStory';
import HowItWorks from '@/components/home/HowItWorks';
import FeatureTabs from '@/components/home/FeatureTabs';
import PackedFeatures from '@/components/home/PackedFeatures';
import ProductTour from '@/components/home/ProductTour';
import MultipleViews from '@/components/home/MultipleViews';
import WhyTeamsSwitch from '@/components/home/WhyTeamsSwitch';
import AiSection from '@/components/home/AiSection';
import Automations from '@/components/home/Automations';
import UseCases from '@/components/home/UseCases';
import SavingsCalculator from '@/components/home/SavingsCalculator';
import TemplatesTeaser from '@/components/home/TemplatesTeaser';
import Awards from '@/components/home/Awards';
import StoriesTeaser from '@/components/home/StoriesTeaser';
import MetricsBand from '@/components/home/MetricsBand';
import Testimonials from '@/components/home/Testimonials';
import IntegrationsTeaser from '@/components/home/IntegrationsTeaser';
import SupportStats from '@/components/home/SupportStats';
import SecurityTeaser from '@/components/home/SecurityTeaser';
import PricingTeaser from '@/components/home/PricingTeaser';
import FaqTeaser from '@/components/home/FaqTeaser';
import BlogTeaser from '@/components/home/BlogTeaser';

// Import Shared Layout components
import CtaSection from '@/components/shared/CtaSection';
import Newsletter from '@/components/shared/Newsletter';

export default function Page() {
  // GSAP ScrollTrigger for animation effects
  useEffect(() => {
    // Dynamically import GSAP to ensure it runs only on client
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const els = gsap.utils.toArray('.reveal') as HTMLElement[];

          els.forEach((el) => {
            gsap.set(el, { transition: 'none' }); // Prevent CSS transition collision

            gsap.fromTo(el,
              { 
                opacity: 0, 
                scale: 0.96, 
                rotationX: 4, 
                y: 35,
                transformPerspective: 1000
              },
              {
                opacity: 1,
                scale: 1,
                rotationX: 0,
                y: 0,
                duration: 1.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 88%',
                  once: true,
                  onEnter: () => {
                    el.classList.add('in');

                    // Animate Counters
                    const counters = el.querySelectorAll('[data-count]');
                    counters.forEach((c) => {
                      const elC = c as HTMLElement;
                      if (elC.dataset.done) return;
                      elC.dataset.done = '1';
                      const target = parseInt(elC.getAttribute('data-count') || '0', 10);
                      const suffix = elC.getAttribute('data-suffix') || '';

                      gsap.to(
                        { val: 0 },
                        {
                          val: target,
                          duration: 1.5,
                          ease: 'power3.out',
                          onUpdate: function () {
                            elC.textContent = Math.round(this.targets()[0].val).toLocaleString('en-IN') + suffix;
                          },
                        }
                      );
                    });

                    // Animate Story lines
                    if (el.querySelector('[data-story]') || el.hasAttribute('data-story')) {
                      const lines = el.querySelectorAll('[data-story] .sl-line, .sl-line');
                      lines.forEach((l, i) => {
                        setTimeout(() => {
                          l.classList.add('in');
                        }, 180 * i);
                      });
                    }
                  },
                }
              }
            );
          });

          // Trigger for elements that might load immediately in view without observer trigger
          const allCounters = gsap.utils.toArray('[data-count]') as HTMLElement[];
          allCounters.forEach((c) => {
            if (!c.closest('.reveal') && !c.dataset.done) {
              c.dataset.done = '1';
              const target = parseInt(c.getAttribute('data-count') || '0', 10);
              const suffix = c.getAttribute('data-suffix') || '';

              gsap.to(
                { val: 0 },
                {
                  val: target,
                  duration: 1.5,
                  ease: 'power3.out',
                  onUpdate: function () {
                    c.textContent = Math.round(this.targets()[0].val).toLocaleString('en-IN') + suffix;
                  },
                }
              );
            }
          });
        });

        return () => ctx.revert(); // cleanup
      });
    });
  }, []);

  return (
    <main id="main">
      <Hero />
      <TrustStrip />
      <ProblemStory />
      <HowItWorks />
      <FeatureTabs />
      <PackedFeatures />
      <ProductTour />
      <MultipleViews />
      <WhyTeamsSwitch />
      <AiSection />
      <Automations />
      <UseCases />
      <SavingsCalculator />
      <TemplatesTeaser />
      <Awards />
      <StoriesTeaser />
      <MetricsBand />
      <Testimonials />
      <IntegrationsTeaser />
      <SupportStats />
      <SecurityTeaser />
      <PricingTeaser />
      <FaqTeaser />
      <BlogTeaser />
      <CtaSection />
      <Newsletter />
    </main>
  );
}
