import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';

export default function OrganiseSection() {
  const features = [
    {
      title: 'Tasks',
      desc: 'From any message, assigned and tracked.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4" />
        </svg>
      ),
    },
    {
      title: 'Presence',
      desc: 'Online, away, busy, in-meeting, on-break.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Org hierarchy',
      desc: 'A live reporting chart for the company.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v4M12 12H5v4M12 12h7v4" />
        </svg>
      ),
    },
    {
      title: 'Polls & reminders',
      desc: 'Decide together, nudge anyone.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Organise</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Stay on top of everything
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <FeatureCard key={feat.title} icon={feat.icon} title={feat.title} description={feat.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
