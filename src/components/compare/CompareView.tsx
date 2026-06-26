import React from 'react';

interface CompareViewProps {
  active: boolean;
}

export default function CompareView({ active }: CompareViewProps) {
  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="compare">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Compare</span>
          <h1>Squeako vs the tools you're <span className="grad-text">probably overpaying for.</span></h1>
          <p>One app instead of three or four — at a price built for India. Here's how Squeako stacks up.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-white">
            <div className="cmp-wrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="sq">Squeako</th>
                    <th>Slack</th>
                    <th>MS Teams</th>
                    <th>Flock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fn">Starting paid price (/user/mo)</td>
                    <td className="sq">₹99</td>
                    <td>~₹650</td>
                    <td>~₹770*</td>
                    <td>~₹385</td>
                  </tr>
                  <tr>
                    <td className="fn">Chat & group messaging</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td><span className="yes">✓</span></td>
                    <td><span className="yes">✓</span></td>
                    <td><span className="yes">✓</span></td>
                  </tr>
                  <tr>
                    <td className="fn">Audio & video calls included</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Limited</td>
                    <td><span className="yes">✓</span></td>
                    <td className="partial">Limited</td>
                  </tr>
                  <tr>
                    <td className="fn">Recurring meetings & reminders</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Add-on</td>
                    <td><span className="yes">✓</span></td>
                    <td className="partial">Basic</td>
                  </tr>
                  <tr>
                    <td className="fn">Built-in tasks</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Via apps</td>
                    <td className="partial">Planner</td>
                    <td><span className="yes">✓</span></td>
                  </tr>
                  <tr>
                    <td className="fn">Presence incl. on-break</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Basic</td>
                    <td className="partial">Basic</td>
                    <td className="partial">Basic</td>
                  </tr>
                  <tr>
                    <td className="fn">Org hierarchy chart</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td><span className="no">—</span></td>
                    <td><span className="yes">✓</span></td>
                    <td><span className="no">—</span></td>
                  </tr>
                  <tr>
                    <td className="fn">Client / guest access</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Paid</td>
                    <td className="partial">Paid</td>
                    <td><span className="yes">✓</span></td>
                  </tr>
                  <tr>
                    <td className="fn">Data stored in India</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td><span className="no">—</span></td>
                    <td className="partial">Select</td>
                    <td className="partial">Varies</td>
                  </tr>
                  <tr>
                    <td className="fn">GST invoice in INR</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td className="partial">Reseller</td>
                    <td className="partial">Reseller</td>
                    <td className="partial">Varies</td>
                  </tr>
                  <tr>
                    <td className="fn">IST chat & WhatsApp support</td>
                    <td className="sq"><span className="yes">✓</span></td>
                    <td><span className="no">—</span></td>
                    <td><span className="no">—</span></td>
                    <td className="partial">Email</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="gst-note">*MS Teams business chat is typically bought inside Microsoft 365 Business Standard (~₹770/user/mo). Competitor prices are indicative published figures, billed annually, before GST, 2026, and may change. Feature availability varies by plan.</p>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-grad">
            <div className="cta-inner">
              <h2>Switch without the headache</h2>
              <p>We'll help you move from Slack or Teams, set up your groups, and get everyone talking.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-light btn-lg" data-link>Book a switch call</a>
                <a href="#pricing" className="btn btn-outline-light btn-lg" data-link>See pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
