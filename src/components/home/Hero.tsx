import React, { useState, useEffect, useRef } from 'react';
import Button from '../shared/Button';
import Eyebrow from '../shared/Eyebrow';
import DeviceMockup from '../shared/DeviceMockup';
import gsap from 'gsap';

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);

  const part1 = "One app for your team to ";
  const part2 = "talk, meet & get work done.";

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalLength = part1.length + part2.length;
      const progress = { charIndex: 0 };

      const tl = gsap.timeline();

      // Heading typing animation
      tl.to(progress, {
        charIndex: totalLength,
        duration: totalLength * 0.04,
        ease: 'none',
        onUpdate: () => {
          setVisibleChars(Math.floor(progress.charIndex));
        }
      }, 0.3);

      // Animate the rest of the left column elements (paragraph, pills, buttons)
      tl.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        0.3
      );

      // Animate the device mockup image
      tl.fromTo('.hero-device',
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power3.out' },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-hero-section relative pt-6 md:pt-10 pb-16 md:pb-24 px-0 overflow-hidden">
      {/* Premium background radial glow behind the device mockup */}
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.2) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left Copy */}
        <div className="flex flex-col">
          <Eyebrow className="hero-anim opacity-0">Built for Indian teams</Eyebrow>
          <h1 className="font-sora font-extrabold text-[clamp(2.3rem,5.2vw,3.9rem)] leading-[1.12] tracking-[-0.02em] text-ink mt-4 mb-6">
            {/* Part 1 (Regular text with inline stable structure) */}
            <span>
              {/* Segment 1: "One app for your " */}
              <span>{part1.slice(0, Math.min(visibleChars, 17))}</span>
              {visibleChars < 17 && (
                <span className="relative inline select-none pointer-events-none">
                  <span className="absolute bottom-[0.1em] left-0 w-[3.5px] h-[0.85em] bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
                </span>
              )}
              <span style={{ visibility: 'hidden' }}>{part1.slice(Math.min(visibleChars, 17), 17)}</span>

              {/* Segment 2: "team" */}
              <span 
                className={`border-[1.5px] px-2.5 py-0.5 rounded-[8px] mx-1 inline-block text-white transition-colors duration-200 ${
                  visibleChars >= 17 ? 'border-[#16D196] bg-[#16D196]/10' : 'border-transparent bg-transparent'
                }`}
              >
                <span>{part1.slice(17, Math.min(visibleChars, 21))}</span>
                {visibleChars >= 17 && visibleChars < 21 && (
                  <span className="relative inline select-none pointer-events-none">
                    <span className="absolute bottom-[0.1em] left-0 w-[3.5px] h-[0.85em] bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
                  </span>
                )}
                <span style={{ visibility: 'hidden' }}>{part1.slice(Math.min(visibleChars, 21), 21)}</span>
              </span>

              {/* Segment 3: " to " */}
              <span>{part1.slice(21, Math.min(visibleChars, 25))}</span>
              {visibleChars >= 21 && visibleChars < 25 && (
                <span className="relative inline select-none pointer-events-none">
                  <span className="absolute bottom-[0.1em] left-0 w-[3.5px] h-[0.85em] bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
                </span>
              )}
              <span style={{ visibility: 'hidden' }}>{part1.slice(Math.min(visibleChars, 25), 25)}</span>
            </span>

            {/* Part 2 (Gradient text) */}
            <em className="bg-gradient-to-r from-[#6ED190] via-[#16D196] to-[#D9E38A] bg-clip-text text-transparent not-italic">
              {part2.slice(0, Math.max(0, visibleChars - part1.length))}
            </em>
            {visibleChars >= part1.length && visibleChars < part1.length + part2.length && (
              <span className="relative inline select-none pointer-events-none">
                <span className="absolute bottom-[0.1em] left-0 w-[3.5px] h-[0.85em] bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
              </span>
            )}
            <em className="bg-gradient-to-r from-[#6ED190] via-[#16D196] to-[#D9E38A] bg-clip-text text-transparent not-italic" style={{ visibility: 'hidden' }}>
              {part2.slice(Math.max(0, visibleChars - part1.length))}
            </em>

            {/* Final Cursor at the very end */}
            {visibleChars === part1.length + part2.length && (
              <span className="relative inline select-none pointer-events-none">
                <span className="absolute bottom-[0.1em] left-0 w-[3.5px] h-full min-h-[0.85em] bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
              </span>
            )}
          </h1>
          <p className="hero-anim opacity-0 text-[1.16rem] text-muted leading-relaxed mb-6 max-w-[520px]">
            Chat, voice & video calls, meetings, tasks and a live org chart — all in Squeako. Everything Slack, Teams and Zoom do, at a price built for Indian startups.
          </p>
          <div className="hero-anim opacity-0 flex flex-wrap gap-2 mb-8">
            {['Chat', 'Calls', 'Meetings', 'Tasks', 'Presence', 'Org chart'].map((pill) => (
              <span
                key={pill}
                className="bg-gradient-to-r from-[#081C13]/60 to-[#183E2D]/60 border border-white/15 text-[#F5F1C2] font-semibold text-[0.82rem] py-[7px] px-[14px] rounded-full font-sora shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="hero-anim opacity-0 flex flex-col sm:flex-row gap-4 mb-6">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free — no card needed
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto">
              Book a 1:1 demo
            </Button>
          </div>
          <div className="hero-anim opacity-0 flex flex-wrap gap-[12px_24px] text-[0.88rem] text-white font-medium">
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#16D196]/20 to-[#0C281D]/60 border border-[#6ED190]/30 text-[#D9E38A] text-[0.66rem] font-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                ✓
              </span>{' '}
              Priced in ₹ with GST
            </span>
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#16D196]/20 to-[#0C281D]/60 border border-[#6ED190]/30 text-[#D9E38A] text-[0.66rem] font-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                ✓
              </span>{' '}
              Data stored in India
            </span>
            <span className="inline-flex items-center gap-[7px]">
              <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#16D196]/20 to-[#0C281D]/60 border border-[#6ED190]/30 text-[#D9E38A] text-[0.66rem] font-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                ✓
              </span>{' '}
              Web, Android & iOS
            </span>
          </div>
        </div>

        {/* Right Device Mockup */}
        <div className="hero-device opacity-0 relative z-10">
          <DeviceMockup />
        </div>
      </div>
    </div>
  );
}
