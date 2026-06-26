import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ByIndustry() {
  const industries = [
    {
      title: 'IT & Software',
      desc: 'Ship faster with standups, reviews and incident calls in one app.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'D2C & Retail',
      desc: 'Coordinate ops, suppliers and support across stores and warehouses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      title: 'Fintech',
      desc: 'Data in India and DPDP-readiness make compliance straightforward.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      title: 'Agencies',
      desc: 'Spin up a client room per account with guest access.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      title: 'Education',
      desc: 'Connect staff, faculty and departments without the per-seat shock.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      ),
    },
    {
      title: 'Logistics',
      desc: 'Keep field, hub and office teams in sync on mobile.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
          <rect x="1" y="3" width="15" height="13" />
          <path d="M16 8h4l3 3v5h-7" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDEDE3] to-[#F8DAC4] border border-[#F2DDC9] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>By industry</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              Fits your business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-[15px] p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-sh-md hover:border-[#d8d1f5] flex flex-col items-start"
              >
                <div className="w-[42px] h-[42px] rounded-[11px] bg-violet-soft grid place-items-center text-violet mb-[13px]">
                  {ind.icon}
                </div>
                <b className="font-sora font-bold text-[1.02rem] block mb-[5px] text-ink">{ind.title}</b>
                <span className="text-[0.85rem] text-muted">{ind.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
