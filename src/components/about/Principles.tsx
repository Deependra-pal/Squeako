import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function Principles() {
  const principles = [
    {
      title: 'Fair pricing, always',
      desc: "Good tools shouldn't be a luxury. We price for the team buying it, not the team next door.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Rooted in India',
      desc: 'Local data, local support, local payment methods. We build for the realities of doing business here.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Simple over clever',
      desc: "If your team needs a manual to chat, we've failed. Everything should feel obvious the first time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: 'Boringly reliable',
      desc: "The best communication tool is the one you never think about. We sweat uptime so you don't.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              Our principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p, idx) => (
              <div key={idx} className="flex gap-[15px] items-start bg-white border border-hairline rounded-[16px] p-[22px]">
                <div className="w-[42px] h-[42px] rounded-[11px] bg-violet-soft grid place-items-center text-violet flex-none">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-[1.04rem] mb-[5px] text-ink">{p.title}</h4>
                  <p className="text-muted text-[0.91rem] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
