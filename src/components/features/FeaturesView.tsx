import React from 'react';

interface FeaturesViewProps {
  active: boolean;
}

export default function FeaturesView({ active }: FeaturesViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="features">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Features</span>
          <h1>Everything your team needs, <span className="grad-text">nothing it doesn't.</span></h1>
          <p>Squeako replaces a stack of disconnected tools with one calm, fast app your whole team opens every day.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Talk</span>
              <h2>Messaging built for work</h2>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h4>Messages & channels</h4>
                <p>1:1 and group chats plus channels organised by topic, team or project.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>
                  </svg>
                </div>
                <h4>Threads & reactions</h4>
                <p>Keep replies tidy with threads, react with emoji, pin what matters.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <h4>Voice & video messages</h4>
                <p>Record an async update instead of scheduling another meeting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="sec-head">
              <span className="eyebrow">Meet</span>
              <h2>Calls & meetings, built in</h2>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 7l-7 5 7 5V7z"/>
                    <rect x="1" y="5" width="15" height="14" rx="2"/>
                  </svg>
                </div>
                <h4>Audio & video calls</h4>
                <p>Start a 1:1 or group call from any chat, with screen sharing.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                </div>
                <h4>Meetings & reminders</h4>
                <p>Plan one-off, recurring or group meetings; Squeako reminds everyone.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                </div>
                <h4>Recording & transcripts</h4>
                <p>Capture meetings and get a recap so no one misses a thing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="sec-head">
              <span className="eyebrow">Organise</span>
              <h2>Stay on top of everything</h2>
            </div>
            <div className="grid-4">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                  </svg>
                </div>
                <h4>Tasks</h4>
                <p>From any message, assigned and tracked.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h4>Presence</h4>
                <p>Online, away, busy, in-meeting, on-break.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="2" width="6" height="6" rx="1"/>
                    <rect x="2" y="16" width="6" height="6" rx="1"/>
                    <rect x="16" y="16" width="6" height="6" rx="1"/>
                    <path d="M12 8v4M12 12H5v4M12 12h7v4"/>
                  </svg>
                </div>
                <h4>Org hierarchy</h4>
                <p>A live reporting chart for the company.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                </div>
                <h4>Polls & reminders</h4>
                <p>Decide together, nudge anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Admin & security</span>
              <h2>Control & peace of mind</h2>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h4>Roles & permissions</h4>
                <p>Decide who can do what, from one admin console.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Data in India</h4>
                <p>Hosted in India, built to align with the DPDP Act.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M9 15l2 2 4-4"/>
                  </svg>
                </div>
                <h4>Audit logs & SSO</h4>
                <p>Keep records and connect SSO on higher plans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>See it with your own team</h2>
              <p>Spin up a free workspace and feel the difference in five minutes.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Start free</a>
                <a href="#pricing" className="btn btn-outline-light btn-lg" data-link>View pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
