import React from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';

export default function StoriesTeaser() {
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
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Real results</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Teams that made the switch
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-white border border-hairline rounded-2xl p-6 flex flex-col gap-3.5 hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200"
              >
                <div className="font-sora font-extrabold text-[1.7rem] bg-grad bg-clip-text text-transparent leading-[1.1] w-fit">
                  {story.metric}
                </div>
                <p className="text-[0.95rem] text-ink leading-relaxed flex-1">{story.quote}</p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-paper">
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
