'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="py-8 px-0 mt-8">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8">
        <footer className="bg-gradient-to-br from-[#17110A] to-[#0F0F0F] text-[#9C968E] border border-white/5 rounded-[30px] relative overflow-hidden py-[clamp(34px,5vw,68px)] px-6 md:px-12">
          <div className="w-full">

            {/* Tier 1: 6 Link Columns Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[32px] pb-[32px] border-b border-white/5">
              {/* Product Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Product</h5>
                <a href="/features" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Features</a>
                <a href="/pricing" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Pricing</a>
                <a href="/enterprise" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Enterprise</a>
                <a href="/templates" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Templates</a>
                <a href="/download" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Download apps</a>
                <a href="/integrations" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Integrations</a>
              </div>

              {/* Solutions Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Solutions</h5>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">For Founders</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">For Sales</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">For Engineering</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">For HR & Ops</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">For Agencies</a>
              </div>

              {/* Use Cases Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Use Cases</h5>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">IT & Software</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">D2C & Retail</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Fintech</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Education</a>
                <a href="/solutions" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Logistics</a>
              </div>

              {/* Resources Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Resources</h5>
                <a href="/resources" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Blog & guides</a>
                <a href="/stories" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Customer stories</a>
                <a href="/roadmap" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">What's new</a>
                <a href="/contact" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Help centre</a>
                <a href="/contact" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">API docs</a>
              </div>

              {/* Compare Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Compare</h5>
                <a href="/compare" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">vs Slack</a>
                <a href="/compare" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">vs MS Teams</a>
                <a href="/compare" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">vs Flock</a>
                <a href="/compare" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">vs Google Chat</a>
                <a href="/compare" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">vs Zoom</a>
              </div>

              {/* Company Col */}
              <div className="flex flex-col">
                <h5 className="font-poppins font-bold text-[0.8rem] tracking-[0.04em] uppercase text-white mb-[14px]">Company</h5>
                <a href="/about" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">About</a>
                <a href="/contact" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Contact</a>
                <a href="/contact" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Book a demo</a>
                <a href="/contact" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Careers</a>
                <a href="/security" className="block py-[6px] text-[0.9rem] text-[#a79fc4] hover:text-white transition-colors duration-150">Security</a>
              </div>
            </div>

            {/* Tier 2: AI Summary & Newsletter (Horizontal layout matching screenshot) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[48px] py-[32px] border-b border-white/5 items-center">
              {/* Left Side: AI Summary Info */}
              <div className="flex flex-col gap-2">
                <h5 className="font-poppins font-bold text-[1rem] text-white flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#16D196]">
                    <path d="M9 2L7.5 7.5 2 9l5.5 1.5L9 16l1.5-5.5L16 9l-5.5-1.5zM19 13l-1 3.5-3.5 1 3.5 1 1 3.5 1-3.5 3.5-1-3.5-1z" />
                  </svg>
                  Request an AI summary
                </h5>
                <p className="text-[0.88rem] text-[#a79fc4] leading-relaxed max-w-[480px]">
                  Learn more about how Squeako is improving team productivity and collaboration.
                </p>
                <div className="flex items-center gap-6 mt-3">
                  {/* OpenAI Link & Icon */}
                  <a
                    href="https://chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
                    aria-label="Visit ChatGPT"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-[32px] h-[32px] !text-[#9C968E] group-hover:!text-[#16D196] transition-colors duration-200"
                    >
                      <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664z" />
                    </svg>
                  </a>

                  {/* Anthropic Link & Asterisk Icon */}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
                    aria-label="Visit Claude AI"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[32px] h-[32px] !text-[#9C968E] group-hover:!text-[#16D196] transition-colors duration-200"
                    >
                      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
                    </svg>
                  </a>

                  {/* Cohere Link & Geometric Lattice Icon */}
                  <a
                    href="https://cohere.com/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
                    aria-label="Visit Cohere Coral Chat"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[32px] h-[32px] !text-[#9C968E] group-hover:!text-[#16D196] transition-colors duration-200"
                    >
                      {/* Central vertical line */}
                      <line x1="12" y1="2" x2="12" y2="22" />

                      {/* Left and right outer vertical boundaries */}
                      <line x1="6" y1="9" x2="6" y2="15" />
                      <line x1="18" y1="9" x2="18" y2="15" />

                      {/* Left and right inner vertical boundaries */}
                      <line x1="10" y1="9" x2="10" y2="15" />
                      <line x1="14" y1="9" x2="14" y2="15" />

                      {/* Horizontal boundaries */}
                      <line x1="6" y1="9" x2="18" y2="9" />
                      <line x1="6" y1="15" x2="18" y2="15" />

                      {/* Outer top chevrons */}
                      <line x1="6" y1="9" x2="12" y2="2" />
                      <line x1="18" y1="9" x2="12" y2="2" />

                      {/* Outer bottom chevrons */}
                      <line x1="6" y1="15" x2="12" y2="22" />
                      <line x1="18" y1="15" x2="12" y2="22" />

                      {/* Inner top chevrons */}
                      <line x1="10" y1="9" x2="12" y2="2" />
                      <line x1="14" y1="9" x2="12" y2="2" />

                      {/* Inner bottom chevrons */}
                      <line x1="10" y1="15" x2="12" y2="22" />
                      <line x1="14" y1="15" x2="12" y2="22" />

                      {/* Left crossing diagonals */}
                      <line x1="6" y1="9" x2="12" y2="15" />
                      <line x1="6" y1="15" x2="12" y2="9" />

                      {/* Right crossing diagonals */}
                      <line x1="18" y1="9" x2="12" y2="15" />
                      <line x1="18" y1="15" x2="12" y2="9" />
                    </svg>
                  </a>
                </div>

                {/* 4 Trusted Badges (Monochrome black and white) */}
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <img src="/trusted-icons/Mask-group-2.webp" alt="DPDP Act 2023" className="h-[28px] object-contain grayscale opacity-50 hover:opacity-90 transition-all duration-200" />
                  <img src="/trusted-icons/Mask-group-5.webp" alt="GDPR Compliant" className="h-[28px] object-contain grayscale opacity-50 hover:opacity-90 transition-all duration-200" />
                  <img src="/trusted-icons/Mask-group-6.webp" alt="ISO 27001 Certified" className="h-[28px] object-contain grayscale opacity-50 hover:opacity-90 transition-all duration-200" />
                  <img src="/trusted-icons/Mask-group.webp" alt="AICPA SOC 2" className="h-[28px] object-contain grayscale opacity-50 hover:opacity-90 transition-all duration-200" />
                </div>
              </div>

              {/* Right Side: Newsletter Subscription */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between w-full lg:justify-end">
                <span className="font-poppins font-semibold text-[0.95rem] text-white whitespace-nowrap">
                  Get the latest Squeako insights
                </span>
                <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    required
                    placeholder="Business Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border border-white/15 focus:border-[#16D196] text-white rounded-lg px-4 py-2 text-[0.88rem] focus:outline-none w-full md:w-[220px] transition-colors duration-150"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-[38px] h-[38px] rounded-full bg-[#16D196] text-[#0B1818] hover:bg-white hover:text-[#0B1818] grid place-items-center transition-all duration-200 ease-in-out hover:scale-[1.05] active:scale-[0.98] flex-none cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Tier 3: Huge Logo & Bottom Info Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[48px] pt-[32px]">
              {/* Left: Giant Logo */}
              <div className="flex items-center justify-start lg:-ml-[10px]">
                <div
                  className="font-poppins font-black text-[5.5rem] md:text-[8.5rem] text-[#16D196]/15 tracking-[-0.05em] leading-none select-none whitespace-nowrap"
                  style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                  squeako
                </div>
              </div>

              {/* Right: Info, Links, Utility and Copyright */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Who we are */}
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-white text-[0.95rem]">Who we are</span>
                  <p className="text-[0.88rem] text-[#a79fc4] leading-relaxed">
                    Squeako is an AI-native workspace built and priced for Indian startups and SMBs, bringing your chat, calls, meetings, tasks, and org chart under one roof.
                  </p>
                </div>

                {/* Follow us */}
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-white text-[0.95rem]">Follow us</span>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] font-medium mt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#a79fc4] hover:text-white hover:underline transition-colors">LinkedIn &rarr;</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#a79fc4] hover:text-white hover:underline transition-colors">YouTube &rarr;</a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-[#a79fc4] hover:text-white hover:underline transition-colors">X &rarr;</a>
                  </div>
                </div>

                {/* Bottom span with utility links & copyright info */}
                <div className="col-span-1 md:col-span-2 pt-4 flex flex-col gap-4">
                  {/* Utility Links */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] font-medium text-[#a79fc4] border-t border-white/5 pt-6">
                    <a href="/terms" className="hover:text-white hover:underline">Terms</a>
                    <a href="/privacy" className="hover:text-white hover:underline">Privacy</a>
                    <a href="/security" className="hover:text-white hover:underline">Security ↗</a>
                    <a href="/" className="hover:text-white hover:underline">Accessibility</a>
                    <a href="/" className="hover:text-white hover:underline">Status ↗</a>
                  </div>

                  {/* Copyright and Made in India details */}
                  <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 text-[#a79fc4] text-[0.84rem] pt-1">
                    <span>&copy; 2026 Squeako. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                      Made in India 🇮🇳 &middot; A Probey Services product
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}
