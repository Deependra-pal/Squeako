import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ProblemStory() {
  return (
    <div className="bg-problem-section py-24 md:py-32 px-0 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 reveal relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Col */}
          <div>
            <Eyebrow>The hidden tool tax</Eyebrow>
            <h2 className="text-white text-[clamp(1.7rem,3.4vw,2.4rem)] font-sora font-extrabold mt-4 mb-6 leading-tight">
              You're paying a tax just to talk to your own team.
            </h2>
            <div className="flex flex-col gap-2.5 mb-6 mt-4" data-story>
              <div className="sl-line text-muted text-[1.08rem]">
                Chat on one app. Video on another. Tasks somewhere else.
              </div>
              <div className="sl-line text-muted text-[1.08rem]">
                Five subscriptions, five logins, five invoices.
              </div>
              <div className="sl-line text-muted text-[1.08rem]">
                All billed in dollars — with no GST.
              </div>
              <div className="sl-line text-muted text-[1.08rem]">
                And your team's data lives overseas.
              </div>
            </div>
            <div className="text-mint font-bold font-sora text-[0.95rem] mt-4 flex items-center gap-2">
              There's a simpler way <span className="animate-bounce">&darr;</span>
            </div>
          </div>

          {/* Right Col */}
          <div className="relative">
            <div className="card-premium p-[26px]">
              <div className="flex items-center justify-between py-[12px] px-0 border-b border-white/5">
                <div className="flex items-center gap-[11px] text-ink font-medium text-[0.95rem]">
                  <span className="w-8 h-8 rounded-[9px] bg-white/5 grid place-items-center text-[0.95rem]">💬</span>
                  Chat app
                </div>
                <div className="font-sora font-semibold text-muted">₹250/user</div>
              </div>
              <div className="flex items-center justify-between py-[12px] px-0 border-b border-white/5">
                <div className="flex items-center gap-[11px] text-ink font-medium text-[0.95rem]">
                  <span className="w-8 h-8 rounded-[9px] bg-white/5 grid place-items-center text-[0.95rem]">📹</span>
                  Video meetings
                </div>
                <div className="font-sora font-semibold text-muted">₹200/user</div>
              </div>
              <div className="flex items-center justify-between py-[12px] px-0 border-b border-white/5">
                <div className="flex items-center gap-[11px] text-ink font-medium text-[0.95rem]">
                  <span className="w-8 h-8 rounded-[9px] bg-white/5 grid place-items-center text-[0.95rem]">✅</span>
                  Task tracker
                </div>
                <div className="font-sora font-semibold text-muted">₹180/user</div>
              </div>
              <div className="flex items-center justify-between py-[12px] px-0 last:border-0 border-b border-white/5">
                <div className="flex items-center gap-[11px] text-ink font-medium text-[0.95rem]">
                  <span className="w-8 h-8 rounded-[9px] bg-white/5 grid place-items-center text-[0.95rem]">📞</span>
                  Calling add-on
                </div>
                <div className="font-sora font-semibold text-muted">₹120/user</div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <span className="text-muted font-medium">Per user, every month</span>
                <span className="font-sora font-extrabold text-[1.4rem] line-through text-white/50">₹750+</span>
              </div>
            </div>

            <div className="text-center my-4 text-mint text-[1.3rem] font-extrabold animate-bounce">&darr;</div>

            <div className="bg-gradient-to-r from-[#1FA968] to-[#16D196] text-[#283838] rounded-[18px] p-[16px] px-[22px] flex items-center justify-between shadow-glow border border-[#6ED190]/30 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-[11px] font-sora font-bold text-[1.05rem]">
                <span className="w-[34px] h-[34px] rounded-[9px] bg-white/20 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[19px] h-[19px] text-[#283838]">
                    <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-1-2z" />
                  </svg>
                </span>
                Squeako — all of it
              </div>
              <div className="font-sora font-extrabold text-[1.6rem]">₹99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
