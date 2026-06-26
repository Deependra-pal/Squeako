import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function IntegrationsTeaser() {
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
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Plays well with others</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Works with the tools you already use
            </h2>
          </div>

          {/* Chips Row */}
          <div className="flex flex-wrap justify-center gap-3.5 mb-6">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="flex items-center gap-[10px] bg-white border border-hairline rounded-[13px] py-3 px-5 font-sora font-semibold text-[0.92rem] shadow-sh-sm hover:-translate-y-[3px] transition-all duration-200"
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
    </div>
  );
}
