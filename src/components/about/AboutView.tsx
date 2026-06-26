import React from 'react';

interface AboutViewProps {
  active: boolean;
}

export default function AboutView({ active }: AboutViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="about">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About Squeako</span>
          <h1>Indian teams deserve <span className="grad-text">better tools, not bigger bills.</span></h1>
          <p>Squeako was built on a simple belief: your team's communication shouldn't cost a fortune or live on the other side of the world.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <p className="lead" style={{ marginBottom: '16px' }}>
                We watched startups stitch together a chat app, a video tool, a task tracker and a calling add-on — paying in dollars, getting no GST invoice, waiting on support from a timezone that wasn't theirs.
              </p>
              <p className="lead">
                So we built one app that does it all, priced in rupees, hosted in India, supported by people who pick up during your working day. That's Squeako.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-dark">
            <div className="metrics">
              <div className="metric">
                <div className="mn" data-count="70" data-suffix="%">0</div>
                <div className="ml">Lower cost than legacy tools</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="6" data-suffix="-in-1">0</div>
                <div className="ml">Tools replaced</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="100" data-suffix="%">0</div>
                <div className="ml">Data hosted in India</div>
              </div>
              <div className="metric">
                <div className="mn" data-count="5" data-suffix=" min">0</div>
                <div className="ml">To set up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">What we stand for</span>
              <h2>Our principles</h2>
            </div>
            <div className="grid-2">
              <div className="value-row">
                <div className="vi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <h4>Fair pricing, always</h4>
                  <p>Good tools shouldn't be a luxury. We price for the team buying it, not the team next door.</p>
                </div>
              </div>
              <div className="value-row">
                <div className="vi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4>Rooted in India</h4>
                  <p>Local data, local support, local payment methods. We build for the realities of doing business here.</p>
                </div>
              </div>
              <div className="value-row">
                <div className="vi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </div>
                <div>
                  <h4>Simple over clever</h4>
                  <p>If your team needs a manual to chat, we've failed. Everything should feel obvious the first time.</p>
                </div>
              </div>
              <div className="value-row">
                <div className="vi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <div>
                  <h4>Boringly reliable</h4>
                  <p>The best communication tool is the one you never think about. We sweat uptime so you don't.</p>
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
              <h2>Come build a calmer workday</h2>
              <p>Join the Indian teams moving their conversations to one app that just works.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Start free</a>
                <a href="#contact" className="btn btn-outline-light btn-lg" data-link>Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
