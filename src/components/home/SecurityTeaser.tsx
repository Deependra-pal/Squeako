import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

export default function SecurityTeaser() {
  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Safe & in India</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Security your compliance team will like
            </h2>
            <p className="text-[1.1rem] text-muted">
              Encryption in transit and at rest, data hosted in India, DPDP-ready, admin controls, audit logs and SSO.
            </p>
          </div>

          {/* Badges Center Row */}
          <div className="flex flex-wrap justify-center gap-2 mb-[22px]">
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

          <div className="text-center">
            <Button href="/security" variant="ghost" className="group">
              Read about security
              <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
