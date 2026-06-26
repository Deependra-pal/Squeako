'use client';

import React, { useState } from 'react';

interface ResourcesViewProps {
  active: boolean;
}

export default function ResourcesView({ active }: ResourcesViewProps) {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInvalid(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setSubmitted(true);
  };

  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="resources">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Resources & blog</span>
          <h1>Guides for <span className="grad-text">better teamwork.</span></h1>
          <p>Playbooks, comparisons and tips for Indian teams getting more done with less.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="grid-3">
              <div className="blog-card">
                <div className="blog-img">Switching from Slack: a 1-day plan</div>
                <div className="blog-body">
                  <span className="blog-cat">Migration</span>
                  <h4>How to move your team off Slack in a day</h4>
                  <p>A simple checklist to bring your channels, people and history across without the chaos.</p>
                  <div className="blog-meta"><span>6 min read</span><span>Guide</span></div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img" style={{ background: 'linear-gradient(135deg,#16D196,#0F9E73)' }}>The real cost of your tool stack</div>
                <div className="blog-body">
                  <span className="blog-cat">Cost</span>
                  <h4>What your team's tools actually cost per year</h4>
                  <p>Add up chat, video, calling and tasks — then see what one app would save you.</p>
                  <div className="blog-meta"><span>4 min read</span><span>Playbook</span></div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img" style={{ background: 'linear-gradient(135deg,#1A1230,#B8441A)' }}>Data residency & the DPDP Act</div>
                <div className="blog-body">
                  <span className="blog-cat">Security</span>
                  <h4>What the DPDP Act means for your team chat</h4>
                  <p>A plain-language look at where your data should live, and why it matters.</p>
                  <div className="blog-meta"><span>5 min read</span><span>Explainer</span></div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img" style={{ background: 'linear-gradient(135deg,#F5B544,#E07A2E)' }}>Running better standups</div>
                <div className="blog-body">
                  <span className="blog-cat">Productivity</span>
                  <h4>How to run a standup people don't dread</h4>
                  <p>Recurring meetings, async updates and a few simple rules that keep them short.</p>
                  <div className="blog-meta"><span>5 min read</span><span>Guide</span></div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img" style={{ background: 'linear-gradient(135deg,#F0506E,#D23A57)' }}>Working with clients in chat</div>
                <div className="blog-body">
                  <span className="blog-cat">Use case</span>
                  <h4>Set up client rooms without oversharing</h4>
                  <p>How guest access lets clients see exactly what you want — and nothing else.</p>
                  <div className="blog-meta"><span>4 min read</span><span>How-to</span></div>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img" style={{ background: 'linear-gradient(135deg,#1FA968,#4F8BFF)' }}>Remote teams across India</div>
                <div className="blog-body">
                  <span className="blog-cat">Remote work</span>
                  <h4>Keeping a distributed Indian team in sync</h4>
                  <p>Presence, async habits and timezones — small habits that make a big difference.</p>
                  <div className="blog-meta"><span>6 min read</span><span>Playbook</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-mint">
            <div className="news-wrap">
              <span className="eyebrow">Stay in the loop</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', margin: '12px 0 8px' }}>Tips for teams, once a month</h2>
              <p style={{ color: 'var(--muted)' }}>Practical playbooks, no spam. Unsubscribe anytime.</p>

              {!submitted ? (
                <form className="news-form" id="newsForm2" onSubmit={handleSubmit} noValidate>
                  <input
                    type="email"
                    name="news"
                    placeholder="you@company.com"
                    aria-label="Email"
                    value={email}
                    onChange={handleInputChange}
                    style={{ borderColor: isInvalid ? '#F0506E' : '' }}
                  />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              ) : (
                <p className="news-ok" id="newsOk2" style={{ display: 'block' }}>
                  ✓ You're subscribed — see you in your inbox!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
