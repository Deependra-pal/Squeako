import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function PricingTable() {
  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Compare plans</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              What's in each plan
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[16px] border border-hairline shadow-sh-sm">
            <table className="w-full border-collapse min-w-[680px] bg-white">
              <thead>
                <tr>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Feature
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Free
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#16D196] text-[#0B1818]">
                    Growth
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Business
                  </th>
                  <th className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-sora font-bold bg-[#fcfbff] text-[#0B1818]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Messaging Group */}
                <tr>
                  <td colSpan={5} className="p-[15px_17px] text-left border-b border-hairline text-[0.66rem] font-space-mono tracking-[0.1em] uppercase text-muted bg-[#fcfbff]">
                    Messaging
                  </td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Members</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Up to 10</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">Unlimited</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Unlimited</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Unlimited</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Message history</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">90 days</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">Unlimited</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Unlimited</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Custom</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Client & guest access</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>

                {/* Meetings Group */}
                <tr>
                  <td colSpan={5} className="p-[15px_17px] text-left border-b border-hairline text-[0.66rem] font-space-mono tracking-[0.1em] uppercase text-muted bg-[#fcfbff]">
                    Meetings
                  </td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Group video</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Up to 8</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">Up to 50</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Up to 200</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Custom</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Recurring meetings</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Recording & transcripts</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>

                {/* Admin & Security Group */}
                <tr>
                  <td colSpan={5} className="p-[15px_17px] text-left border-b border-hairline text-[0.66rem] font-space-mono tracking-[0.1em] uppercase text-muted bg-[#fcfbff]">
                    Admin & security
                  </td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Advanced admin & roles</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">Basic</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Audit logs</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">SSO / SAML</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-[#c9c3dd]">—</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-mint-deep font-black">✓</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Storage / user</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">5 GB</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">50 GB</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">250 GB</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Custom</td>
                </tr>
                <tr className="group hover:bg-[#0B1818] transition-colors">
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] font-semibold font-sora text-ink">Support</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Email</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] bg-mint-wash group-hover:bg-[#123628] font-semibold text-ink transition-colors">IST chat</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">Priority + WhatsApp</td>
                  <td className="p-[15px_17px] text-left border-b border-hairline text-[0.93rem] text-ink">24×7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
