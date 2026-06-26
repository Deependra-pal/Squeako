import React from 'react';

interface SecurityViewProps {
  active: boolean;
}

export default function SecurityView({ active }: SecurityViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="security">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Security & privacy</span>
          <h1>Your conversations, <span className="grad-text">kept safe and in India.</span></h1>
          <p>Built so Indian businesses never have to choose between an app their team loves and the security their compliance needs.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Data stored in India</h4>
                <p>Your workspace data lives in Indian data centres, so you always know where it resides.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h4>Encryption in transit & at rest</h4>
                <p>Every message, call and file is encrypted on the way to us and while stored.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <h4>DPDP-ready by design</h4>
                <p>Built to align with India's Digital Personal Data Protection Act.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                </div>
                <h4>Admin controls & roles</h4>
                <p>Decide who can do what, manage members and control guest access.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M9 15l2 2 4-4"/>
                  </svg>
                </div>
                <h4>Audit logs</h4>
                <p>On Business and Enterprise, keep a clear record of key actions.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>
                  </svg>
                </div>
                <h4>SSO & single sign-on</h4>
                <p>Enterprise teams connect SSO and SAML for secure sign-in.</p>
              </div>
            </div>
            <div className="badges" style={{ marginTop: '30px' }}>
              <span className="badge-c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg> DPDP-ready
              </span>
              <span className="badge-c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg> ISO 27001
              </span>
              <span className="badge-c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg> SOC 2
              </span>
              <span className="badge-c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                </svg> Data in India
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Have a compliance question?</h2>
              <p>We're happy to walk your IT or legal team through exactly how Squeako handles your data.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Talk to our team</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
