import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function EnterpriseGrid() {
  const cards = [
    {
      title: 'SSO, SAML & SCIM',
      desc: 'Single sign-on and automated user provisioning with the identity provider you already use.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: '99.9% uptime SLA',
      desc: 'A contractual uptime commitment with priority status and proactive incident updates.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
    },
    {
      title: 'Dedicated success manager',
      desc: 'A named contact for rollout, training and ongoing help — plus 24×7 priority support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'DPDP & ISO support',
      desc: 'Data residency in India, audit logs, and documentation to satisfy your compliance team.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Advanced admin & roles',
      desc: 'Granular roles, custom retention and storage, and organisation-wide controls.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Procurement-friendly',
      desc: 'Annual invoicing in INR, custom contracts, and a smooth security review process.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  const badges = [
    {
      label: 'DPDP-ready',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: 'ISO 27001',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      label: 'SOC 2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      label: 'Data in India',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  const metrics = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24×7', label: 'Priority support' },
    { value: 'SSO', label: 'SAML & SCIM' },
    { value: 'India', label: 'Data residency' },
  ];

  return (
    <div className="py-[13px]">
      {/* Built for Scale Section */}
      <div className="max-w-[1200px] mx-auto px-[22px] reveal mb-8">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Built for scale</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              Everything in Business, and then some
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-[16px] p-[22px] transition-all duration-200 hover:-translate-y-1 hover:shadow-sh-md flex flex-col items-start"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-violet-soft grid place-items-center text-violet mb-[14px]">
                  {card.icon}
                </div>
                <h4 className="font-sora font-bold text-[1rem] mb-[6px] text-ink">{card.title}</h4>
                <p className="text-muted text-[0.92rem] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-[30px]">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-[7px] bg-lilac rounded-full py-[6px] px-[13px] text-[0.78rem] font-semibold text-violet font-sora"
              >
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Metrics Box (To handle SSO and non-numeric labels gracefully) */}
      <div className="max-w-[1200px] mx-auto px-[22px] reveal mb-8">
        <div className="bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">
          <div className="absolute top-[-120px] right-[-90px] w-[400px] h-[400px] rounded-full bg-radial from-[#6ED190]/22 to-transparent z-0 pointer-events-none"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 text-center z-10 relative">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-center">
                {idx === 0 ? (
                  <div
                    className="font-sora font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#6ED190] leading-none"
                    data-count="99"
                    data-suffix=".9%"
                  >
                    0
                  </div>
                ) : (
                  <div className="font-sora font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#6ED190] leading-none">
                    {metric.value}
                  </div>
                )}
                <div className="text-[0.92rem] text-muted-lt font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
