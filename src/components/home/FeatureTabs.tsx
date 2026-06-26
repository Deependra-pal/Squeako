'use client';

import React, { useState, useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';
import MiniCard, { MiniCardItem } from './MiniCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureTabs() {
  const [activeFeatureTab, setActiveFeatureTab] = useState('chat');
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-sidebar',
        { x: -30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out' }
      );
    }
  }, [activeFeatureTab]);

  const tabs = [
    {
      id: 'chat',
      label: 'Chat & groups',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: 'meet',
      label: 'Calls & meetings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
    },
    {
      id: 'task',
      label: 'Tasks',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M9 11l3 3L22 4" />
        </svg>
      ),
    },
    {
      id: 'presence',
      label: 'Presence',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      id: 'org',
      label: 'Org chart',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v4M12 12H5v4M12 12h7v4" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="bg-tabs-section py-20 px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="glass-panel rounded-[30px] p-[clamp(30px,4.5vw,56px)] relative overflow-hidden">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-12 text-center">
            <Eyebrow>Take a closer look</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              The full toolkit, in action
            </h2>
            <p className="text-[1.1rem] text-muted">
              Chat, calls, tasks, presence and your org chart — browse through the sidebar to see each one.
            </p>
          </div>

          {/* Split Pane Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-11 items-start">

            {/* Sidebar Navigation */}
            <div className="feature-sidebar flex flex-row overflow-x-auto lg:flex-col gap-2 bg-[#0B1818]/60 border border-hairline/60 rounded-[20px] p-2.5 lg:p-4 shrink-0 scrollbar-none">
              {tabs.map((tab) => {
                const isActive = activeFeatureTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFeatureTab(tab.id)}
                    className={`flex items-center gap-3 w-full py-3 px-4 rounded-[12px] font-sora font-semibold text-[0.88rem] cursor-pointer text-left transition-all duration-200 shrink-0 whitespace-nowrap lg:whitespace-normal ${isActive
                      ? 'bg-[#16D196]/15 text-[#16D196] border border-[#16D196]/30 lg:pl-5'
                      : 'bg-transparent text-muted hover:text-ink hover:lg:pl-5 border border-transparent'
                      }`}
                  >
                    <span className="flex-none">{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right Animated Tab Panel */}
            <div ref={panelRef} className="bg-[#0B1818]/30 border border-hairline/60 rounded-[24px] p-6 lg:p-9 min-h-[380px] flex items-center justify-center">

              {/* Chat Panel */}
              {activeFeatureTab === 'chat' && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-11 items-center w-full">
                  <div className="flex flex-col">
                    <h3 className="font-sora font-bold text-[1.45rem] text-ink mb-3 leading-snug">
                      Conversations that bring everyone in
                    </h3>
                    <p className="text-muted text-[0.96rem] mb-5 leading-relaxed">
                      1:1 chats, group channels and client rooms — organised the way your team works.
                    </p>
                    <ul className="flex flex-col gap-3 p-0 m-0">
                      {[
                        '1:1 and group chats, like WhatsApp but for work',
                        'Invite clients & guests into chosen groups only',
                        'Threads, reactions, pins and file sharing',
                        'Search every message and file in your workspace',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-ink text-[0.88rem] font-semibold">
                          <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-visual rounded-[18px] p-[20px] min-h-[200px] flex items-center justify-center">
                    <MiniCard
                      title="Your groups"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      }
                    >
                      <MiniCardItem avatarText="#" avatarBg="#6ED190" title="# launch-team" subtitle="Aarav, Priya +4" badge={<Badge variant="status-on">12 new</Badge>} />
                      <MiniCardItem avatarText="K" avatarBg="#16D196" title="Kettle × Client" subtitle="Guest access" badge={<Badge variant="status-away">2 new</Badge>} />
                      <MiniCardItem avatarText="#" avatarBg="#F5B544" title="# design" subtitle="Priya, Mayank" />
                      <MiniCardItem avatarText="RM" avatarBg="#F0506E" title="Rahul M." subtitle="Direct message" />
                    </MiniCard>
                  </div>
                </div>
              )}

              {/* Meet Panel */}
              {activeFeatureTab === 'meet' && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-11 items-center w-full">
                  <div className="flex flex-col">
                    <h3 className="font-sora font-bold text-[1.45rem] text-ink mb-3 leading-snug">
                      Calls and meetings, no extra app
                    </h3>
                    <p className="text-muted text-[0.96rem] mb-5 leading-relaxed">
                      Quick audio or HD video from any chat. Schedule recurring meetings; Squeako reminds everyone.
                    </p>
                    <ul className="flex flex-col gap-3 p-0 m-0">
                      {[
                        '1:1 & group audio and video with screen share',
                        'One-off or recurring meetings in a few taps',
                        'Automatic reminders before every meeting',
                        'Recording & transcripts on higher plans',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-ink text-[0.88rem] font-semibold">
                          <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-visual rounded-[18px] p-[20px] min-h-[200px] flex items-center justify-center">
                    <MiniCard
                      title="Upcoming meetings"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      }
                    >
                      <MiniCardItem
                        avatarIcon={
                          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-3.5 h-3.5">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>
                        }
                        avatarBg="#6ED190"
                        title="Daily standup"
                        subtitle="10:00 AM · Recurring"
                        badge={<Badge variant="status-on">10 min</Badge>}
                      />
                      <MiniCardItem
                        avatarIcon={
                          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-3.5 h-3.5">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                          </svg>
                        }
                        avatarBg="#16D196"
                        title="Pricing review"
                        subtitle="4:00 PM · 3 invited"
                      />
                      <MiniCardItem avatarText="CO" avatarBg="#F5B544" title="Client onboarding" subtitle="Tomorrow 11:30 AM" />
                    </MiniCard>
                  </div>
                </div>
              )}

              {/* Task Panel */}
              {activeFeatureTab === 'task' && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-11 items-center w-full">
                  <div className="flex flex-col">
                    <h3 className="font-sora font-bold text-[1.45rem] text-ink mb-3 leading-snug">
                      Turn chat into action
                    </h3>
                    <p className="text-muted text-[0.96rem] mb-5 leading-relaxed">
                      Create a task inside a conversation, assign it, set a due date, track it to done. No separate tool.
                    </p>
                    <ul className="flex flex-col gap-3 p-0 m-0">
                      {[
                        'Create tasks from any message in one tap',
                        'Assign owners, due dates and priorities',
                        'Track open, in-progress and done per group',
                        'Everyone sees the same source of truth',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-ink text-[0.88rem] font-semibold">
                          <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-visual rounded-[18px] p-[20px] min-h-[200px] flex items-center justify-center">
                    <MiniCard
                      title="Tasks · # launch-team"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M9 11l3 3L22 4" />
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
                    </MiniCard>
                  </div>
                </div>
              )}

              {/* Presence Panel */}
              {activeFeatureTab === 'presence' && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-11 items-center w-full">
                  <div className="flex flex-col">
                    <h3 className="font-sora font-bold text-[1.45rem] text-ink mb-3 leading-snug">
                      Know who's around, instantly
                    </h3>
                    <p className="text-muted text-[0.96rem] mb-5 leading-relaxed">
                      Online, away, busy, in-meeting or on-break — your team always knows the best time to reach you.
                    </p>
                    <ul className="flex flex-col gap-3 p-0 m-0">
                      {[
                        'Online, away, busy, in-meeting & on-break',
                        'Custom status messages',
                        'Auto-updates when you join a meeting',
                        'Live presence next to every name',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-ink text-[0.88rem] font-semibold">
                          <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-visual rounded-[18px] p-[20px] min-h-[200px] flex items-center justify-center">
                    <MiniCard
                      title="Team presence"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      }
                    >
                      <MiniCardItem avatarText="AS" avatarBg="#6ED190" title="Aarav S." subtitle="Founder" badge={<Badge variant="status-on">Online</Badge>} />
                      <MiniCardItem avatarText="PR" avatarBg="#16D196" title="Priya R." subtitle="In a meeting" badge={<Badge variant="status-busy">Busy</Badge>} />
                      <MiniCardItem avatarText="RM" avatarBg="#F5B544" title="Rahul M." subtitle="Back at 3 PM" badge={<Badge variant="status-away">Away</Badge>} />
                      <MiniCardItem avatarText="DV" avatarBg="#F0506E" title="Dev V." subtitle="On a break ☕" badge={<Badge variant="status-away">Break</Badge>} />
                    </MiniCard>
                  </div>
                </div>
              )}

              {/* Org Chart Panel */}
              {activeFeatureTab === 'org' && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-11 items-center w-full">
                  <div className="flex flex-col">
                    <h3 className="font-sora font-bold text-[1.45rem] text-ink mb-3 leading-snug">
                      See who reports to whom
                    </h3>
                    <p className="text-muted text-[0.96rem] mb-5 leading-relaxed">
                      A clear, always-current org chart built right in. New joiners learn the team in seconds.
                    </p>
                    <ul className="flex flex-col gap-3 p-0 m-0">
                      {[
                        'Visual reporting hierarchy, company-wide',
                        'Tap any person to chat, call or see status',
                        'Roles, teams and managers stay current',
                        'Helps new hires find their way on day one',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-ink text-[0.88rem] font-semibold">
                          <span className="inline-grid place-items-center w-[18px] h-[18px] rounded-full bg-mint-wash text-mint-deep text-[0.66rem] font-black flex-none mt-0.5">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-visual rounded-[18px] p-[20px] min-h-[200px] flex items-center justify-center">
                    <div className="flex flex-col items-center w-full max-w-[340px]">
                      <div className="bg-white border border-hairline rounded-[12px] py-2 px-[13px] flex items-center gap-[9px] shadow-sh-sm font-sora font-semibold text-[0.82rem] text-ink">
                        <span className="w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[0.66rem] font-bold bg-[#6ED190]">
                          AS
                        </span>
                        Aarav · Founder
                      </div>
                      <div className="w-[2px] h-4 bg-hairline"></div>
                      <div className="flex gap-[14px]">
                        <div className="flex flex-col items-center">
                          <div className="bg-white border border-hairline rounded-[12px] py-2 px-[13px] flex items-center gap-[9px] shadow-sh-sm font-sora font-semibold text-[0.82rem] text-ink">
                            <span className="w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[0.66rem] font-bold bg-mint">
                              PR
                            </span>
                            Priya
                          </div>
                          <div className="w-[2px] h-4 bg-hairline"></div>
                          <div className="bg-white border border-hairline rounded-[12px] py-2 px-[13px] flex items-center gap-[9px] shadow-sh-sm font-sora font-semibold text-[0.82rem] text-ink">
                            <span className="w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[0.66rem] font-bold bg-[#F5B544]">
                              MY
                            </span>
                            Mayank
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-white border border-hairline rounded-[12px] py-2 px-[13px] flex items-center gap-[9px] shadow-sh-sm font-sora font-semibold text-[0.82rem] text-ink">
                            <span className="w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[0.66rem] font-bold bg-[#F0506E]">
                              RM
                            </span>
                            Rahul
                          </div>
                          <div className="w-[2px] h-4 bg-hairline"></div>
                          <div className="bg-white border border-hairline rounded-[12px] py-2 px-[13px] flex items-center gap-[9px] shadow-sh-sm font-sora font-semibold text-[0.82rem] text-ink">
                            <span className="w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[0.66rem] font-bold bg-[#d7d2ea]">
                              DV
                            </span>
                            Dev
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
