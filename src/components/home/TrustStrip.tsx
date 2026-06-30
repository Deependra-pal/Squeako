import React from 'react';
import Badge from '../shared/Badge';

export default function TrustStrip() {
  return (
    <div className="bg-trust-section py-12 md:py-16 px-0">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8">
        <div className="text-center reveal">
          <p className="font-space-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted mb-[18px]">
            Trusted by growing teams across India
          </p>
          <div className="relative w-full overflow-hidden py-4 my-4 marquee-container">
            {/* Fading side overlays */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-20 animate-marquee whitespace-nowrap cursor-pointer">
              {[
                'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate',
                'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate',
                'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate',
                'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate'
              ].map((logo, index) => (
                <span
                  key={index}
                  className="flex items-center gap-4.5 font-sora font-bold text-[1.75rem] text-[#9690ad] opacity-85 shrink-0"
                >
                  <span className="w-8 h-8 rounded-[8px] bg-[#d7d2ea] shrink-0"></span>
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-[10px] mb-[14px]">
            {[
              { score: '4.8', source: 'on G2' },
              { score: '4.7', source: 'on Capterra' },
              { score: '4.6', source: 'on Google' },
            ].map((rating) => (
              <span
                key={rating.source}
                className="inline-flex items-center gap-[8px] bg-white border border-hairline rounded-full py-[7px] px-[15px] shadow-sh-sm text-[0.85rem] font-semibold text-ink"
              >
                <span className="text-[#F5B544]">★</span>
                <b className="font-sora">{rating.score}</b>
                <span className="text-muted font-medium">{rating.source}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            >
              DPDP-ready
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            >
              ISO 27001
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            >
              SOC 2
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                </svg>
              }
            >
              Data in India
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
