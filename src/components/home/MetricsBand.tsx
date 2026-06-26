import React from 'react';

export default function MetricsBand() {
  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col gap-1 text-center">
              <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none" data-count="8000" data-suffix="+">
                0
              </div>
              <div className="text-muted-lt text-[0.92rem] mt-1.5">Teams on Squeako</div>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none" data-count="30" data-suffix="+">
                0
              </div>
              <div className="text-muted-lt text-[0.92rem] mt-1.5">Countries</div>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none" data-count="99" data-suffix=".9%">
                0
              </div>
              <div className="text-muted-lt text-[0.92rem] mt-1.5">Uptime</div>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none">
                ₹2Cr+
              </div>
              <div className="text-muted-lt text-[0.92rem] mt-1.5">Saved by customers / yr</div>
            </div>
          </div>
          <p className="text-center text-[0.82rem] mt-6" style={{ color: 'var(--muted-lt)' }}>
            Illustrative figures for this prototype.
          </p>
        </div>
      </div>
    </div>
  );
}
