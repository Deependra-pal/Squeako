'use client';

import React, { useState } from 'react';
import { BaseViewProps } from '@/types';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeatureTabs from './FeatureTabs';
import MultipleViews from './MultipleViews';
import Calculator from './Calculator';
import FAQ from './FAQ';

export default function HomeView({ active }: BaseViewProps) {
  // Newsletter State
  const [newsEmail, setNewsEmail] = useState('');
  const [newsInvalid, setNewsInvalid] = useState(false);
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = newsEmail.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      setNewsInvalid(true);
      return;
    }
    setNewsInvalid(false);
    setNewsSubmitted(true);
  };

  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="home">
      {/* HERO & TRUST STRIP */}
      <Hero />

      {/* PROBLEM STORY (dark box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-dark">
            <div className="story-grid">
              <div>
                <span className="eyebrow lt">The hidden tool tax</span>
                <div className="story-lines" data-story style={{ marginTop: '18px' }}>
                  <div className="sl-line">Chat on one app. Video on another. Tasks somewhere else.</div>
                  <div className="sl-line">Five subscriptions, five logins, five invoices.</div>
                  <div className="sl-line">All billed in dollars — with no GST.</div>
                  <div className="sl-line">And your team's data lives overseas.</div>
                </div>
                <h2>You're paying a tax just to talk to your own team.</h2>
                <p className="story-more">There's a simpler way &darr;</p>
              </div>
              <div>
                <div className="stack-card">
                  <div className="row"><div className="tool"><span className="ti">💬</span>Chat app</div><div className="price">₹250/user</div></div>
                  <div className="row"><div className="tool"><span className="ti">📹</span>Video meetings</div><div className="price">₹200/user</div></div>
                  <div className="row"><div className="tool"><span className="ti">✅</span>Task tracker</div><div className="price">₹180/user</div></div>
                  <div className="row"><div className="tool"><span className="ti">📞</span>Calling add-on</div><div className="price">₹120/user</div></div>
                  <div className="stack-total"><span className="l">Per user, every month</span><span className="strike">₹750+</span></div>
                </div>
                <div className="replace-arrow">↓</div>
                <div className="squeako-row">
                  <div className="l">
                    <span className="ti">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-1-2z" />
                      </svg>
                    </span>
                    Squeako — all of it
                  </div>
                  <div className="p">₹99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS (numbered steps) */}
      <HowItWorks />

      {/* FEATURE TABS (mint box) */}
      <FeatureTabs />

      {/* PACKED FEATURES */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">And there's more</span>
              <h2>Packed with the little things that help</h2>
              <p>From async messages to permissions — the details that make a tool a pleasure to use.</p>
            </div>
            <div className="grid-4">
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg></span><div><b>Voice messages</b><span>Faster than typing</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg></span><div><b>Video messages</b><span>Record, don't meet</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 7v5l3 2" /></svg></span><div><b>Scheduled messages</b><span>Send at the right time</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6" /></svg></span><div><b>Polls</b><span>Decide as a team</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg></span><div><b>Reminders</b><span>Nudge anyone</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg></span><div><b>Shared notes</b><span>Context in one place</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span><div><b>Roles & permissions</b><span>Control access</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></svg></span><div><b>Unlimited search</b><span>Find anything</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg></span><div><b>Guest access</b><span>Bring clients in</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" /><path d="M2 12h20" /></svg></span><div><b>AI assistant</b><span>Summaries & recaps</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg></span><div><b>Mobile apps</b><span>Android & iOS</span></div></div>
              <div className="pack-card"><span className="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></span><div><b>Audit logs</b><span>On Business+</span></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT TOUR */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="tour-grid">
              <div>
                <span className="eyebrow">See it in action</span>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', margin: '14px 0 12px' }}>Take the 2-minute product tour</h2>
                <p className="lead" style={{ marginBottom: 0 }}>Watch a team go from scattered tools to one calm workspace — chat, a quick call, a task — all without switching apps.</p>
                <ul className="tour-hl">
                  <li><span className="tn">1</span><div><b>Message, call & meet</b><span>All from the same window.</span></div></li>
                  <li><span className="tn">2</span><div><b>Turn talk into tasks</b><span>Nothing slips through.</span></div></li>
                  <li><span className="tn">3</span><div><b>See who's around</b><span>Live presence, always.</span></div></li>
                </ul>
              </div>
              <div className="tour-media">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="tlabel">▶ Squeako product tour · 2:04</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MULTIPLE VIEWS */}
      <MultipleViews />

      {/* WHY TEAMS SWITCH */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="sec-head">
              <span className="eyebrow">Why teams switch</span>
              <h2>Made for how Indian teams really work</h2>
              <p>Not a foreign tool with an India price tag — built ground-up for startups and SMBs here.</p>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>Up to 70% cheaper</h3>
                <p>One affordable plan replaces your chat, calls, meetings and task tools. Pay in ₹ with a proper GST invoice.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Your data stays in India</h3>
                <p>Hosted in Indian data centres and built to align with the DPDP Act. No wondering where your team's chats live.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3>Web, Android & iOS</h3>
                <p>Field team or office team — everyone gets the full experience on any device, anywhere.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                </div>
                <h3>Support in your timezone</h3>
                <p>Real humans on chat and WhatsApp during IST business hours, by a team that gets the local context.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>Live in minutes</h3>
                <p>No IT project, no consultants. Create a workspace, invite your team, and you're talking the same day.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3>Pay the Indian way</h3>
                <p>UPI, net banking, debit and credit cards. Monthly or annual. Cancel anytime — no lock-ins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI SECTION (dark box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-dark">
            <div className="sec-head dk">
              <span className="eyebrow lt">Meet Squeako AI</span>
              <h2>An AI teammate inside every chat</h2>
              <p>Catch up in seconds, reply faster, and find anything across your workspace — without leaving the conversation.</p>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h4" />
                  </svg>
                </div>
                <h4>Catch-up recaps</h4>
                <p>Back from leave or a long meeting? Get a clean summary of what you missed in any group or call.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                </div>
                <h4>Smart replies & rewrite</h4>
                <p>Draft a reply, fix the tone, or translate a message in a tap — so you sound clear, every time.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </div>
                <h4>Ask your workspace</h4>
                <p>"Where did we land on pricing?" Squeako AI searches across chats, files and meetings — and your connected apps — to answer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AUTOMATIONS (lilac box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="sec-head">
              <span className="eyebrow">No-code automations</span>
              <h2>Automate the busywork</h2>
              <p>Set simple "when this, do that" rules so routine updates happen on their own.</p>
            </div>
            <div className="auto-grid">
              <div className="auto-card">
                <div className="auto-when">When</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#F0506E' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div><b>A task is overdue</b><span>in any group</span></div>
                </div>
                <div className="auto-arrow">&darr;</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#6ED190' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <div><b>Remind the owner</b><span>with a friendly nudge</span></div>
                </div>
              </div>

              <div className="auto-card">
                <div className="auto-when">When</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#16D196' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </span>
                  <div><b>A client joins a room</b><span>guest access</span></div>
                </div>
                <div className="auto-arrow">&darr;</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#6ED190' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                  <div><b>Post a welcome</b><span>and share onboarding</span></div>
                </div>
              </div>

              <div className="auto-card">
                <div className="auto-when">Every</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#F5B544' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                  <div><b>Monday at 9 AM</b><span>recurring</span></div>
                </div>
                <div className="auto-arrow">&darr;</div>
                <div className="auto-line">
                  <span className="ai" style={{ background: '#6ED190' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
                    </svg>
                  </span>
                  <div><b>Start the standup</b><span>and ping the team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USE-CASE SCENARIOS (white box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">For every team</span>
              <h2>Built for every team in your company</h2>
              <p>However your teams work, Squeako fits the way they already think.</p>
            </div>
            <div className="grid-3">
              <div className="uc-card">
                <div className="uc-tag">
                  <span className="uci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" />
                    </svg>
                  </span>
                  Sales
                </div>
                <p>Drop a deal-won GIF in #wins, hop on a call with a prospect, and assign the follow-up task — without ever leaving Squeako.</p>
                <div className="uc-foot">CHAT · CALLS · TASKS</div>
              </div>
              <div className="uc-card">
                <div className="uc-tag">
                  <span className="uci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                    </svg>
                  </span>
                  Support
                </div>
                <p>Spin up a client room with guest access, share screens to debug live, and keep every conversation searchable for the next ticket.</p>
                <div className="uc-foot">GUESTS · SCREEN SHARE · SEARCH</div>
              </div>
              <div className="uc-card">
                <div className="uc-tag">
                  <span className="uci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    </svg>
                  </span>
                  HR & Ops
                </div>
                <p>Onboard new joiners with the org chart, run a quick poll on the offsite venue, and set reminders so nothing slips through.</p>
                <div className="uc-foot">ORG CHART · POLLS · REMINDERS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SAVINGS CALCULATOR (mint box) */}
      <Calculator />

      {/* TEMPLATES (white box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Start in seconds</span>
              <h2>Set up faster with a template</h2>
              <p>Pre-built workspaces with the right channels, groups and tasks for your kind of team.</p>
            </div>
            <div className="grid-4">
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#6ED190' }}></div>
                <div className="tmpl-body">
                  <div className="tmpl-body">
                    <div className="ti2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" />
                      </svg>
                    </div>
                    <b>Sales team</b>
                    <span>Pipeline channel, deal rooms, follow-up tasks.</span>
                    <span className="tuse">Use template &rarr;</span>
                  </div>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#16D196' }}></div>
                <div className="tmpl-body">
                  <div className="tmpl-body">
                    <div className="ti2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                      </svg>
                    </div>
                    <b>Customer support</b>
                    <span>Client rooms, escalations, shared notes.</span>
                    <span className="tuse">Use template &rarr;</span>
                  </div>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#F5B544' }}></div>
                <div className="tmpl-body">
                  <div className="tmpl-body">
                    <div className="ti2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 11l19-9-9 19-2-8-8-2z" />
                      </svg>
                    </div>
                    <b>Agency & clients</b>
                    <span>A guest room per client, plus internal channels.</span>
                    <span className="tuse">Use template &rarr;</span>
                  </div>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#F0506E' }}></div>
                <div className="tmpl-body">
                  <div className="tmpl-body">
                    <div className="ti2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                      </svg>
                    </div>
                    <b>Engineering</b>
                    <span>Standups, incidents, code-review tasks.</span>
                    <span className="tuse">Use template &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS / STORIES (mint box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="sec-head">
              <span className="eyebrow">Customer stories</span>
              <h2>Indian teams doing more for less</h2>
              <p>How startups and SMBs use Squeako to keep their teams aligned and budgets in check.</p>
            </div>
            <div className="grid-3">
              <div className="story-card">
                <span className="story-metric" data-count="380" data-suffix="k">380k</span>
                <p>"Moving off Slack and Zoom saved us almost ₹3.8 Lakh a year. But the best part is standups and tasks are in one place now."</p>
                <div className="story-who">
                  <span className="story-av" style={{ background: '#6ED190' }}>R</span>
                  <div><b>Rahul M.</b><span>Founder, Routely</span></div>
                </div>
              </div>
              <div className="story-card">
                <span className="story-metric" data-count="70" data-suffix="%">70%</span>
                <p>"Our field sales agents live on the mobile app. The WhatsApp-style simplicity means zero training was needed. Saves us 70% vs Teams."</p>
                <div className="story-who">
                  <span className="story-av" style={{ background: '#16D196' }}>P</span>
                  <div><b>Pooja S.</b><span>HR Head, Saanjh Retail</span></div>
                </div>
              </div>
              <div className="story-card">
                <span className="story-metric" data-count="45" data-suffix=" min">45 min</span>
                <p>"Guest channels are a game-changer for our agency. Clients join specific groups, view tasks, and screen-share in one tap. Standups are 45 min shorter."</p>
                <div className="story-who">
                  <span className="story-av" style={{ background: '#F5B544' }}>M</span>
                  <div><b>Mayank K.</b><span>Partner, Bytecrate</span></div>
                </div>
              </div>
            </div>
            <div className="center" style={{ marginTop: '24px' }}>
              <a href="#stories" className="btn btn-ghost" data-link>Read all stories &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* METRICS (dark box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-dark">
            <div className="metrics">
              <div className="metric">
                <div className="mn" data-count="12000" data-suffix="+">12,000+</div>
                <div className="ml">Indian workspaces</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="85" data-suffix="M+">85M+</div>
                <div className="ml">Messages sent</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="4" data-suffix="M+">4M+</div>
                <div className="ml">Calls completed</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="99" data-suffix=".99%">99.99%</div>
                <div className="ml">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS (white box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Loved by teams</span>
              <h2>What people say about Squeako</h2>
            </div>
            <div className="grid-3">
              <div className="test-card">
                <div className="stars">★★★★★</div>
                <p>"Everything Slack does, but billed in INR with a GST invoice. Setting up reports and roles is very straightforward."</p>
                <div className="test-who">
                  <span className="test-av" style={{ background: '#6ED190' }}>A</span>
                  <div><b>Anil K.</b><span>CTO, Kettle</span></div>
                </div>
              </div>
              <div className="test-card">
                <div className="stars">★★★★★</div>
                <p>"We run our entire customer onboarding on Squeako. The guest rooms are perfect for external agency work."</p>
                <div className="test-who">
                  <span className="test-av" style={{ background: '#16D196' }}>S</span>
                  <div><b>Sneha P.</b><span>Ops Manager, Nimbus HR</span></div>
                </div>
              </div>
              <div className="test-card">
                <div className="stars">★★★★★</div>
                <p>"Video calls are extremely stable even on mobile networks. The tasks system keeps the daily checklist front-and-centre."</p>
                <div className="test-who">
                  <span className="test-av" style={{ background: '#F5B544' }}>V</span>
                  <div><b>Vikram R.</b><span>Lead Dev, Routely</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTEGRATIONS (mint box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="sec-head">
              <span className="eyebrow">Connect your tools</span>
              <h2>Fits into your existing flow</h2>
              <p>Connect Squeako with the tools your team uses every day to centralize updates and tasks.</p>
            </div>
            <div className="int-row">
              <span className="int-chip"><span className="id">G</span>Google Workspace</span>
              <span className="int-chip"><span className="id">Z</span>Zapier</span>
              <span className="int-chip"><span className="id">J</span>Jira</span>
              <span className="int-chip"><span className="id">G</span>GitHub</span>
              <span className="int-chip"><span className="id">T</span>Trello</span>
              <span className="int-chip"><span className="id">N</span>Notion</span>
              <span className="int-chip"><span className="id">F</span>Figma</span>
            </div>
            <div className="center" style={{ marginTop: '24px' }}>
              <a href="#integrations" className="btn btn-ghost" data-link>Explore integrations &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORT STATS (white box) */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Always here to help</span>
              <h2>Support that gets your context</h2>
              <p>No timezone mismatch. Live IST support with humans who understand startups.</p>
            </div>
            <div className="support-stats">
              <div className="sstat"><div className="sn" data-count="3" data-suffix=" min">3 min</div><div className="sl">Avg chat response</div></div>
              <div className="sstat"><div className="sn" data-count="98" data-suffix="%">98%</div><div className="sl">Satisfaction rate</div></div>
              <div className="sstat"><div className="sn" data-count="24" data-suffix="/7">24/7</div><div className="sl">System monitoring</div></div>
              <div className="sstat"><div className="sn" data-count="1" data-suffix=" hr">1 hr</div><div className="sl">Avg ticket resolution</div></div>
              <div className="sstat"><div className="sn" data-count="100" data-suffix="%">100%</div><div className="sl">Local support engineers</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <FAQ />

      {/* RESOURCES TEASER */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">From the blog</span>
              <h2>Ideas for better teamwork</h2>
              <p>Guides, playbooks and tips for Indian teams getting more done with less.</p>
            </div>
            <div className="grid-3">
              <div className="blog-card"><div className="blog-img">Switching from Slack: a 1-day plan</div><div className="blog-body"><span className="blog-cat">Migration</span><h4>How to move your team off Slack in a day</h4><p>A simple checklist to bring your channels, people and history across without the chaos.</p><div className="blog-meta"><span>6 min read</span><span>Guide</span></div></div></div>
              <div className="blog-card"><div className="blog-img" style={{ background: 'linear-gradient(135deg,#16D196,#0F9E73)' }}>The real cost of your tool stack</div><div className="blog-body"><span className="blog-cat">Cost</span><h4>What your team's tools actually cost per year</h4><p>Add up chat, video, calling and tasks — then see what one app would save you.</p><div className="blog-meta"><span>4 min read</span><span>Playbook</span></div></div></div>
              <div className="blog-card"><div className="blog-img" style={{ background: 'linear-gradient(135deg,#0C281D,#1FA968)' }}>Data residency & the DPDP Act</div><div className="blog-body"><span className="blog-cat">Security</span><h4>What the DPDP Act means for your team chat</h4><p>A plain-language look at where your data should live, and why it matters.</p><div className="blog-meta"><span>5 min read</span><span>Explainer</span></div></div></div>
            </div>
            <div className="center" style={{ marginTop: '24px' }}>
              <a href="#resources" className="btn btn-ghost" data-link>Read more on the blog &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER FORM */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="news-wrap">
              <span className="eyebrow">Stay in the loop</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3.2vw,2.2rem)', margin: '12px 0 8px' }}>Tips for teams, once a month</h2>
              <p style={{ color: 'var(--muted)' }}>Practical playbooks on communication, remote work and getting more done. No spam, unsubscribe anytime.</p>

              {!newsSubmitted ? (
                <form className="news-form" id="newsForm" onSubmit={handleNewsSubmit} noValidate>
                  <input
                    type="email"
                    name="news"
                    placeholder="you@company.com"
                    aria-label="Email"
                    value={newsEmail}
                    onChange={(e) => { setNewsEmail(e.target.value); setNewsInvalid(false); }}
                    style={{ borderColor: newsInvalid ? '#F0506E' : '' }}
                  />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              ) : (
                <p className="news-ok" id="newsOk" style={{ display: 'block' }}>
                  ✓ You're subscribed — see you in your inbox!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Bring your whole team onto one app</h2>
              <p>Chat, calls, meetings and tasks — for less than a cup of chai per person, per day.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Start free</a>
                <a href="#contact" className="btn btn-outline-light btn-lg" data-link>Book a demo</a>
              </div>
              <div className="cta-mini">
                <span><span className="ck dk"></span> No card required</span>
                <span><span className="ck dk"></span> Set up in minutes</span>
                <span><span className="ck dk"></span> Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
