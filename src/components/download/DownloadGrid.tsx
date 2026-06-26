import React from 'react';
import Button from '../shared/Button';

export default function DownloadGrid() {
  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[46px] items-center">
            {/* Download Links */}
            <div>
              <div className="flex flex-wrap gap-[13px] mb-6">
                <a href="#download" className="inline-flex items-center gap-[11px] bg-ink text-white py-[11px] px-5 rounded-[13px] transition-transform duration-180 hover:-translate-y-[3px]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] flex-none">
                    <path d="M3 20.5V3.5c0-.4.2-.7.5-.9l11 9-11 9c-.3-.2-.5-.5-.5-1.1zM16.8 14.3l-2.3-1.3L5.6 22l11.2-6.5zM20.5 11l-2.7-1.6-2.5 2.6 2.5 2.6L20.5 13c.7-.4.7-1.6 0-2zM5.6 2l8.9 9-2.3 1.3L5.6 2z" />
                  </svg>
                  <div className="leading-tight">
                    <small className="text-[0.66rem] opacity-80 block">GET IT ON</small>
                    <b className="font-sora text-[1rem] font-semibold">Google Play</b>
                  </div>
                </a>
                <a href="#download" className="inline-flex items-center gap-[11px] bg-ink text-white py-[11px] px-5 rounded-[13px] transition-transform duration-180 hover:-translate-y-[3px]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] flex-none">
                    <path d="M16.5 1.3c.1 1-.3 2-.9 2.7-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 .9-2.6.7-.8 1.8-1.3 2.7-1.4zM19.8 17.3c-.5 1.2-.8 1.7-1.5 2.7-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.6 0-2.8-1.5-3.8-2.9C2.8 16.2 2.5 11.5 4.2 9c.9-1.3 2.4-2.2 3.8-2.2 1.4 0 2.3 1 3.5 1 1.1 0 1.8-1 3.5-1 1.2 0 2.5.7 3.5 1.8-3 1.7-2.5 6 .8 7.7z" />
                  </svg>
                  <div className="leading-tight">
                    <small className="text-[0.66rem] opacity-80 block">Download on the</small>
                    <b className="font-sora text-[1rem] font-semibold">App Store</b>
                  </div>
                </a>
              </div>
              <p className="text-[1.16rem] text-muted leading-relaxed mb-[18px]">
                Prefer the browser? Open Squeako on the web and you're in — no install needed.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                Open Squeako on web
              </Button>
            </div>

            {/* Visual Phone Mockup replaced with hero image */}
            <div className="flex items-center justify-center">
              <img
                src="/home/hero.png"
                alt="Squeako Chat Screenshot"
                className="w-full max-w-[320px] rounded-[24px] shadow-sh-lg border border-hairline object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
