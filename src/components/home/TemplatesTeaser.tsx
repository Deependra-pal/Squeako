import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import TemplateCard from '../shared/TemplateCard';
import Button from '../shared/Button';

export default function TemplatesTeaser() {
  const templates = [
    {
      topBg: '#436B56',
      title: 'Sales team',
      desc: 'Pipeline channel, deal rooms, follow-up tasks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      topBg: '#16D196',
      title: 'Customer support',
      desc: 'Client rooms, escalations, shared notes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      topBg: '#F5B544',
      title: 'Agency & clients',
      desc: 'A guest room per client, plus internal channels.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      topBg: '#F0506E',
      title: 'Engineering',
      desc: 'Standups, incidents, code-review tasks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Start in seconds</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Set up faster with a template
            </h2>
            <p className="text-[1.1rem] text-muted">
              Pre-built workspaces with the right channels, groups and tasks for your kind of team.
            </p>
          </div>

          {/* Grid list of template cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((tmpl) => (
              <TemplateCard
                key={tmpl.title}
                topBg={tmpl.topBg}
                icon={tmpl.icon}
                title={tmpl.title}
                description={tmpl.desc}
              />
            ))}
          </div>

          {/* Browse all templates button */}
          <div className="text-center mt-6">
            <Button href="/templates" variant="ghost" className="group">
              Browse all templates
              <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
