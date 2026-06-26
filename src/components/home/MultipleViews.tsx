'use client';

import React, { useState } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';
import MiniCard, { MiniCardItem } from './MiniCard';

export default function MultipleViews() {
  const [activeViewTab, setActiveViewTab] = useState('list');

  const tabs = [
    {
      id: 'list',
      label: 'List view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
    },
    {
      id: 'board',
      label: 'Board view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
    },
    {
      id: 'cal',
      label: 'Calendar view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FDEDE3] to-[#F8DAC4] border border-[#F2DDC9] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Your work, your way</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              See your tasks the way you think
            </h2>
            <p className="text-[1.1rem] text-muted">
              A simple list, a kanban board or a calendar — same tasks, your preferred view.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-[9px] mb-9">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveViewTab(tab.id)}
                className={`inline-flex items-center gap-2 py-2.5 px-[17px] rounded-full border-[1.5px] font-sora font-semibold text-[0.9rem] cursor-pointer transition-all duration-200 ${activeViewTab === tab.id
                  ? 'bg-[#6ED190] text-[#0B1818] border-[#6ED190] shadow-glow'
                  : 'bg-white text-ink border-hairline hover:border-[#6ED190] hover:text-[#6ED190]'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* List View Panel */}
          {activeViewTab === 'list' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[46px] items-center transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="font-sora font-bold text-[1.5rem] text-ink mb-[10px]">
                  List view
                </h3>
                <p className="text-muted text-[1.04rem] mb-6 leading-relaxed">
                  Every task in one place, sortable by due date, owner or priority. Tick things off as you go.
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    'Sort and filter instantly',
                    'See owners and due dates at a glance',
                    'Group by status or person',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-ink text-[0.92rem] font-medium">
                      <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-visual rounded-[18px] p-[22px] min-h-[200px] flex items-center justify-center">
                <MiniCard
                  title="All tasks"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M8 6h13M8 12h13M8 18h13" />
                    </svg>
                  }
                >
                  <MiniCardItem
                    avatarIcon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <path d="M9 11l3 3L22 4" />
                      </svg>
                    }
                    avatarBg="#16D196"
                    title="Ship landing page"
                    subtitle="Aarav · Done"
                  />
                  <MiniCardItem avatarText="DV" avatarBg="#6ED190" title="Fix mobile CTA" subtitle="Dev · Due today" badge={<Badge variant="status-busy">High</Badge>} />
                  <MiniCardItem avatarText="PR" avatarBg="#F5B544" title="Review pricing copy" subtitle="Priya · In progress" />
                  <MiniCardItem avatarText="RM" avatarBg="#d7d2ea" title="Draft client email" subtitle="Rahul · Tomorrow" />
                </MiniCard>
              </div>
            </div>
          )}

          {/* Board View Panel */}
          {activeViewTab === 'board' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[46px] items-center transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="font-sora font-bold text-[1.5rem] text-ink mb-[10px]">
                  Board view
                </h3>
                <p className="text-muted text-[1.04rem] mb-6 leading-relaxed">
                  Drag tasks across To-do, Doing and Done. A clear picture of what's moving, for the whole group.
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    'Kanban columns per group',
                    'Drag to update status',
                    'Spot bottlenecks fast',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-ink text-[0.92rem] font-medium">
                      <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-visual rounded-[18px] p-[22px] min-h-[200px] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full">
                  {/* To-Do */}
                  <div className="bg-paper border border-hairline rounded-xl p-2.5">
                    <h6 className="font-space-mono text-[0.62rem] tracking-[0.06em] uppercase text-muted mb-2 flex justify-between">
                      To-do <span className="font-bold">2</span>
                    </h6>
                    <div className="bg-white border border-hairline rounded-[9px] p-2.5 mb-2 shadow-sh-sm">
                      <b className="font-sora font-semibold text-[0.76rem] block mb-1.5 leading-snug text-ink">Draft client email</b>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full text-[0.58rem] text-white bg-[#d7d2ea] grid place-items-center font-bold font-sora">RM</span>
                        <span className="font-space-mono text-[0.58rem] font-bold py-[2px] px-[6px] rounded-full bg-[#D9E38A] text-[#166534]">Tue</span>
                      </div>
                    </div>
                    <div className="bg-white border border-hairline rounded-[9px] p-2.5 mb-2 shadow-sh-sm">
                      <b className="font-sora font-semibold text-[0.76rem] block mb-1.5 leading-snug text-ink">Prep demo deck</b>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full text-[0.58rem] text-white bg-[#6ED190] grid place-items-center font-bold font-sora">AS</span>
                        <span className="font-space-mono text-[0.58rem] font-bold py-[2px] px-[6px] rounded-full bg-mint-wash text-mint-deep">Low</span>
                      </div>
                    </div>
                  </div>

                  {/* Doing */}
                  <div className="bg-paper border border-hairline rounded-xl p-2.5">
                    <h6 className="font-space-mono text-[0.62rem] tracking-[0.06em] uppercase text-muted mb-2 flex justify-between">
                      Doing <span className="font-bold">2</span>
                    </h6>
                    <div className="bg-white border border-hairline rounded-[9px] p-2.5 mb-2 shadow-sh-sm">
                      <b className="font-sora font-semibold text-[0.76rem] block mb-1.5 leading-snug text-ink">Fix mobile CTA</b>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full text-[0.58rem] text-white bg-[#6ED190] grid place-items-center font-bold font-sora">DV</span>
                        <span className="font-space-mono text-[0.58rem] font-bold py-[2px] px-[6px] rounded-full bg-[#FDE8EC] text-[#D23A57]">High</span>
                      </div>
                    </div>
                    <div className="bg-white border border-hairline rounded-[9px] p-2.5 mb-2 shadow-sh-sm">
                      <b className="font-sora font-semibold text-[0.76rem] block mb-1.5 leading-snug text-ink">Review pricing copy</b>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full text-[0.58rem] text-white bg-[#F5B544] grid place-items-center font-bold font-sora">PR</span>
                        <span className="font-space-mono text-[0.58rem] font-bold py-[2px] px-[6px] rounded-full bg-[#D9E38A] text-[#166534]">Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Done */}
                  <div className="bg-paper border border-hairline rounded-xl p-2.5">
                    <h6 className="font-space-mono text-[0.62rem] tracking-[0.06em] uppercase text-muted mb-2 flex justify-between">
                      Done <span className="font-bold">1</span>
                    </h6>
                    <div className="bg-white border border-hairline rounded-[9px] p-2.5 mb-2 shadow-sh-sm">
                      <b className="font-sora font-semibold text-[0.76rem] block mb-1.5 leading-snug text-ink">Ship landing page</b>
                      <div className="flex items-center justify-between">
                        <span className="w-5 h-5 rounded-full text-[0.58rem] text-white bg-[#16D196] grid place-items-center font-bold font-sora">AS</span>
                        <span className="font-space-mono text-[0.58rem] font-bold py-[2px] px-[6px] rounded-full bg-mint-wash text-mint-deep">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calendar View Panel */}
          {activeViewTab === 'cal' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[46px] items-center transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="font-sora font-bold text-[1.5rem] text-ink mb-[10px]">
                  Calendar view
                </h3>
                <p className="text-muted text-[1.04rem] mb-6 leading-relaxed">
                  See what's due and when. Meetings and task deadlines, side by side, so the week is never a surprise.
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    'Tasks and meetings together',
                    'Drag to reschedule',
                    'Never miss a deadline',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-ink text-[0.92rem] font-medium">
                      <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-visual rounded-[18px] p-[22px] min-h-[200px] flex items-center justify-center">
                <MiniCard
                  title="This week"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  }
                >
                  <MiniCardItem avatarText="12" avatarBg="#6ED190" title="Mon · Daily standup" subtitle="10:00 AM" badge={<Badge variant="status-on">Call</Badge>} />
                  <MiniCardItem avatarText="13" avatarBg="#F5B544" title="Tue · Fix mobile CTA" subtitle="Due" badge={<Badge variant="status-busy">Task</Badge>} />
                  <MiniCardItem avatarText="14" avatarBg="#16D196" title="Wed · Pricing review" subtitle="4:00 PM" badge={<Badge variant="status-on">Meeting</Badge>} />
                  <MiniCardItem avatarText="15" avatarBg="#F0506E" title="Thu · Client onboarding" subtitle="11:30 AM" badge={<Badge variant="status-away">Meeting</Badge>} />
                </MiniCard>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
