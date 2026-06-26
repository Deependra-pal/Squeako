'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import PackCard from '../shared/PackCard';
import TiltCard from '../shared/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PackedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.pack-card-item',
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pack-grid',
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Voice messages',
      subtitle: 'Faster than typing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        </svg>
      ),
    },
    {
      title: 'Video messages',
      subtitle: 'Record, don\'t meet',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
    },
    {
      title: 'Scheduled messages',
      subtitle: 'Send at the right time',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      title: 'Polls',
      subtitle: 'Decide as a team',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
    },
    {
      title: 'Reminders',
      subtitle: 'Nudge anyone',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      ),
    },
    {
      title: 'Shared notes',
      subtitle: 'Context in one place',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      ),
    },
    {
      title: 'Roles & permissions',
      subtitle: 'Control access',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'Unlimited search',
      subtitle: 'Find anything',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
    },
    {
      title: 'Guest access',
      subtitle: 'Bring clients in',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      title: 'AI assistant',
      subtitle: 'Summaries & recaps',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: 'Mobile apps',
      subtitle: 'Android & iOS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'Audit logs',
      subtitle: 'On Business+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="bg-features-section py-20 px-0 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-14 text-center">
          <Eyebrow>And there's more</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Packed with the little things that help
          </h2>
          <p className="text-[1.1rem] text-muted">
            From async messages to permissions — the details that make a tool a pleasure to use.
          </p>
        </div>

        {/* Grid list of pack cards */}
        <div className="pack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <TiltCard key={feat.title} className="pack-card-item h-full opacity-0">
              <PackCard icon={feat.icon} title={feat.title} subtitle={feat.subtitle} className="h-full" />
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
