import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function PricingTeaser() {
  return (
    <div className="bg-pricing-section py-24 md:py-32 px-0 relative overflow-hidden">
      {/* Background glow behind centered panel */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.18) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-8 reveal relative z-10">
        <div className="glass-panel rounded-[30px] p-[clamp(34px,5vw,68px)] text-center relative overflow-hidden">
          <Eyebrow>Simple, honest pricing</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-4 mb-4 leading-tight text-ink">
            Start free. Upgrade when you grow.
          </h2>
          <p className="text-[1.14rem] text-muted max-w-[560px] mx-auto mb-[32px] leading-relaxed">
            Plans that scale with your team — and never cost more than they should.
          </p>
          <Button href="/pricing" variant="primary" size="lg" className="shadow-glow">
            See full pricing & plans
          </Button>
        </div>
      </div>
    </div>
  );
}
