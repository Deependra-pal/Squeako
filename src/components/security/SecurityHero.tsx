import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function SecurityHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Security & privacy</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Your conversations, <span className="bg-grad bg-clip-text text-transparent">kept safe and in India.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Built so Indian businesses never have to choose between an app their team loves and the security their compliance needs.
        </p>
      </div>
    </div>
  );
}
