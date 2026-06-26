import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function SecurityGrid() {
  const cards = [
    {
      title: 'Data stored in India',
      desc: 'Your workspace data lives in Indian data centres, so you always know where it resides.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Encryption in transit & at rest',
      desc: 'Every message, call and file is encrypted on the way to us and while stored.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'DPDP-ready by design',
      desc: "Built to align with India's Digital Personal Data Protection Act.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: 'Admin controls & roles',
      desc: 'Decide who can do what, manage members and control guest access.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Audit logs',
      desc: 'On Business and Enterprise, keep a clear record of key actions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'SSO & single sign-on',
      desc: 'Enterprise teams connect SSO and SAML for secure sign-in.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[23px] h-[23px]">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
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

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
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
    </div>
  );
}
