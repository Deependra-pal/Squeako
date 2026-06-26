import React from 'react';

interface IntegrationsViewProps {
  active: boolean;
}

export default function IntegrationsView({ active }: IntegrationsViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="integrations">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Integrations</span>
          <h1>Connect the tools <span className="grad-text">you already use.</span></h1>
          <p>Bring your calendar, files and workflows into Squeako so your team stops switching tabs.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="grid-4">
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>G</span>
                <div><b>Google Calendar</b><span>Meetings & reminders</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>D</span>
                <div><b>Google Drive</b><span>Share files inline</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>M</span>
                <div><b>Gmail</b><span>Turn mail into tasks</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>Z</span>
                <div><b>Zapier</b><span>Automate anything</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>T</span>
                <div><b>Trello</b><span>Card updates in chat</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>J</span>
                <div><b>Jira</b><span>Issue notifications</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>🐙</span>
                <div><b>GitHub</b><span>PRs & commits</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>R</span>
                <div><b>Razorpay</b><span>Payment alerts</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>A</span>
                <div><b>Asana</b><span>Task sync</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>S</span>
                <div><b>Salesforce</b><span>Lead alerts</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>N</span>
                <div><b>Notion</b><span>Doc links</span></div>
              </div>
              <div className="pack-card">
                <span className="pi" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}>+</span>
                <div><b>Webhooks & API</b><span>Build your own</span></div>
              </div>
            </div>
            <div className="center" style={{ marginTop: '26px' }}>
              <a href="#contact" className="btn btn-ghost" data-link>Request an integration &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
