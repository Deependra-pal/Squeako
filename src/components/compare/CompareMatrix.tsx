import React from 'react';

export default function CompareMatrix() {
  const rows = [
    {
      feature: 'Starting paid price (/user/mo)',
      sq: '₹99',
      slack: '~₹650',
      teams: '~₹770*',
      flock: '~₹385',
      isPrice: true,
    },
    {
      feature: 'Chat & group messaging',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-mint-deep font-black">✓</span>,
      teams: <span className="text-mint-deep font-black">✓</span>,
      flock: <span className="text-mint-deep font-black">✓</span>,
    },
    {
      feature: 'Audio & video calls included',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Limited</span>,
      teams: <span className="text-mint-deep font-black">✓</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Limited</span>,
    },
    {
      feature: 'Recurring meetings & reminders',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Add-on</span>,
      teams: <span className="text-mint-deep font-black">✓</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Basic</span>,
    },
    {
      feature: 'Built-in tasks',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Via apps</span>,
      teams: <span className="text-[#D9E38A] text-[0.85rem]">Planner</span>,
      flock: <span className="text-mint-deep font-black">✓</span>,
    },
    {
      feature: 'Presence incl. on-break',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Basic</span>,
      teams: <span className="text-[#D9E38A] text-[0.85rem]">Basic</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Basic</span>,
    },
    {
      feature: 'Org hierarchy chart',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#c9c3dd]">—</span>,
      teams: <span className="text-mint-deep font-black">✓</span>,
      flock: <span className="text-[#c9c3dd]">—</span>,
    },
    {
      feature: 'Client / guest access',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Paid</span>,
      teams: <span className="text-[#D9E38A] text-[0.85rem]">Paid</span>,
      flock: <span className="text-mint-deep font-black">✓</span>,
    },
    {
      feature: 'Data stored in India',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#c9c3dd]">—</span>,
      teams: <span className="text-[#D9E38A] text-[0.85rem]">Select</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Varies</span>,
    },
    {
      feature: 'GST invoice in INR',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#D9E38A] text-[0.85rem]">Reseller</span>,
      teams: <span className="text-[#D9E38A] text-[0.85rem]">Reseller</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Varies</span>,
    },
    {
      feature: 'IST chat & WhatsApp support',
      sq: <span className="text-mint-deep font-black">✓</span>,
      slack: <span className="text-[#c9c3dd]">—</span>,
      teams: <span className="text-[#c9c3dd]">—</span>,
      flock: <span className="text-[#D9E38A] text-[0.85rem]">Email</span>,
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="overflow-x-auto rounded-[16px] border border-hairline shadow-sh-sm">
            <table className="w-full border-collapse min-w-[680px] bg-white">
              <thead>
                <tr>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Feature
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#D9E38A] text-[#0B1818]">
                    Squeako
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Slack
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    MS Teams
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Flock
                  </th>
                </tr>
              </thead>
              <tbody>
                 {rows.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-[#0B1818] transition-colors">
                    <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">
                      {row.feature}
                    </td>
                    <td className={`p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] transition-colors ${
                      row.isPrice ? 'font-semibold text-ink' : ''
                    }`}>
                      {row.sq}
                    </td>
                    <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">
                      {row.slack}
                    </td>
                    <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">
                      {row.teams}
                    </td>
                    <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">
                      {row.flock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-[0.82rem] text-muted mt-6 leading-relaxed max-w-[900px] mx-auto">
            *MS Teams business chat is typically bought inside Microsoft 365 Business Standard (~₹770/user/mo). Competitor prices are indicative published figures, billed annually, before GST, 2026, and may change. Feature availability varies by plan.
          </p>
        </div>
      </div>
    </div>
  );
}
