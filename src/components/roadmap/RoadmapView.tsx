import React from 'react';

interface RoadmapViewProps {
  active: boolean;
}

export default function RoadmapView({ active }: RoadmapViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="roadmap">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Roadmap / What's new</span>
          <h1>Where Squeako is <span className="grad-text">headed next.</span></h1>
          <p>We ship fast and listen closely. Here's what's live, in progress, and coming soon.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="road-grid">
              <div className="road-col">
                <h4><span className="rd" style={{ background: 'var(--mint)' }}></span>Shipped</h4>
                <div className="road-item"><b>Recurring meetings</b><span>Schedule once, remind every time.</span></div>
                <div className="road-item"><b>On-break presence</b><span>Let your team know you're away.</span></div>
                <div className="road-item"><b>Android & iOS apps</b><span>Full experience on mobile.</span></div>
                <div className="road-item"><b>Guest access for clients</b><span>Share only what you choose.</span></div>
              </div>
              <div className="road-col">
                <h4><span className="rd" style={{ background: '#F5B544' }}></span>In progress</h4>
                <div className="road-item"><b>AI meeting recaps</b><span>Auto-summaries after every call.</span></div>
                <div className="road-item"><b>Advanced analytics</b><span>Usage insights for admins.</span></div>
                <div className="road-item"><b>More integrations</b><span>Calendar, CRM and helpdesk.</span></div>
              </div>
              <div className="road-col">
                <h4><span className="rd" style={{ background: 'var(--violet)' }}></span>Planned</h4>
                <div className="road-item"><b>Workflow automations</b><span>Trigger tasks and messages.</span></div>
                <div className="road-item"><b>SCIM provisioning</b><span>For larger enterprises.</span></div>
                <div className="road-item"><b>Custom themes</b><span>Make your workspace yours.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
