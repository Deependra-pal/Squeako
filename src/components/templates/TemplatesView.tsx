import React from 'react';

interface TemplatesViewProps {
  active: boolean;
}

export default function TemplatesView({ active }: TemplatesViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="templates">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Templates</span>
          <h1>Start fast with a <span className="grad-text">ready-made workspace.</span></h1>
          <p>Pick a template and get the right channels, groups and tasks set up in one click.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="grid-3">
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#1FA968' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-2-2-4 4" />
                    </svg>
                  </div>
                  <b>Sales team</b>
                  <span>Pipeline channel, deal rooms, follow-up tasks and a wins channel.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#16D196' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                    </svg>
                  </div>
                  <b>Customer support</b>
                  <span>Client rooms with guest access, escalations and shared notes.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#F5B544' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11l19-9-9 19-2-8-8-2z" />
                    </svg>
                  </div>
                  <b>Agency & clients</b>
                  <span>One guest room per client, plus internal account channels.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#F0506E' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <b>Engineering</b>
                  <span>Standups, incident channel and code-review tasks.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#16D196' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <b>HR & onboarding</b>
                  <span>New-joiner checklists, org chart and a welcome channel.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
              <div className="tmpl-card">
                <div className="tmpl-top" style={{ background: '#0F9E73' }}></div>
                <div className="tmpl-body">
                  <div className="ti2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
                    </svg>
                  </div>
                  <b>Startup HQ</b>
                  <span>Everything a small team needs: general, random, ops and goals.</span>
                  <span className="tuse">Use template &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Can't find the right one?</h2>
              <p>Start from a blank workspace — you'll still be up and running in minutes.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Start free</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
