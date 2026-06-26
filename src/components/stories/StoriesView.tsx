import React from 'react';

interface StoriesViewProps {
  active: boolean;
}

export default function StoriesView({ active }: StoriesViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="stories">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Customer stories</span>
          <h1>Teams doing more, <span className="grad-text">paying less.</span></h1>
          <p>How Indian startups and SMBs switched to one app — and what changed.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="grid-3">
              <div className="story-card">
                <div className="story-metric">₹38k &rarr; ₹6k / mo</div>
                <p>"Three tools became one. The org chart made onboarding far easier, and we cut our monthly software bill by over 80%."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#6ED190' }}>AS</div>
                  <div><b>Aarav Shah</b><span>Founder, Kettle · Bengaluru</span></div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-metric">1 day to roll out</div>
                <p>"Our field staff actually use it because the mobile app is genuinely good. Calls, meetings and chat in one place changed how we work."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#16D196' }}>PM</div>
                  <div><b>Priya Menon</b><span>Ops Lead, Routely · Pune</span></div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-metric">60% fewer tools</div>
                <p>"Data in India made the compliance conversation easy for a fintech. WhatsApp support during IST hours is a small thing that matters."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#F0506E' }}>RG</div>
                  <div><b>Rahul Gupta</b><span>COO, Finbar · Gurugram</span></div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-metric">12 hrs/wk saved</div>
                <p>"No more pasting meeting links into chat or chasing people for updates. Recurring meetings with reminders run themselves."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#F5B544' }}>VK</div>
                  <div><b>Vikram K.</b><span>Founder, Saanjh · Jaipur</span></div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-metric">3x faster onboarding</div>
                <p>"New joiners learn the team from the org chart on day one. They know who to ping without asking around."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#16D196' }}>NS</div>
                  <div><b>Neha S.</b><span>HR Lead, Nimbus HR · Noida</span></div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-metric">100% on mobile</div>
                <p>"Client rooms with guest access changed how we work with customers. They only see what we choose to share."</p>
                <div className="story-who">
                  <div className="story-av" style={{ background: '#6ED190' }}>TM</div>
                  <div><b>Tushar M.</b><span>Lead, Bytecrate · Hyderabad</span></div>
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
              <h2>Write your own story</h2>
              <p>Start free today and see what one app can do for your team.</p>
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
