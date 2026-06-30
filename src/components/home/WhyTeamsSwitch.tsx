'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';
import TiltCard from '../shared/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhyTeamsSwitch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.switch-card-item',
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.switch-grid',
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const points = [
    {
      title: 'Up to 70% cheaper',
      desc: 'One affordable plan replaces your chat, calls, meetings and task tools. Pay in ₹ with a proper GST invoice.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Your data stays in India',
      desc: 'Hosted in Indian data centres and built to align with the DPDP Act. No wondering where your team\'s chats live.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Web, Android & iOS',
      desc: 'Field team or office team — everyone gets the full experience on any device, anywhere.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'Support in your timezone',
      desc: 'Real humans on chat and WhatsApp during IST business hours, by a team that gets the local context.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'Live in minutes',
      desc: 'No IT project, no consultants. Create a workspace, invite your team, and you\'re talking the same day.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Pay the Indian way',
      desc: 'UPI, net banking, debit and credit cards. Monthly or annual. Cancel anytime — no lock-ins.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="bg-switch-section py-24 md:py-32 px-0 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-14 text-center">
          <Eyebrow>Why teams switch</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Made for how Indian teams really work
          </h2>
          <p className="text-[1.1rem] text-muted">
            Not a foreign tool with an India price tag — built ground-up for startups and SMBs here.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="switch-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt) => (
            <TiltCard key={pt.title} className="switch-card-item h-full opacity-0">
              <FeatureCard icon={pt.icon} title={pt.title} description={pt.desc} className="h-full" />
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
