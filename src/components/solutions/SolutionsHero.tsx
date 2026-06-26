import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function SolutionsHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          One app, <span className="bg-grad bg-clip-text text-transparent">every team.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          However your teams work, Squeako fits the way they already think — by department and by industry.
        </p>
      </div>
    </div>
  );
}
