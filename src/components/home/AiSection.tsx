import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function AiSection() {
  const points = [
    {
      title: 'Catch-up recaps',
      desc: 'Back from leave or a long meeting? Get a clean summary of what you missed in any group or call.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 13h6M9 17h4" />
        </svg>
      ),
    },
    {
      title: 'Smart replies & rewrite',
      desc: 'Draft a reply, fix the tone, or translate a message in a tap — so you sound clear, every time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Ask your workspace',
      desc: '"Where did we land on pricing?" Squeako AI searches across chats, files and meetings — and your connected apps — to answer.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">
          {/* Background circle decoration */}
          <div className="absolute -top-[120px] -right-[90px] w-[400px] h-[400px] rounded-full bg-radial from-[#6ED190]/22 to-transparent z-0 pointer-events-none"></div>

          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center relative z-10">
            <Eyebrow light>Meet Squeako AI</Eyebrow>
            <h2 className="text-white text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight">
              An AI teammate inside every chat
            </h2>
            <p className="text-[1.1rem] text-muted-lt">
              Catch up in seconds, reply faster, and find anything across your workspace — without leaving the conversation.
            </p>
          </div>

          {/* Grid list of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {points.map((item) => (
              <div
                key={item.title}
                className="bg-white/6 border border-white/10 rounded-2xl p-6 shadow-sh-sm hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 text-white grid place-items-center mb-4 flex-none">
                  <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
                </div>
                <h4 className="font-sora font-semibold text-lg text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-muted-lt text-[0.9rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
