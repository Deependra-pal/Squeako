import React, { useState } from 'react';
import Button from '../shared/Button';

export default function PricingGrid() {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-[14px] mb-3">
              <span className={`font-sora font-semibold text-[0.95rem] transition-colors duration-200 ${!isAnnual ? 'text-[#16D196]' : 'text-muted'}`}>
                Monthly
              </span>
              <button
                type="button"
                className={`relative w-[56px] h-[30px] rounded-full cursor-pointer border-0 flex-none transition-colors duration-200 ${
                  isAnnual ? 'bg-[#D9E38A]' : 'bg-[#16D196]'
                }`}
                aria-label="Toggle billing"
                onClick={toggleBilling}
              >
                <span
                  className={`absolute top-[3px] left-[3px] w-[24px] h-[24px] bg-white rounded-full transition-transform duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.2)] ${
                    isAnnual ? 'translate-x-[26px]' : 'translate-x-0'
                  }`}
                ></span>
              </button>
              <span className={`font-sora font-semibold text-[0.95rem] transition-colors duration-200 ${isAnnual ? 'text-[#D9E38A]' : 'text-muted'}`}>
                Annual
              </span>
            </div>
            <span className="inline-block bg-mint-wash text-mint-deep font-space-mono text-[0.72rem] font-bold py-[5px] px-[11px] rounded-full mb-[30px]">
              Save 2 months with annual billing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {/* Plan 1: Free */}
            <div className="bg-white border border-hairline rounded-[18px] py-[26px] px-[22px] flex flex-col relative hover:-translate-y-1.5 hover:border-[#16D196] hover:shadow-[0_24px_60px_rgba(22,209,150,0.32)] transition-all duration-300">
              <div className="font-sora font-bold text-[1.18rem] text-ink">Free</div>
              <div className="text-[0.85rem] text-muted mt-[6px] mb-[16px] min-h-[38px]">
                For tiny teams getting started.
              </div>
              <div className="flex items-baseline gap-[3px] mb-1">
                <span className="font-sora font-bold text-[1.25rem] text-ink">₹</span>
                <span className="font-sora font-extrabold text-[2.5rem] leading-none text-ink">0</span>
              </div>
              <div className="text-[0.78rem] text-muted mb-[18px] min-h-[18px]">
                Free forever · up to 10 members
              </div>
              <Button href="/contact" variant="ghost" className="w-full mb-5">
                Start free
              </Button>
              <ul className="flex flex-col gap-[10px]">
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Up to 10 members
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  1:1 & group chats
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Audio & video (up to 8)
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Basic tasks & status
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  90-day history
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  5 GB storage
                </li>
              </ul>
            </div>

            {/* Plan 2: Growth */}
            <div
              className="border-2 border-[#16D196] rounded-[18px] py-[26px] px-[22px] flex flex-col relative shadow-[0_20px_50px_rgba(22,209,150,0.16)] hover:shadow-[0_24px_60px_rgba(22,209,150,0.32)] hover:-translate-y-1.5 transition-all duration-300"
              style={{ background: 'linear-gradient(150deg, #16523f 0%, #0b2c22 100%)' }}
            >
              <span className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#16D196] text-[#090D0C] font-space-mono text-[0.66rem] font-bold tracking-[0.1em] py-[6px] px-[14px] rounded-full whitespace-nowrap">
                MOST POPULAR
              </span>
              <div className="font-sora font-bold text-[1.18rem] text-ink">Growth</div>
              <div className="text-[0.85rem] text-muted mt-[6px] mb-[16px] min-h-[38px]">
                For growing startups & SMBs.
              </div>
              <div className="flex items-baseline gap-[3px] mb-1">
                <span className="font-sora font-bold text-[1.25rem] text-ink">₹</span>
                <span className="font-sora font-extrabold text-[2.5rem] leading-none text-ink">{isAnnual ? '99' : '129'}</span>
                <span className="text-[0.8rem] text-muted font-medium ml-1">/user / mo</span>
              </div>
              <div className="text-[0.78rem] text-muted mb-[18px] min-h-[18px]">
                {isAnnual ? 'billed annually' : 'billed monthly'}
              </div>
              <Button href="/contact" variant="primary" className="w-full mb-5">
                Start free trial
              </Button>
              <ul className="flex flex-col gap-[10px]">
                <li className="font-space-mono text-[0.66rem] tracking-[0.08em] uppercase text-muted mt-1">
                  Everything in Free, plus
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Unlimited members & history
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Group video up to 50
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Recurring meetings & reminders
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Org hierarchy & client guests
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Screen share, voice/video messages
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  50 GB/user · IST support
                </li>
              </ul>
            </div>

            {/* Plan 3: Business */}
            <div className="bg-white border border-hairline rounded-[18px] py-[26px] px-[22px] flex flex-col relative hover:-translate-y-1.5 hover:border-[#16D196] hover:shadow-[0_24px_60px_rgba(22,209,150,0.32)] transition-all duration-300">
              <div className="font-sora font-bold text-[1.18rem] text-ink">Business</div>
              <div className="text-[0.85rem] text-muted mt-[6px] mb-[16px] min-h-[38px]">
                For established teams needing control.
              </div>
              <div className="flex items-baseline gap-[3px] mb-1">
                <span className="font-sora font-bold text-[1.25rem] text-ink">₹</span>
                <span className="font-sora font-extrabold text-[2.5rem] leading-none text-ink">{isAnnual ? '199' : '249'}</span>
                <span className="text-[0.8rem] text-muted font-medium ml-1">/user / mo</span>
              </div>
              <div className="text-[0.78rem] text-muted mb-[18px] min-h-[18px]">
                {isAnnual ? 'billed annually' : 'billed monthly'}
              </div>
              <Button href="/contact" variant="ghost" className="w-full mb-5">
                Choose Business
              </Button>
              <ul className="flex flex-col gap-[10px]">
                <li className="font-space-mono text-[0.66rem] tracking-[0.08em] uppercase text-muted mt-1">
                  Everything in Growth, plus
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Group video up to 200
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Recording & transcripts
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Advanced admin & roles
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Analytics & audit logs
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  India data residency
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  250 GB/user · priority + WhatsApp
                </li>
              </ul>
            </div>

            {/* Plan 4: Enterprise */}
            <div className="bg-white border border-hairline rounded-[18px] py-[26px] px-[22px] flex flex-col relative hover:-translate-y-1.5 hover:border-[#16D196] hover:shadow-[0_24px_60px_rgba(22,209,150,0.32)] transition-all duration-300">
              <div className="font-sora font-bold text-[1.18rem] text-ink">Enterprise</div>
              <div className="text-[0.85rem] text-muted mt-[6px] mb-[16px] min-h-[38px]">
                For large & compliance-heavy orgs.
              </div>
              <div className="flex items-baseline gap-[3px] mb-1">
                <span className="font-sora font-extrabold text-[2rem] leading-none text-ink">Custom</span>
              </div>
              <div className="text-[0.78rem] text-muted mb-[18px] min-h-[18px]">
                tailored to your needs
              </div>
              <Button href="/contact" variant="ghost" className="w-full mb-5">
                Talk to sales
              </Button>
              <ul className="flex flex-col gap-[10px]">
                <li className="font-space-mono text-[0.66rem] tracking-[0.08em] uppercase text-muted mt-1">
                  Everything in Business, plus
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  SSO / SAML & SCIM
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  DPDP & ISO compliance support
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Dedicated success manager
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  99.9% uptime SLA
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  Custom retention & storage
                </li>
                <li className="flex gap-[9px] items-start text-[0.87rem] text-ink">
                  <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep flex-none text-[0.66rem] font-black mt-[2px] ">✓</span>
                  24×7 priority support
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[0.82rem] text-white mt-6 opacity-90">
            All prices are per user, per month, excluding 18% GST. Annual plans are billed yearly. Pay by UPI, net banking, debit or credit card.
          </p>
        </div>
      </div>
    </div>
  );
}
