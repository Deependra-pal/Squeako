'use client';

import React, { useState } from 'react';
import FaqItem from '../shared/FaqItem';

interface PricingViewProps {
  active: boolean;
}

export default function PricingView({ active }: PricingViewProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="pricing">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Pricing</span>
          <h1>Pricing that respects <span className="grad-text">a startup budget.</span></h1>
          <p>Start free forever. Upgrade only when your team grows. No hidden fees, no dollar surprises — all in ₹, with GST.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="center">
              <div className="bill-toggle">
                <span id="lblMonthly" className={!isAnnual ? 'on' : ''}>Monthly</span>
                <button
                  type="button"
                  className={`switch ${isAnnual ? 'annual' : ''}`}
                  id="billSwitch"
                  aria-label="Toggle billing"
                  onClick={toggleBilling}
                >
                  <span className="knob"></span>
                </button>
                <span id="lblAnnual" className={isAnnual ? 'on' : ''}>Annual</span>
              </div>
              <span className="save-tag">Save 2 months with annual billing</span>
            </div>
            <div className="price-grid">
              {/* Plan 1: Free */}
              <div className="price-card">
                <div className="pname">Free</div>
                <div className="pdesc">For tiny teams getting started.</div>
                <div className="price-amt">
                  <span className="cur">₹</span>
                  <span className="num">0</span>
                </div>
                <div className="price-cycle">Free forever · up to 10 members</div>
                <a href="#contact" className="btn btn-ghost" data-link>Start free</a>
                <ul className="plist">
                  <li><span className="ck"></span>Up to 10 members</li>
                  <li><span className="ck"></span>1:1 & group chats</li>
                  <li><span className="ck"></span>Audio & video (up to 8)</li>
                  <li><span className="ck"></span>Basic tasks & status</li>
                  <li><span className="ck"></span>90-day history</li>
                  <li><span className="ck"></span>5 GB storage</li>
                </ul>
              </div>

              {/* Plan 2: Growth */}
              <div className="price-card pop">
                <span className="pop-tag">MOST POPULAR</span>
                <div className="pname">Growth</div>
                <div className="pdesc">For growing startups & SMBs.</div>
                <div className="price-amt">
                  <span className="cur">₹</span>
                  <span className="num sq-amt">{isAnnual ? '99' : '129'}</span>
                  <span className="per">/user / mo</span>
                </div>
                <div className="price-cycle sq-cycle">{isAnnual ? 'billed annually' : 'billed monthly'}</div>
                <a href="#contact" className="btn btn-primary" data-link>Start free trial</a>
                <ul className="plist">
                  <li className="ph">Everything in Free, plus</li>
                  <li><span className="ck"></span>Unlimited members & history</li>
                  <li><span className="ck"></span>Group video up to 50</li>
                  <li><span className="ck"></span>Recurring meetings & reminders</li>
                  <li><span className="ck"></span>Org hierarchy & client guests</li>
                  <li><span className="ck"></span>Screen share, voice/video messages</li>
                  <li><span className="ck"></span>50 GB/user · IST support</li>
                </ul>
              </div>

              {/* Plan 3: Business */}
              <div className="price-card">
                <div className="pname">Business</div>
                <div className="pdesc">For established teams needing control.</div>
                <div className="price-amt">
                  <span className="cur">₹</span>
                  <span className="num sq-amt">{isAnnual ? '199' : '249'}</span>
                  <span className="per">/user / mo</span>
                </div>
                <div className="price-cycle sq-cycle">{isAnnual ? 'billed annually' : 'billed monthly'}</div>
                <a href="#contact" className="btn btn-ghost" data-link>Choose Business</a>
                <ul className="plist">
                  <li className="ph">Everything in Growth, plus</li>
                  <li><span className="ck"></span>Group video up to 200</li>
                  <li><span className="ck"></span>Recording & transcripts</li>
                  <li><span className="ck"></span>Advanced admin & roles</li>
                  <li><span className="ck"></span>Analytics & audit logs</li>
                  <li><span className="ck"></span>India data residency</li>
                  <li><span className="ck"></span>250 GB/user · priority + WhatsApp</li>
                </ul>
              </div>

              {/* Plan 4: Enterprise */}
              <div className="price-card">
                <div className="pname">Enterprise</div>
                <div className="pdesc">For large & compliance-heavy orgs.</div>
                <div className="price-amt">
                  <span className="num" style={{ fontSize: '2rem' }}>Custom</span>
                </div>
                <div className="price-cycle">tailored to your needs</div>
                <a href="#contact" className="btn btn-ghost" data-link>Talk to sales</a>
                <ul className="plist">
                  <li className="ph">Everything in Business, plus</li>
                  <li><span className="ck"></span>SSO / SAML & SCIM</li>
                  <li><span className="ck"></span>DPDP & ISO compliance support</li>
                  <li><span className="ck"></span>Dedicated success manager</li>
                  <li><span className="ck"></span>99.9% uptime SLA</li>
                  <li><span className="ck"></span>Custom retention & storage</li>
                  <li><span className="ck"></span>24×7 priority support</li>
                </ul>
              </div>
            </div>
            <p className="gst-note">All prices are per user, per month, excluding 18% GST. Annual plans are billed yearly. Pay by UPI, net banking, debit or credit card.</p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="sec-head">
              <span className="eyebrow">Compare plans</span>
              <h2>What's in each plan</h2>
            </div>
            <div className="cmp-wrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th className="sq">Growth</th>
                    <th>Business</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={5} className="cmp-group">Messaging</td></tr>
                  <tr><td className="fn">Members</td><td>Up to 10</td><td className="sq">Unlimited</td><td>Unlimited</td><td>Unlimited</td></tr>
                  <tr><td className="fn">Message history</td><td>90 days</td><td className="sq">Unlimited</td><td>Unlimited</td><td>Custom</td></tr>
                  <tr><td className="fn">Client & guest access</td><td><span className="no">—</span></td><td className="sq"><span className="yes">✓</span></td><td><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td colSpan={5} className="cmp-group">Meetings</td></tr>
                  <tr><td className="fn">Group video</td><td>Up to 8</td><td className="sq">Up to 50</td><td>Up to 200</td><td>Custom</td></tr>
                  <tr><td className="fn">Recurring meetings</td><td><span className="no">—</span></td><td className="sq"><span className="yes">✓</span></td><td><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td className="fn">Recording & transcripts</td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td colSpan={5} className="cmp-group">Admin & security</td></tr>
                  <tr><td className="fn">Advanced admin & roles</td><td><span className="no">—</span></td><td className="sq">Basic</td><td><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td className="fn">Audit logs</td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td className="fn">SSO / SAML</td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="yes">✓</span></td></tr>
                  <tr><td className="fn">Storage / user</td><td>5 GB</td><td className="sq">50 GB</td><td>250 GB</td><td>Custom</td></tr>
                  <tr><td className="fn">Support</td><td>Email</td><td className="sq">IST chat</td><td>Priority + WhatsApp</td><td>24×7</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="sec-head">
              <span className="eyebrow">Pricing questions</span>
              <h2>Good to know</h2>
            </div>
            <div className="max-w-[760px] mx-auto flex flex-col gap-[11px]">
              <FaqItem
                question="Is there really a free plan?"
                answer="Yes — free forever for up to 10 members, with chat, calls, basic tasks and status. No card needed, no time limit."
              />
              <FaqItem
                question="What happens when I add or remove people?"
                answer="You're billed only for active members. Add anytime and we prorate it; remove them and your next bill adjusts."
              />
              <FaqItem
                question="Do you offer an annual discount?"
                answer="Yes — annual billing effectively gives you two months free versus monthly. Switch between the two anytime."
              />
              <FaqItem
                question="Will I get a GST invoice?"
                answer="Always. Every payment comes with a GST-compliant tax invoice in INR, so you can claim input tax credit."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
