import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import Badge from '../shared/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SecurityTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-badge',
        { y: 20, opacity: 0, scale: 0.93 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-24 md:py-32 px-0 relative overflow-hidden">
      {/* Background glow decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full z-0 pointer-events-none opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.15) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-11 text-center">
          <Eyebrow>Safe & in India</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Security your compliance team will like
          </h2>
          <p className="text-[1.1rem] text-muted">
            Encryption in transit and at rest, data hosted in India, DPDP-ready, admin controls, audit logs and SSO.
          </p>
        </div>

        {/* Badges Center Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-[22px]">
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            >
              DPDP-ready
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            >
              ISO 27001
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            >
              SOC 2
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                </svg>
              }
            >
              Data in India
            </Badge>
          </div>
        </div>

        <div className="text-center">
          <Button href="/security" variant="ghost" className="group">
            Read about security
            <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
