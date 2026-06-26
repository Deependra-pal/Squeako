import React from 'react';

interface EnterpriseViewProps {
  active: boolean;
}

export default function EnterpriseView({ active }: EnterpriseViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="enterprise">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Enterprise</span>
          <h1>Team communication that <span className="grad-text">scales with you.</span></h1>
          <p>The security, control and support large and regulated Indian organisations need — without losing the simplicity your team loves.</p>
          <div style={{ marginTop: '24px' }}>
            <a href="#contact" className="btn btn-primary btn-lg" data-link>Talk to sales</a>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Built for scale</span>
              <h2>Everything in Business, and then some</h2>
            </div>
            <div className="grid-3">
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h4>SSO, SAML & SCIM</h4>
                <p>Single sign-on and automated user provisioning with the identity provider you already use.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <h4>99.9% uptime SLA</h4>
                <p>A contractual uptime commitment with priority status and proactive incident updates.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                </div>
                <h4>Dedicated success manager</h4>
                <p>A named contact for rollout, training and ongoing help — plus 24×7 priority support.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>DPDP & ISO support</h4>
                <p>Data residency in India, audit logs, and documentation to satisfy your compliance team.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M9 15l2 2 4-4"/>
                  </svg>
                </div>
                <h4>Advanced admin & roles</h4>
                <p>Granular roles, custom retention and storage, and organisation-wide controls.</p>
              </div>
              <div className="fcard">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <h4>Procurement-friendly</h4>
                <p>Annual invoicing in INR, custom contracts, and a smooth security review process.</p>
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
          <div className="box box-dark">
            <div className="metrics">
              <div className="metric">
                <div className="mn">99.9%</div>
                <div className="ml">Uptime SLA</div>
              </div>
              <div className="metric">
                <div className="mn">24×7</div>
                <div className="ml">Priority support</div>
              </div>
              <div className="metric">
                <div className="mn">SSO</div>
                <div className="ml">SAML & SCIM</div>
              </div>
              <div className="metric">
                <div className="mn">India</div>
                <div className="ml">Data residency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Let's scope your rollout</h2>
              <p>Tell us about your organisation and we'll put together a plan and a quote.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Talk to sales</a>
                <a href="#security" className="btn btn-outline-light btn-lg" data-link>Read about security</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
