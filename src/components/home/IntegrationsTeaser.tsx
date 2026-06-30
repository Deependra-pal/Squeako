import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntegrationsTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.integ-chip',
        { y: 20, opacity: 0, scale: 0.94 },
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

  const tools = [
    { letter: 'G', name: 'Google Calendar' },
    { letter: 'D', name: 'Google Drive' },
    { letter: 'M', name: 'Gmail' },
    { letter: 'Z', name: 'Zapier' },
    { letter: 'T', name: 'Trello' },
    { letter: 'J', name: 'Jira' },
    { letter: '🐙', name: 'GitHub' },
    { letter: 'R', name: 'Razorpay' },
  ];

  return (
    <div ref={containerRef} className="py-24 md:py-32 px-0 relative overflow-hidden">
      {/* Background glow decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.15) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-11 text-center">
          <Eyebrow>Plays well with others</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Works with the tools you already use
          </h2>
        </div>

        {/* Chips Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="integ-chip opacity-0 flex items-center gap-[10px] bg-white border border-hairline rounded-[13px] py-3 px-5 font-sora font-semibold text-[0.92rem] shadow-sh-sm hover:-translate-y-[3px] transition-all duration-200"
            >
              <span className="w-7 h-7 rounded-[7px] bg-[#0C281D] grid place-items-center text-[#16D196] font-extrabold text-[0.85rem] flex-none">
                {tool.letter}
              </span>
              {tool.name}
            </span>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button href="/integrations" variant="ghost" className="group">
            See all integrations
            <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
