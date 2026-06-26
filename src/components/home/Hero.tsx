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
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative py-[clamp(40px,6vw,72px)] px-0 pb-[clamp(20px,3vw,40px)] overflow-hidden">
      {/* Background radial decorations */}
      <div
        className="absolute -top-[200px] -right-[160px] w-[640px] h-[640px] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110, 209, 144, 0.18) 0%, transparent 62%)' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-[54px] items-start">
        {/* Left Copy */}
        <div className="flex flex-col">
          <Eyebrow className="hero-anim opacity-0">Built for Indian teams</Eyebrow>
          <h1 className="font-sora font-extrabold text-[clamp(2.3rem,5.2vw,3.9rem)] leading-[1.12] tracking-[-0.02em] text-ink mt-4 mb-[18px]">
            {/* Part 1 (Regular text) */}
            {visibleChars < part1.length ? (
              <>
                <span>{part1.slice(0, visibleChars)}</span>
                <span className="relative inline-block w-0 h-[0.85em] align-middle select-none pointer-events-none">
                  <span className="absolute left-0 bottom-0 w-[3.5px] h-full bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
                </span>
                <span style={{ visibility: 'hidden' }}>{part1.slice(visibleChars)}</span>
              </>
            ) : (
              <span>{part1}</span>
            )}

            {/* Part 2 (Gradient text) */}
            <em className="bg-gradient-to-r from-[#6ED190] via-[#16D196] to-[#D9E38A] bg-clip-text text-transparent not-italic">
              {part2.slice(0, Math.max(0, visibleChars - part1.length))}
            </em>
            {visibleChars >= part1.length && visibleChars < part1.length + part2.length && (
              <span className="relative inline-block w-0 h-[0.85em] align-middle select-none pointer-events-none">
                <span className="absolute left-0 bottom-0 w-[3.5px] h-full bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
              </span>
            )}
            <em className="bg-gradient-to-r from-[#6ED190] via-[#16D196] to-[#D9E38A] bg-clip-text text-transparent not-italic" style={{ visibility: 'hidden' }}>
              {part2.slice(Math.max(0, visibleChars - part1.length))}
            </em>

            {/* Final Cursor at the very end */}
            {visibleChars === part1.length + part2.length && (
              <span className="relative inline-block w-0 h-[0.85em] align-middle select-none pointer-events-none">
                <span className="absolute left-0 bottom-0 w-[3.5px] h-full bg-[#6ED190] ml-0.5 animate-cursor-blink"></span>
              </span>
            )}
          </h1>
          <p className="hero-anim opacity-0 text-[1.16rem] text-muted leading-relaxed mb-5 max-w-[500px]">
            Chat, voice & video calls, meetings, tasks and a live org<br />chart — all in Squeako. Everything Slack, Teams and<br />
            Zoom do, at a price built for Indian startups.
          </p>
          <div className="hero-anim opacity-0 flex flex-wrap gap-2 mb-[26px]">
            {['Chat', 'Calls', 'Meetings', 'Tasks', 'Presence', 'Org chart'].map((pill) => (
              <span
                key={pill}
                className="bg-gradient-to-r from-[#081C13]/60 to-[#183E2D]/60 border border-white/15 text-[#F5F1C2] font-semibold text-[0.82rem] py-[7px] px-[14px] rounded-full font-sora shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="hero-anim opacity-0 flex flex-col sm:flex-row gap-[13px] mb-[22px]">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Start free — no card needed
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto">
              Book a 1:1 demo
            </Button>
          </div>
          <div className="hero-anim opacity-0 flex flex-wrap gap-[12px_22px] text-[0.88rem] text-white font-medium">
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
        <div className="hero-device opacity-0">
          <DeviceMockup />
        </div>
      </div>
    </div>
  );
}
