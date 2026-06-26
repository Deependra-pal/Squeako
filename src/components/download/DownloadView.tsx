import React from 'react';

interface DownloadViewProps {
  active: boolean;
}

export default function DownloadView({ active }: DownloadViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="download">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Get the app</span>
          <h1>Squeako goes <span className="grad-text">wherever your team does.</span></h1>
          <p>Use it in the browser, or download the native app for Android and iOS. Same full experience, every device.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="contact-grid" style={{ alignItems: 'center' }}>
              <div>
                <div className="store-badges" style={{ marginBottom: '24px' }}>
                  <a href="#download" className="store" data-link>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5V3.5c0-.4.2-.7.5-.9l11 9-11 9c-.3-.2-.5-.5-.5-1.1zM16.8 14.3l-2.3-1.3L5.6 22l11.2-6.5zM20.5 11l-2.7-1.6-2.5 2.6 2.5 2.6L20.5 13c.7-.4.7-1.6 0-2zM5.6 2l8.9 9-2.3 1.3L5.6 2z"/>
                    </svg>
                    <div className="st"><small>GET IT ON</small><b>Google Play</b></div>
                  </a>
                  <a href="#download" className="store" data-link>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 1.3c.1 1-.3 2-.9 2.7-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 .9-2.6.7-.8 1.8-1.3 2.7-1.4zM19.8 17.3c-.5 1.2-.8 1.7-1.5 2.7-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.6 0-2.8-1.5-3.8-2.9C2.8 16.2 2.5 11.5 4.2 9c.9-1.3 2.4-2.2 3.8-2.2 1.4 0 2.3 1 3.5 1 1.1 0 1.8-1 3.5-1 1.2 0 2.5.7 3.5 1.8-3 1.7-2.5 6 .8 7.7z"/>
                    </svg>
                    <div className="st"><small>Download on the</small><b>App Store</b></div>
                  </a>
                </div>
                <p className="lead" style={{ marginBottom: '18px' }}>Prefer the browser? Open Squeako on the web and you're in — no install needed.</p>
                <a href="#contact" className="btn btn-primary btn-lg" data-link>Open Squeako on web</a>
              </div>
              <div className="ft-visual" style={{ background: 'transparent', border: 0, boxShadow: 'none', minHeight: 'auto', padding: 0 }}>
                <div className="device" style={{ maxWidth: '320px', margin: '0 auto' }}>
                  <div className="device-top">
                    <div className="ws">
                      <div className="ws-icon">S</div>
                      <div>
                        <div className="ws-name">Squeako</div>
                        <div className="ws-sub">On your phone</div>
                      </div>
                    </div>
                  </div>
                  <div className="presence-row">
                    <div className="av" style={{ background: '#6ED190' }}>AS<span className="dot dot-on"></span></div>
                    <div className="av" style={{ background: '#16D196' }}>PR<span className="dot dot-on"></span></div>
                    <div className="av" style={{ background: '#F5B544' }}>RM<span className="dot dot-away"></span></div>
                    <div className="live"><i></i>LIVE</div>
                  </div>
                  <div className="chat-body" style={{ minHeight: '150px' }}>
                    <div className="msg" style={{ animationDelay: '.2s' }}>
                      <div className="mav" style={{ background: '#16D196' }}>PR</div>
                      <div className="mc">
                        <div className="meta"><b>Priya</b>now</div>
                        <div className="bubble">On my way to the call 👍</div>
                      </div>
                    </div>
                    <div className="msg" style={{ animationDelay: '.7s' }}>
                      <div className="mav" style={{ background: '#6ED190' }}>AS</div>
                      <div className="mc">
                        <div className="meta"><b>Aarav</b>now</div>
                        <div className="bubble task">
                          <span className="task-chip">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M9 11l3 3L22 4"/>
                            </svg>Task done
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-input">
                    <span className="status-pill"><i></i>Online</span>
                    <div className="input-fake">Message…</div>
                    <div className="send">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
