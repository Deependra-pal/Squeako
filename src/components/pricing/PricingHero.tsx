import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function PricingHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Pricing that respects <span className="bg-grad bg-clip-text text-transparent">a startup budget.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Start free forever. Upgrade only when your team grows. No hidden fees, no dollar surprises — all in ₹, with GST.
        </p>
      </div>
    </div>
  );
}
