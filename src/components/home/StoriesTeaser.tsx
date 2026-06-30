import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StoriesTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.story-col',
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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

  const stories = [
    {
      metric: '₹38k → ₹6k / mo',
      quote: '"We were spending almost ₹38,000 a month across three tools. Squeako does it all for a fraction, and the org chart made onboarding far easier."',
      avatarBg: '#436B56',
      avatarText: 'AS',
      name: 'Aarav Shah',
      role: 'Founder, Kettle · Bengaluru',
    },
    {
      metric: '1 day to roll out',
      quote: '"Calls, meetings and chat in one app means no more pasting Zoom links into Slack. Our field staff actually use it because the mobile app is genuinely good."',
      avatarBg: '#16D196',
      avatarText: 'PM',
      name: 'Priya Menon',
      role: 'Ops Lead, Routely · Pune',
    },
    {
      metric: '60% fewer tools',
      quote: '"As a fintech, data residency isn\'t optional. Squeako keeping everything in India made the compliance conversation easy. WhatsApp support during IST hours matters a lot."',
      avatarBg: '#F0506E',
      avatarText: 'RG',
      name: 'Rahul Gupta',
      role: 'COO, Finbar · Gurugram',
    },
  ];

  return (
    <div ref={containerRef} className="bg-stories-section py-24 md:py-32 px-0 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        <div className="py-2">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Real results</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Teams that made the switch
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.name}
                className="story-col opacity-0 card-premium p-7 flex flex-col gap-4"
              >
                <div className="font-sora font-extrabold text-[1.7rem] bg-grad bg-clip-text text-transparent leading-[1.1] w-fit">
                  {story.metric}
                </div>
                <p className="text-[0.95rem] text-ink leading-relaxed flex-1">{story.quote}</p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-white/5">
                  <span
                    className="w-[42px] h-[42px] rounded-full grid place-items-center text-white font-sora font-bold text-center flex-none"
                    style={{ backgroundColor: story.avatarBg }}
                  >
                    {story.avatarText}
                  </span>
                  <div>
                    <b className="font-sora font-semibold text-[0.9rem] text-ink block leading-snug">
                      {story.name}
                    </b>
                    <span className="text-[0.8rem] text-muted block mt-0.5">{story.role}</span>
                  </div>
                </div>
                <Link href="/stories" className="text-[#6ED190] font-semibold text-[0.85rem] font-sora mt-auto block hover:underline">
                  Read the story &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
