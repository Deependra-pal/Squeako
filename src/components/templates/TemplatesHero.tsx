import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function TemplatesHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Templates</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Start fast with a <span className="bg-grad bg-clip-text text-transparent">ready-made workspace.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Pick a template and get the right channels, groups and tasks set up in one click.
        </p>
      </div>
    </div>
  );
}
