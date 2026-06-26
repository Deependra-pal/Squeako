'use client';

import React, { useState } from 'react';

interface ContactViewProps {
  active: boolean;
}

export default function ContactView({ active }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    intent: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    company: false,
    size: false,
    intent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim()),
      company: !formData.company.trim(),
      size: !formData.size,
      intent: !formData.intent,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (!hasErrors) {
      setSubmitted(true);
    }
  };

  return (
    <section className={`view ${active ? 'active' : ''}`} data-view="contact">
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Get started</span>
          <h1>Let's get your team <span className="grad-text">on Squeako.</span></h1>
          <p>Start a free workspace or book a quick demo. Tell us a little about your team and we'll take it from there.</p>
        </div>
      </div>
      <div className="sec">
        <div className="wrap reveal">
          <div className="box box-lilac">
            <div className="contact-grid">
              <div className="contact-side">
                <h2>Talk to us</h2>
                <p>Whether you're a 5-person startup or a 200-person company, we'll help you find the right fit.</p>
                <div className="ci-row">
                  <div className="ci-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div><b>Email us</b><span>hello@squeako.app</span></div>
                </div>
                <div className="ci-row">
                  <div className="ci-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>
                    </svg>
                  </div>
                  <div><b>WhatsApp support</b><span>Mon–Sat, 10 AM – 7 PM IST</span></div>
                </div>
                <div className="ci-row">
                  <div className="ci-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div><b>Based in India</b><span>Supporting teams across 30+ countries</span></div>
                </div>
              </div>

              <div className="form-card">
                {!submitted ? (
                  <form id="leadForm" onSubmit={handleSubmit} noValidate>
                    <div className="fg two">
                      <div className={errors.name ? 'invalid' : ''}>
                        <label>Full name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <div className="form-err">Please enter your name</div>
                      </div>
                      <div className={errors.email ? 'invalid' : ''}>
                        <label>Work email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <div className="form-err">Enter a valid email</div>
                      </div>
                    </div>
                    <div className={`fg ${errors.company ? 'invalid' : ''}`}>
                      <label>Company name</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                      <div className="form-err">Please enter your company</div>
                    </div>
                    <div className="fg two">
                      <div className={errors.size ? 'invalid' : ''}>
                        <label>Team size</label>
                        <select name="size" value={formData.size} onChange={handleInputChange}>
                          <option value="">Select…</option>
                          <option value="1-10">1–10</option>
                          <option value="11-50">11–50</option>
                          <option value="51-200">51–200</option>
                          <option value="200+">200+</option>
                        </select>
                        <div className="form-err">Select your team size</div>
                      </div>
                      <div className={errors.intent ? 'invalid' : ''}>
                        <label>I'm interested in</label>
                        <select name="intent" value={formData.intent} onChange={handleInputChange}>
                          <option value="">Select…</option>
                          <option value="Starting a free trial">Starting a free trial</option>
                          <option value="Booking a demo">Booking a demo</option>
                          <option value="Switching from Slack/Teams">Switching from Slack/Teams</option>
                          <option value="Enterprise pricing">Enterprise pricing</option>
                        </select>
                        <div className="form-err">Select an option</div>
                      </div>
                    </div>
                    <div className="fg">
                      <label>Anything we should know? (optional)</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your team or what you use today…"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                      Get started
                    </button>
                    <p className="calc-note" style={{ marginTop: '12px' }}>
                      By submitting, you agree to be contacted about Squeako. We'll never share your details.
                    </p>
                  </form>
                ) : (
                  <div className="form-success" id="formSuccess" style={{ display: 'block' }}>
                    <div className="sx">✓</div>
                    <h3>You're all set! 🎉</h3>
                    <p>Thanks for reaching out. Our team will get back to you within one business day.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
