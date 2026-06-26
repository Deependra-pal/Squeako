import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function AboutHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>About Squeako</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Indian teams deserve <span className="bg-grad bg-clip-text text-transparent">better tools, not bigger bills.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Squeako was built on a simple belief: your team's communication shouldn't cost a fortune or live on the other side of the world.
        </p>
      </div>
    </div>
  );
}
