import React, { useEffect, useRef } from 'react';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export default function CtaSection({
  title = 'Bring your whole team onto one app',
  description = 'Chat, calls, meetings and tasks — for less than a cup of chai per person, per day.',
  primaryBtnText = 'Start free',
  secondaryBtnText = 'Book a demo',
  primaryBtnHref = '/contact',
  secondaryBtnHref = '/contact',
  className = '',
}: CtaSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-item',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
    <div ref={containerRef} className={`py-24 px-0 relative overflow-hidden ${className}`}>
      {/* Background circle decoration (green-ish glow in center) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(110, 209, 144, 0.22) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="cta-item opacity-0 text-[clamp(2rem,4.2vw,3.2rem)] font-sora font-extrabold mb-4 leading-tight text-white">
            {title}
          </h2>
          <p className="cta-item opacity-0 text-[1.15rem] mb-7 leading-relaxed text-muted">
            {description}
          </p>
          <div className="cta-item opacity-0 flex flex-col sm:flex-row gap-[14px] justify-center items-center mb-6">
            <Button href={primaryBtnHref} variant="primary" size="lg" className="w-full sm:w-auto">
              {primaryBtnText}
            </Button>
            {secondaryBtnText && (
              <Button href={secondaryBtnHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
                {secondaryBtnText}
              </Button>
            )}
          </div>
          <div className="cta-item opacity-0 flex flex-wrap gap-[10px_22px] justify-center text-[0.84rem] font-medium text-muted">
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/10 text-[#16D196] text-[0.66rem] font-black">
                ✓
              </span>{' '}
              No card required
            </span>
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/10 text-[#16D196] text-[0.66rem] font-black">
                ✓
              </span>{' '}
              Set up in minutes
            </span>
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/10 text-[#16D196] text-[0.66rem] font-black">
                ✓
              </span>{' '}
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

