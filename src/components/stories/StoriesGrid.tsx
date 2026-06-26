import React from 'react';

export default function StoriesGrid() {
  const stories = [
    {
      metric: '₹38k → ₹6k / mo',
      quote: '"Three tools became one. The org chart made onboarding far easier, and we cut our monthly software bill by over 80%."',
      avText: 'AS',
      avBg: '#1FA968',
      name: 'Aarav Shah',
      role: 'Founder, Kettle · Bengaluru',
    },
    {
      metric: '1 day to roll out',
      quote: '"Our field staff actually use it because the mobile app is genuinely good. Calls, meetings and chat in one place changed how we work."',
      avText: 'PM',
      avBg: '#16D196',
      name: 'Priya Menon',
      role: 'Ops Lead, Routely · Pune',
    },
    {
      metric: '60% fewer tools',
      quote: '"Data in India made the compliance conversation easy for a fintech. WhatsApp support during IST hours is a small thing that matters."',
      avText: 'RG',
      avBg: '#F0506E',
      name: 'Rahul Gupta',
      role: 'COO, Finbar · Gurugram',
    },
    {
      metric: '12 hrs/wk saved',
      quote: '"No more pasting meeting links into chat or chasing people for updates. Recurring meetings with reminders run themselves."',
      avText: 'VK',
      avBg: '#F5B544',
      name: 'Vikram K.',
      role: 'Founder, Saanjh · Jaipur',
    },
    {
      metric: '3x faster onboarding',
      quote: '"New joiners learn the team from the org chart on day one. They know who to ping without asking around."',
      avText: 'NS',
      avBg: '#16D196',
      name: 'Neha S.',
      role: 'HR Lead, Nimbus HR · Noida',
    },
    {
      metric: '100% on mobile',
      quote: '"Client rooms with guest access changed how we work with customers. They only see what we choose to share."',
      avText: 'TM',
      avBg: '#1FA968',
      name: 'Tushar M.',
      role: 'Lead, Bytecrate · Hyderabad',
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-[16px] p-6 flex flex-col gap-[14px] transition-all duration-200 hover:-translate-y-1 hover:shadow-sh-md"
              >
                <div className="font-sora font-extrabold text-[1.7rem] bg-grad bg-clip-text text-transparent leading-[1.1] w-fit">
                  {story.metric}
                </div>
                <p className="text-[0.95rem] text-ink flex-1 leading-relaxed">{story.quote}</p>
                <div className="flex items-center gap-[11px] pt-[13px] border-t border-paper">
                  <div
                    className="w-[42px] h-[42px] rounded-full grid place-items-center text-white font-sora font-bold flex-none"
                    style={{ backgroundColor: story.avBg }}
                  >
                    {story.avText}
                  </div>
                  <div>
                    <b className="block font-sora font-semibold text-[0.9rem] text-ink leading-snug">{story.name}</b>
                    <span className="text-[0.8rem] text-muted">{story.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
