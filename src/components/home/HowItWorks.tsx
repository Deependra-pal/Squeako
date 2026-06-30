'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cols = gsap.utils.toArray<HTMLElement>('.step-col');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.timeline-grid',
          start: 'top 86%',
          once: true,
        }
      });

      cols.forEach((col, index) => {
        // Animate each card reveal with a smooth bounce pop-in
        tl.fromTo(col,
          { y: 30, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.1)',
          },
          index === 0 ? undefined : '>-0.45'
        );

        // Animate horizontal progress line to the next card segment
        if (index > 0) {
          const targetWidth = `${index * 25}%`;
          tl.to('.timeline-line-progress',
            {
              width: targetWidth,
              duration: 0.6,
              ease: 'power2.inOut',
            },
            '<'
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: 1,
      tag: 'No setup headaches',
      title: 'Create workspace',
      desc: 'Sign up with name & email. Under 5 mins, no credit card, no IT tickets.',
      visual: (
        <div className="w-full mt-auto bg-paper/60 rounded-[12px] p-3 border border-hairline/80">
          <div className="font-sora font-bold text-[0.78rem] text-ink mb-1 flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-[#6ED190] text-white flex items-center justify-center font-bold text-[0.55rem]">K</span>
            Kettle workspace
          </div>
          <div className="text-[0.7rem] text-muted">Ready · Took 3m 12s</div>
        </div>
      ),
    },
    {
      num: 2,
      tag: 'No chasing people',
      title: 'Invite your team',
      desc: 'Drop in emails or share a WhatsApp link. Org chart builds itself.',
      visual: (
        <div className="w-full mt-auto bg-paper/60 rounded-[12px] p-3 border border-hairline/80">
          <div className="flex justify-between items-center mb-1">
            <span className="font-sora font-bold text-[0.78rem] text-ink">Invites sent</span>
            <Badge variant="status-on" className="!py-[1px] !px-1.5 !text-[0.62rem]">Active</Badge>
          </div>
          <div className="text-[0.7rem] text-muted leading-tight">Priya & Rahul joined</div>
        </div>
      ),
    },
    {
      num: 3,
      tag: 'No more messy chats',
      title: 'Organise groups',
      desc: 'Channels for teams, and guest rooms where clients only see what you share.',
      visual: (
        <div className="w-full mt-auto bg-paper/60 rounded-[12px] p-3 border border-hairline/80">
          <div className="font-sora font-bold text-[0.78rem] text-ink mb-1">Active groups</div>
          <div className="text-[0.7rem] text-muted flex flex-col gap-0.5">
            <span># launch-team</span>
            <span># design</span>
          </div>
        </div>
      ),
    },
    {
      num: 4,
      tag: 'No second app for calls',
      title: 'Call & meet',
      desc: 'Quick audio or video calls inside chats. Squeako nudges everyone.',
      visual: (
        <div className="w-full mt-auto bg-paper/60 rounded-[12px] p-3 border border-hairline/80">
          <div className="font-sora font-bold text-[0.78rem] text-ink mb-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
            Daily Standup
          </div>
          <div className="text-[0.7rem] text-muted">10:00 AM · Recurring</div>
        </div>
      ),
    },
    {
      num: 5,
      tag: 'No work slipping away',
      title: 'Track to done',
      desc: 'Make any message a task, assign an owner and a due date right inside chat.',
      visual: (
        <div className="w-full mt-auto bg-paper/60 rounded-[12px] p-3 border border-hairline/80">
          <div className="flex justify-between items-center mb-1">
            <span className="font-sora font-bold text-[0.78rem] text-ink">Fix mobile CTA</span>
            <Badge variant="status-busy" className="!py-[1px] !px-1.5 !text-[0.62rem]">High</Badge>
          </div>
          <div className="text-[0.7rem] text-muted">Assigned to Dev</div>
        </div>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="bg-how-section py-24 md:py-32 px-0 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Head */}
        <div className="max-w-[780px] mx-auto mb-14 text-center">
          <Eyebrow>From zero to talking in minutes</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink sm:whitespace-nowrap">
            How your team gets on Squeako
          </h2>
          <p className="text-[1.1rem] text-muted">
            No IT project. No consultants. Five steps and you're live.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-8">
          {/* Horizontal line connector (desktop only) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[1.5px] bg-[#1C3333] hidden md:block z-0 overflow-hidden">
            <div className="timeline-line-progress absolute top-0 left-0 h-full w-0 bg-[#16D196]"></div>
          </div>

          {/* Steps Horizontal Row */}
          <div className="timeline-grid flex overflow-x-auto gap-8 snap-x snap-mandatory pb-6 md:grid md:grid-cols-5 md:overflow-x-visible md:pb-0 relative z-10 scrollbar-thin">
            {steps.map((step) => (
              <div
                key={step.num}
                className="step-col how-step-card opacity-0 w-[280px] shrink-0 snap-start md:w-auto flex flex-col items-center text-center rounded-[20px] p-[22px]"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Step indicator */}
                <div className="w-[42px] h-[42px] rounded-[12px] step-num-glossy font-sora font-extrabold text-[1.15rem] flex items-center justify-center mb-4 z-10 relative">
                  {step.num}
                </div>

                <span className="font-space-mono text-[0.66rem] tracking-[0.08em] uppercase text-muted mb-1">
                  {step.tag}
                </span>

                <h3 className="font-sora font-bold text-[1.14rem] text-ink mb-2">
                  {step.title}
                </h3>

                <p className="text-muted text-[0.82rem] leading-relaxed mb-5 flex-grow">
                  {step.desc}
                </p>

                {/* Compact Mini Card Visual */}
                {step.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
