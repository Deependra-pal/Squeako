import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function PricingTeaser() {
  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm text-center">
          <Eyebrow>Simple, honest pricing</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Start free. Upgrade when you grow.
          </h2>
          <p className="text-[1.16rem] text-muted max-w-[560px] mx-auto mb-[26px]">
            Plans that scale with your team — and never cost more than they should.
          </p>
          <Button href="/pricing" variant="primary" size="lg">
            See full pricing & plans
          </Button>
        </div>
      </div>
    </div>
  );
}
