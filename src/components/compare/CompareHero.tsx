import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function CompareHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Compare</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Squeako vs the tools you're <span className="text-[#D9E38A]">probably overpaying for.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          One app instead of three or four — at a price built for India. Here's how Squeako stacks up.
        </p>
      </div>
    </div>
  );
}
