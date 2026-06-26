import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function EnterpriseHero() {
  return (
    <div className="bg-page-hero-bg py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Enterprise</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] text-ink mt-[14px] mb-[16px] leading-[1.12] tracking-[-0.02em]">
          Team communication that <span className="bg-grad bg-clip-text text-transparent">scales with you.</span>
        </h1>
        <p className="text-[1.14rem] text-muted max-w-[620px] mx-auto leading-relaxed mb-6">
          The security, control and support large and regulated Indian organisations need — without losing the simplicity your team loves.
        </p>
        <Button href="/contact" size="lg" variant="primary">
          Talk to sales
        </Button>
      </div>
    </div>
  );
}
