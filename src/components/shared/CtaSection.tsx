import React from 'react';
import Button from './Button';

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
  return (
    <div className={`py-[13px] px-0 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#122431] to-[#0F1C25] border border-[#233D52]/40 rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">

          {/* Background circle decoration (permanently visible, green-ish glow) */}
          <div
            className="absolute -top-[120px] -right-[90px] w-[400px] h-[400px] rounded-full z-0 pointer-events-none opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(110, 209, 144, 0.22) 0%, transparent 70%)' }}
          ></div>

          <div className="text-center max-w-[680px] mx-auto z-10 relative">
            <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-sora font-extrabold mb-4 leading-tight text-white">
              {title}
            </h2>
            <p className="text-[1.15rem] opacity-100 mb-7 leading-relaxed text-white">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-[14px] justify-center items-center mb-6">
              <Button href={primaryBtnHref} variant="light" size="lg" className="w-full sm:w-auto">
                {primaryBtnText}
              </Button>
              {secondaryBtnText && (
                <Button href={secondaryBtnHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
                  {secondaryBtnText}
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-[10px_22px] justify-center text-[0.84rem] font-medium text-white">
              <span className="inline-flex items-center gap-[7px]">
                <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/40 text-white text-[0.66rem] font-black">
                  ✓
                </span>{' '}
                No card required
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/40 text-white text-[0.66rem] font-black">
                  ✓
                </span>{' '}
                Set up in minutes
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-white/40 text-white text-[0.66rem] font-black">
                  ✓
                </span>{' '}
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

