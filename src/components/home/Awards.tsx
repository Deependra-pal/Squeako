import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function Awards() {
  const awardsList = [
    { rating: '4.8 / 5', text: 'G2 LEADER 2026' },
    { rating: '4.7 / 5', text: 'CAPTERRA' },
    { rating: 'HIGH PERFORMER', text: 'SMB · 2026' },
    { rating: '4.6 / 5', text: 'GETAPP' },
    { rating: 'EASIEST TO USE', text: 'INDIA · 2026' },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] pt-[clamp(28px,4vw,44px)] pb-[clamp(28px,4vw,44px)] px-[clamp(34px,5vw,68px)]">
          <div className="max-w-[850px] mx-auto mb-[28px] text-center">
            <Eyebrow>Recognised by reviewers</Eyebrow>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Teams rate us highly
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-[14px]">
            {awardsList.map((aw, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-[6px] bg-white border border-hairline rounded-[14px] py-4 px-[22px] shadow-sh-sm min-w-[118px] text-ink hover:-translate-y-0.5 hover:shadow-sh-md transition-all duration-200"
              >
                <span className="text-[#F5B544] text-[0.85rem] font-bold">★★★★★</span>
                <b className="font-sora font-bold text-[0.9rem] leading-none text-ink">{aw.rating}</b>
                <span className="text-[0.7rem] text-muted font-space-mono tracking-[0.03em] text-center uppercase mt-0.5">
                  {aw.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
