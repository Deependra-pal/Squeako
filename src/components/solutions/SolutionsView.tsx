import React from 'react';

interface SolutionsViewProps {
  active: boolean;
}

export default function SolutionsView({ active }: SolutionsViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="solutions">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Solutions</span>
          <h1>One app, <span className="grad-text">every team.</span></h1>
          <p>However your teams work, Squeako fits the way they already think — by department and by industry.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">By team</span>
              <h2>Built for your department</h2>
            </div>
            <div className="grid-3">
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 21v-1a6 6 0 0 1 12 0v1"/>
                  </svg>
                </div>
                <b>Founders</b>
                <span>Run the whole company from one app — chat, calls, hiring, ops.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18 9l-5 5-2-2-4 4"/>
                  </svg>
                </div>
                <b>Sales</b>
                <span>Chat with prospects, hop on calls, assign follow-ups, close faster.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                  </svg>
                </div>
                <b>Marketing</b>
                <span>Plan campaigns in channels, share assets, keep sales in the loop.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                  </svg>
                </div>
                <b>Engineering</b>
                <span>Standups, code reviews and incident calls — all in one place.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>
                  </svg>
                </div>
                <b>Customer Support</b>
                <span>Client rooms, screen share and searchable history for every ticket.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                </div>
                <b>HR & Ops</b>
                <span>Onboard with the org chart, run polls, send reminders.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="sec-head">
              <span className="eyebrow">By industry</span>
              <h2>Fits your business</h2>
            </div>
            <div className="grid-3">
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                  </svg>
                </div>
                <b>IT & Software</b>
                <span>Ship faster with standups, reviews and incident calls in one app.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <b>D2C & Retail</b>
                <span>Coordinate ops, suppliers and support across stores and warehouses.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <path d="M2 10h20"/>
                  </svg>
                </div>
                <b>Fintech</b>
                <span>Data in India and DPDP-readiness make compliance straightforward.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                  </svg>
                </div>
                <b>Agencies</b>
                <span>Spin up a client room per account with guest access.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10L12 5 2 10l10 5 10-5z"/>
                    <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>
                  </svg>
                </div>
                <b>Education</b>
                <span>Connect staff, faculty and departments without the per-seat shock.</span>
              </div>
              <div className="sol-card">
                <div className="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <path d="M16 8h4l3 3v5h-7"/>
                    <circle cx="5" cy="18" r="2"/>
                    <circle cx="19" cy="18" r="2"/>
                  </svg>
                </div>
                <b>Logistics</b>
                <span>Keep field, hub and office teams in sync on mobile.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Find the fit for your team</h2>
              <p>Tell us how your team works and we'll show you the quickest way to get going.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Book a demo</a>
                <a href="#pricing" className="btn btn-outline-light btn-lg" data-link>See pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
