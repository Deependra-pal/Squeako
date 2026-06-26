import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ProblemStory() {
  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">
          {/* Background circle decoration */}
          <div className="absolute -top-[120px] -right-[90px] w-[400px] h-[400px] rounded-full bg-radial from-[#6ED190]/22 to-transparent z-0 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-11 items-center">
            {/* Left Col */}
            <div>
              <Eyebrow light>The hidden tool tax</Eyebrow>
              <div className="flex flex-col gap-2.5 mb-2 mt-[18px]" data-story>
                <div className="sl-line text-muted-lt text-[1.08rem]">
                  Chat on one app. Video on another. Tasks somewhere else.
                </div>
                <div className="sl-line text-muted-lt text-[1.08rem]">
                  Five subscriptions, five logins, five invoices.
                </div>
                <div className="sl-line text-muted-lt text-[1.08rem]">
                  All billed in dollars — with no GST.
                </div>
                <div className="sl-line text-muted-lt text-[1.08rem]">
                  And your team's data lives overseas.
                </div>
              </div>
              <h2 className="text-white text-[clamp(1.7rem,3.4vw,2.4rem)] font-sora font-extrabold mt-4 mb-3.5 leading-tight">
                You're paying a tax just to talk to your own team.
              </h2>
              <div className="text-mint font-bold font-sora text-[0.95rem] mt-3.5">
                There's a simpler way &darr;
              </div>
            </div>

            {/* Right Col */}
            <div>
              <div className="bg-white/6 border border-white/14 rounded-[18px] p-[22px]">
                <div className="flex items-center justify-between py-[11px] px-0 border-b border-white/10">
                  <div className="flex items-center gap-[11px] text-white font-medium text-[0.95rem]">
                    <span className="w-8 h-8 rounded-[9px] bg-white/12 grid place-items-center text-[0.95rem]">💬</span>
                    Chat app
                  </div>
                  <div className="font-sora font-semibold text-muted-lt">₹250/user</div>
                </div>
                <div className="flex items-center justify-between py-[11px] px-0 border-b border-white/10">
                  <div className="flex items-center gap-[11px] text-white font-medium text-[0.95rem]">
                    <span className="w-8 h-8 rounded-[9px] bg-white/12 grid place-items-center text-[0.95rem]">📹</span>
                    Video meetings
                  </div>
                  <div className="font-sora font-semibold text-muted-lt">₹200/user</div>
                </div>
                <div className="flex items-center justify-between py-[11px] px-0 border-b border-white/10">
                  <div className="flex items-center gap-[11px] text-white font-medium text-[0.95rem]">
                    <span className="w-8 h-8 rounded-[9px] bg-white/12 grid place-items-center text-[0.95rem]">✅</span>
                    Task tracker
                  </div>
                  <div className="font-sora font-semibold text-muted-lt">₹180/user</div>
                </div>
                <div className="flex items-center justify-between py-[11px] px-0 last:border-0 border-b border-white/10">
                  <div className="flex items-center gap-[11px] text-white font-medium text-[0.95rem]">
                    <span className="w-8 h-8 rounded-[9px] bg-white/12 grid place-items-center text-[0.95rem]">📞</span>
                    Calling add-on
                  </div>
                  <div className="font-sora font-semibold text-muted-lt">₹120/user</div>
                </div>
                <div className="flex items-center justify-between mt-3.5 pt-3.5 border-t-2 border-white/20">
                  <span className="text-white font-semibold">Per user, every month</span>
                  <span className="font-sora font-extrabold text-[1.5rem] line-through text-white">₹750+</span>
                </div>
              </div>

              <div className="text-center my-4 text-mint text-[1.5rem] font-extrabold">&darr;</div>

              <div className="bg-[#2F5B42] rounded-[14px] p-[15px] px-[19px] flex items-center justify-between">
                <div className="flex items-center gap-[11px] text-white font-sora font-bold">
                  <span className="w-[34px] h-[34px] rounded-[9px] bg-white/25 grid place-items-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px] text-white">
                      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-1-2z" />
                    </svg>
                  </span>
                  Squeako — all of it
                </div>
                <div className="font-sora font-extrabold text-[1.5rem] text-white">₹99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
