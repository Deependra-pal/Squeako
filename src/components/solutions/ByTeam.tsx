import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ByTeam() {
  const teams = [
    {
      title: 'Founders',
      desc: 'Run the whole company from one app — chat, calls, hiring, ops.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
        </svg>
      ),
    },
    {
      title: 'Sales',
      desc: 'Chat with prospects, hop on calls, assign follow-ups, close faster.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      title: 'Marketing',
      desc: 'Plan campaigns in channels, share assets, keep sales in the loop.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      title: 'Engineering',
      desc: 'Standups, code reviews and incident calls — all in one place.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'Customer Support',
      desc: 'Client rooms, screen share and searchable history for every ticket.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'HR & Ops',
      desc: 'Onboard with the org chart, run polls, send reminders.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>By team</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              Built for your department
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teams.map((team, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-[15px] p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-sh-md hover:border-[#d8d1f5] flex flex-col items-start"
              >
                <div className="w-[42px] h-[42px] rounded-[11px] bg-violet-soft grid place-items-center text-violet mb-[13px]">
                  {team.icon}
                </div>
                <b className="font-sora font-bold text-[1.02rem] block mb-[5px] text-ink">{team.title}</b>
                <span className="text-[0.85rem] text-muted">{team.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
