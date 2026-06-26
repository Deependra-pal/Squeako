import React from 'react';
import Button from '../shared/Button';

export default function IntegrationsGrid() {
  const integrations = [
    { name: 'Google Calendar', desc: 'Meetings & reminders', icon: 'G' },
    { name: 'Google Drive', desc: 'Share files inline', icon: 'D' },
    { name: 'Gmail', desc: 'Turn mail into tasks', icon: 'M' },
    { name: 'Zapier', desc: 'Automate anything', icon: 'Z' },
    { name: 'Trello', desc: 'Card updates in chat', icon: 'T' },
    { name: 'Jira', desc: 'Issue notifications', icon: 'J' },
    { name: 'GitHub', desc: 'PRs & commits', icon: '🐙' },
    { name: 'Razorpay', desc: 'Payment alerts', icon: 'R' },
    { name: 'Asana', desc: 'Task sync', icon: 'A' },
    { name: 'Salesforce', desc: 'Lead alerts', icon: 'S' },
    { name: 'Notion', desc: 'Doc links', icon: 'N' },
    { name: 'Webhooks & API', desc: 'Build your own', icon: '+' },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-[13px] p-[18px] flex gap-[13px] items-start transition-all duration-200 hover:-translate-y-[3px] hover:shadow-sh-sm"
              >
                <span className="w-[38px] h-[38px] rounded-[10px] bg-violet-soft text-violet grid place-items-center flex-none text-[1.1rem] font-bold font-sora">
                  {item.icon}
                </span>
                <div>
                  <b className="font-sora font-semibold text-[0.94rem] block mb-[2px] text-ink">{item.name}</b>
                  <span className="text-[0.8rem] text-muted">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-[26px]">
            <Button href="/contact" variant="ghost" className="group">
              Request an integration{' '}
              <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
