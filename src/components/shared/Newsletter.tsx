'use client';

import React, { useState } from 'react';
import Button from './Button';
import Eyebrow from './Eyebrow';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cleanEmail)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setIsSubmitted(true);
  };

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="max-w-[560px] mx-auto text-center">
            <Eyebrow>Stay in the loop</Eyebrow>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-sora font-extrabold mt-3 mb-2 text-ink">
              Tips for teams, once a month
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Practical playbooks, no spam. Unsubscribe anytime.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 mt-5" noValidate>
                <input
                  type="email"
                  name="news"
                  placeholder="you@company.com"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsInvalid(false);
                  }}
                  className={`flex-1 py-[14px] px-4 rounded-[13px] border-[1.5px] font-inter text-[1rem] bg-white transition-all duration-150 outline-none focus:border-violet focus:ring-4 focus:ring-violet-soft ${isInvalid ? 'border-[#F0506E]' : 'border-hairline'
                    }`}
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </form>
            ) : (
              <p className="text-mint-deep font-semibold text-[0.9rem] mt-3">
                ✓ You're subscribed — see you in your inbox!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
