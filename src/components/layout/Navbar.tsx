'use client';

import React, { useState, useEffect, useRef } from 'react';
import AnnouncementBar from './AnnouncementBar';
import MobileNav from './MobileNav';
import Button from '../shared/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menus on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleMegaToggle = (menuName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMega(openMega === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth > 1024) {
      setOpenMega(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setOpenMega(null);
    }
  };

  const handleLinkClick = () => {
    setIsMobileOpen(false);
    setOpenMega(null);
  };

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar onLinkClick={handleLinkClick} />

      {/* Nav Bar Container */}
      <nav
        ref={navbarRef}
        className={`sticky top-0 z-[100] bg-paper/86 backdrop-blur-md border-b border-hairline transition-all duration-300 transform translate-y-0 ${isScrolled ? 'shadow-[0_6px_24px_rgba(34,18,80,0.06)]' : ''
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-[22px] lg:px-[40px] py-[18px] flex items-center justify-between gap-[18px]">
          {/* Logo */}
          <a href="/" onClick={handleLinkClick} className=" logo flex items-center flex-none">
            <img src="/logo/1782391827071-a1ef33c7-4e28-4178-ae95-96525ad734f0.png" alt="Squeako Logo" className="w-[150px] h-[90px] -my-6 object-contain" />
          </a>

          {/* Desktop Nav Menu */}
          <div className="hidden lg:flex items-center gap-[2px] ml-[10px]">
            {/* Product Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('product', e)}
                className={`inline-flex items-center gap-[5px] py-[9px] px-[13px] rounded-[10px] font-poppins font-medium text-[0.95rem] text-ink bg-transparent border-0 cursor-pointer transition-colors duration-150 ${openMega === 'product' ? 'bg-violet-soft text-violet' : 'hover:bg-violet-soft hover:text-violet'
                  }`}
              >
                Product
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${openMega === 'product' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Mega Dropdown */}
              <div
                className={`absolute top-[calc(100%+10px)] -left-[80px] w-[940px] bg-white border border-hairline rounded-[18px] shadow-sh-lg p-[22px] transition-all duration-200 z-[99] before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${openMega === 'product'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="grid grid-cols-[1fr_1fr_1fr_1.4fr] gap-[26px]">
                  {/* Col 1 */}
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">Communicate</h6>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Chat & channels</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">1:1, groups & threads</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Voice & video messages</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Async updates</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.3-4.3" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Search</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Find anything, fast</span>
                      </span>
                    </a>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">Meet</h6>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M23 7l-7 5 7 5V7z" />
                          <rect x="1" y="5" width="15" height="14" rx="2" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Audio & video calls</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">With screen share</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Meetings & reminders</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Recurring too</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8M12 17v4" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Recording</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Recap & transcripts</span>
                      </span>
                    </a>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">Organise</h6>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M9 11l3 3L22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Tasks & to-dos</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">From any message</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Presence & status</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Incl. on-break</span>
                      </span>
                    </a>
                    <a className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px] mt-1" href="/features" onClick={handleLinkClick}>
                      <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <rect x="9" y="2" width="6" height="6" rx="1" />
                          <rect x="2" y="16" width="6" height="6" rx="1" />
                          <rect x="16" y="16" width="6" height="6" rx="1" />
                          <path d="M12 8v4M12 12H5v4M12 12h7v4" />
                        </svg>
                      </span>
                      <span>
                        <b className="font-sora font-semibold text-[0.88rem] block leading-[1.3] text-ink">Org hierarchy</b>
                        <span className="text-[0.76rem] text-muted block leading-[1.35]">Live reporting chart</span>
                      </span>
                    </a>
                  </div>

                  {/* Col 4 - Security Grid */}
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">Security & Trust</h6>
                    <div className="flex items-center gap-3 mt-3">
                      <img src="/trusted-icons/Mask-group-2.webp" alt="DPDP Act 2023" className="w-8 h-8 object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-200" />
                      <img src="/trusted-icons/Mask-group-5.webp" alt="GDPR Compliant" className="w-8 h-8 object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-200" />
                      <img src="/trusted-icons/Mask-group-6.webp" alt="ISO 27001 Certified" className="w-8 h-8 object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-200" />
                      <img src="/trusted-icons/Mask-group.webp" alt="AICPA SOC 2" className="w-8 h-8 object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-200" />
                    </div>
                  </div>
                </div>

                {/* Promo Strip */}
                <div className="bg-lilac rounded-[14px] p-4 mt-4 text-ink">
                  <b className="font-sora font-bold text-[0.86rem] block mb-1">Client & guest access</b>
                  <span className="text-[0.78rem] text-muted">Invite clients into specific groups — they only see what you share.</span>
                </div>

                {/* Footer Link */}
                <div className="mt-3.5 pt-3.5 border-t border-hairline">
                  <a className="text-violet font-semibold text-[0.86rem] font-sora inline-block hover:underline" href="/features" onClick={handleLinkClick}>
                    See all features &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('solutions', e)}
                className={`inline-flex items-center gap-[5px] py-[9px] px-[13px] rounded-[10px] font-poppins font-medium text-[0.95rem] text-ink bg-transparent border-0 cursor-pointer transition-colors duration-150 ${openMega === 'solutions' ? 'bg-violet-soft text-violet' : 'hover:bg-violet-soft hover:text-violet'
                  }`}
              >
                Solutions
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${openMega === 'solutions' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+10px)] left-0 w-[460px] bg-white border border-hairline rounded-[18px] shadow-sh-lg p-[22px] transition-all duration-200 z-[99] before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${openMega === 'solutions'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="grid grid-cols-2 gap-[26px]">
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">By team</h6>
                    {['Founders', 'Sales', 'Marketing', 'Engineering', 'Customer Support', 'HR & Ops'].map((item) => (
                      <a key={item} className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/solutions" onClick={handleLinkClick}>
                        <span><b className="font-sora font-semibold text-[0.88rem] block text-ink">{item}</b></span>
                      </a>
                    ))}
                  </div>
                  <div>
                    <h6 className="font-space-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted mb-3">By industry</h6>
                    {['IT & Software', 'D2C & Retail', 'Fintech', 'Agencies', 'Education', 'Logistics'].map((item) => (
                      <a key={item} className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/solutions" onClick={handleLinkClick}>
                        <span><b className="font-sora font-semibold text-[0.88rem] block text-ink">{item}</b></span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-3.5 pt-3.5 border-t border-hairline">
                  <a className="text-violet font-semibold text-[0.86rem] font-sora inline-block hover:underline" href="/solutions" onClick={handleLinkClick}>
                    Explore all solutions &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Link */}
            <div className="relative">
              <a
                href="/pricing"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-[5px] py-[9px] px-[13px] rounded-[10px] font-poppins font-medium text-[0.95rem] text-ink hover:bg-violet-soft hover:text-violet transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Compare Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('compare')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('compare', e)}
                className={`inline-flex items-center gap-[5px] py-[9px] px-[13px] rounded-[10px] font-poppins font-medium text-[0.95rem] text-ink bg-transparent border-0 cursor-pointer transition-colors duration-150 ${openMega === 'compare' ? 'bg-violet-soft text-violet' : 'hover:bg-violet-soft hover:text-violet'
                  }`}
              >
                Compare
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${openMega === 'compare' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+10px)] left-0 w-[240px] bg-white border border-hairline rounded-[18px] shadow-sh-lg p-[22px] transition-all duration-200 z-[99] before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${openMega === 'compare'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
                  }`}
              >
                {['vs Slack', 'vs Microsoft Teams', 'vs Flock', 'vs Google Chat', 'vs Zoom'].map((item) => (
                  <a key={item} className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href="/compare" onClick={handleLinkClick}>
                    <span><b className="font-sora font-semibold text-[0.88rem] block text-ink">{item}</b></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('resources', e)}
                className={`inline-flex items-center gap-[5px] py-[9px] px-[13px] rounded-[10px] font-poppins font-medium text-[0.95rem] text-ink bg-transparent border-0 cursor-pointer transition-colors duration-150 ${openMega === 'resources' ? 'bg-violet-soft text-violet' : 'hover:bg-violet-soft hover:text-violet'
                  }`}
              >
                Resources
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${openMega === 'resources' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+10px)] left-0 w-[240px] bg-white border border-hairline rounded-[18px] shadow-sh-lg p-[22px] transition-all duration-200 z-[99] before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${openMega === 'resources'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
                  }`}
              >
                {[
                  { name: 'Blog & guides', path: '/resources' },
                  { name: 'Templates', path: '/templates' },
                  { name: 'Customer stories', path: '/stories' },
                  { name: 'Enterprise', path: '/enterprise' },
                  { name: 'Roadmap / What\'s new', path: '/roadmap' },
                  { name: 'Security', path: '/security' },
                  { name: 'Integrations', path: '/integrations' },
                  { name: 'Download apps', path: '/download' },
                ].map((item) => (
                  <a key={item.name} className="flex gap-2.5 items-start py-2 px-[9px] rounded-[10px] transition-colors duration-150 hover:bg-lilac -mx-[9px]" href={item.path} onClick={handleLinkClick}>
                    <span><b className="font-sora font-semibold text-[0.88rem] block text-ink">{item.name}</b></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Area */}
          <div className="ml-auto flex items-center gap-2.5 flex-none">
            <a href="/contact" onClick={handleLinkClick} className="font-poppins font-semibold text-[0.95rem] py-[9px] px-[18px] rounded-[14px] text-ink hover:bg-violet-soft hover:text-violet transition-all duration-150 hidden lg:inline-block">
              Get a demo
            </a>
            <a href="/contact" onClick={handleLinkClick} className="font-poppins font-semibold text-[0.95rem] py-[9px] px-[13px] rounded-[10px] text-ink hover:bg-violet-soft hover:text-violet transition-all duration-150 hidden lg:inline-block">
              Sign in
            </a>
            <Button href="/contact" onClick={handleLinkClick} variant="primary" className="!py-[9px] !px-[18px] !text-[0.95rem] !font-poppins">
              Start free
            </Button>
            {/* Hamburger Button */}
            <button
              id="hamburger"
              aria-label="Menu"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2 z-[201] focus:outline-none`}
            >
              <span className={`w-6 h-[2.5px] bg-ink rounded-[2px] transition-transform duration-250 ${isMobileOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}></span>
              <span className={`w-6 h-[2.5px] bg-ink rounded-[2px] transition-opacity duration-250 ${isMobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[2.5px] bg-ink rounded-[2px] transition-transform duration-250 ${isMobileOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
