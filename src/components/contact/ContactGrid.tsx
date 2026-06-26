import React, { useState } from 'react';
import Button from '../shared/Button';

export default function ContactGrid() {
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[46px] items-start">
            {/* Side info */}
            <div className="flex flex-col gap-6">
              <h2 className="font-sora font-bold text-[1.6rem] text-ink">Talk to us</h2>
              <p className="text-muted text-[1.02rem] leading-relaxed">
                Whether you're a 5-person startup or a 200-person company, we'll help you find the right fit.
              </p>
              <div className="flex gap-[14px] items-start">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-violet-soft grid place-items-center text-violet flex-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <b className="font-sora font-semibold text-[0.94rem] block text-ink">Email us</b>
                  <span className="text-muted text-[0.9rem]">hello@squeako.app</span>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-violet-soft grid place-items-center text-violet flex-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                </div>
                <div>
                  <b className="font-sora font-semibold text-[0.94rem] block text-ink">WhatsApp support</b>
                  <span className="text-muted text-[0.9rem]">Mon–Sat, 10 AM – 7 PM IST</span>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-violet-soft grid place-items-center text-violet flex-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[21px] h-[21px]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <b className="font-sora font-semibold text-[0.94rem] block text-ink">Based in India</b>
                  <span className="text-muted text-[0.9rem]">Supporting teams across 30+ countries</span>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="bg-white border border-hairline rounded-[20px] p-8 shadow-sh-md w-full">
              {!submitted ? (
                <form id="leadForm" onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    <div>
                      <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">Full name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-[13px_15px] rounded-[12px] border font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white ${
                          errors.name ? 'border-[#D23A57]' : 'border-hairline'
                        }`}
                      />
                      {errors.name && <div className="text-[#D23A57] text-[0.78rem] mt-[5px]">Please enter your name</div>}
                    </div>
                    <div>
                      <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">Work email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-[13px_15px] rounded-[12px] border font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white ${
                          errors.email ? 'border-[#D23A57]' : 'border-hairline'
                        }`}
                      />
                      {errors.email && <div className="text-[#D23A57] text-[0.78rem] mt-[5px]">Enter a valid email</div>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">Company name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full p-[13px_15px] rounded-[12px] border font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white ${
                        errors.company ? 'border-[#D23A57]' : 'border-hairline'
                      }`}
                    />
                    {errors.company && <div className="text-[#D23A57] text-[0.78rem] mt-[5px]">Please enter your company</div>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    <div>
                      <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">Team size</label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className={`w-full p-[13px_15px] rounded-[12px] border font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white ${
                          errors.size ? 'border-[#D23A57]' : 'border-hairline'
                        }`}
                      >
                        <option value="">Select…</option>
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="200+">200+</option>
                      </select>
                      {errors.size && <div className="text-[#D23A57] text-[0.78rem] mt-[5px]">Select your team size</div>}
                    </div>
                    <div>
                      <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">I'm interested in</label>
                      <select
                        name="intent"
                        value={formData.intent}
                        onChange={handleInputChange}
                        className={`w-full p-[13px_15px] rounded-[12px] border font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white ${
                          errors.intent ? 'border-[#D23A57]' : 'border-hairline'
                        }`}
                      >
                        <option value="">Select…</option>
                        <option value="Starting a free trial">Starting a free trial</option>
                        <option value="Booking a demo">Booking a demo</option>
                        <option value="Switching from Slack/Teams">Switching from Slack/Teams</option>
                        <option value="Enterprise pricing">Enterprise pricing</option>
                      </select>
                      {errors.intent && <div className="text-[#D23A57] text-[0.78rem] mt-[5px]">Select an option</div>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sora font-semibold text-[0.87rem] mb-[7px] text-ink">Anything we should know? (optional)</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your team or what you use today…"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-[13px_15px] rounded-[12px] border border-hairline font-inter text-[0.97rem] text-ink bg-[#fcfbff] transition-all focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft focus:bg-white resize-vertical min-h-[92px]"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Get started
                  </Button>
                  <p className="text-center text-[0.78rem] text-muted mt-3">
                    By submitting, you agree to be contacted about Squeako. We'll never share your details.
                  </p>
                </form>
              ) : (
                <div className="text-center py-[28px] px-2.5">
                  <div className="w-[62px] h-[62px] rounded-full bg-mint-wash grid place-items-center text-mint-deep mx-auto mb-4 text-[1.9rem] font-bold">
                    ✓
                  </div>
                  <h3 className="font-sora font-bold text-[1.35rem] text-ink mb-[10px]">You're all set! 🎉</h3>
                  <p className="text-muted">Thanks for reaching out. Our team will get back to you within one business day.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
