import React from 'react';

export default function RoadmapGrid() {
  const shipped = [
    { title: 'Recurring meetings', desc: 'Schedule once, remind every time.' },
    { title: "On-break presence", desc: "Let your team know you're away." },
    { title: 'Android & iOS apps', desc: 'Full experience on mobile.' },
    { title: 'Guest access for clients', desc: 'Share only what you choose.' },
  ];

  const inProgress = [
    { title: 'AI meeting recaps', desc: 'Auto-summaries after every call.' },
    { title: 'Advanced analytics', desc: 'Usage insights for admins.' },
    { title: 'More integrations', desc: 'Calendar, CRM and helpdesk.' },
  ];

  const planned = [
    { title: 'Workflow automations', desc: 'Trigger tasks and messages.' },
    { title: 'SCIM provisioning', desc: 'For larger enterprises.' },
    { title: 'Custom themes', desc: 'Make your workspace yours.' },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {/* Shipped Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sora font-semibold text-[1rem] mb-2.5 flex items-center gap-2 text-ink">
                <span className="w-2.5 h-2.5 rounded-full bg-mint"></span>Shipped
              </h4>
              {shipped.map((item, idx) => (
                <div key={idx} className="bg-white border border-hairline rounded-[12px] p-[14px_16px] hover:shadow-sh-sm transition-all duration-200">
                  <b className="font-sora font-semibold text-[0.9rem] block mb-[3px] text-ink">{item.title}</b>
                  <span className="text-[0.82rem] text-muted">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* In Progress Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sora font-semibold text-[1rem] mb-2.5 flex items-center gap-2 text-ink">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5B544]"></span>In progress
              </h4>
              {inProgress.map((item, idx) => (
                <div key={idx} className="bg-white border border-hairline rounded-[12px] p-[14px_16px] hover:shadow-sh-sm transition-all duration-200">
                  <b className="font-sora font-semibold text-[0.9rem] block mb-[3px] text-ink">{item.title}</b>
                  <span className="text-[0.82rem] text-muted">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Planned Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sora font-semibold text-[1rem] mb-2.5 flex items-center gap-2 text-ink">
                <span className="w-2.5 h-2.5 rounded-full bg-violet"></span>Planned
              </h4>
              {planned.map((item, idx) => (
                <div key={idx} className="bg-white border border-hairline rounded-[12px] p-[14px_16px] hover:shadow-sh-sm transition-all duration-200">
                  <b className="font-sora font-semibold text-[0.9rem] block mb-[3px] text-ink">{item.title}</b>
                  <span className="text-[0.82rem] text-muted">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
