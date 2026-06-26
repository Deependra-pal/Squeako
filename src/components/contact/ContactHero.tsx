import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ContactHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Get started</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Let's get your team <span className="bg-grad bg-clip-text text-transparent">on Squeako.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Start a free workspace or book a quick demo. Tell us a little about your team and we'll take it from there.
        </p>
      </div>
    </div>
  );
}
