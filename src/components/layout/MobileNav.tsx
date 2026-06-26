'use client';

import React from 'react';
import Button from '../shared/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      id="mobileNav"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className={`fixed inset-0 bg-ink/40 z-[200] transition-opacity duration-250 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div
        className={`absolute top-0 right-0 bottom-0 w-min-[340px] w-[86vw] max-w-[340px] bg-white p-5 overflow-y-auto transition-transform duration-[280ms] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          id="mclose"
          aria-label="Close"
          onClick={onClose}
          className="bg-transparent border-0 text-[1.6rem] cursor-pointer float-right text-ink leading-none hover:text-violet transition-colors"
        >
          &times;
        </button>
        <div className="clear-both"></div>

        {/* Links Group */}
        <div className="mt-4">
          <div className="border-b border-hairline pb-2 mb-2">
            <a
              href="/features"
              onClick={handleLinkClick}
              className="block py-3 px-2 font-poppins font-semibold text-[1.02rem] text-ink hover:text-violet transition-colors"
            >
              Features
            </a>
          </div>
          <div className="border-b border-hairline pb-2 mb-2">
            <a
              href="/pricing"
              onClick={handleLinkClick}
              className="block py-3 px-2 font-poppins font-semibold text-[1.02rem] text-ink hover:text-violet transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="border-b border-hairline pb-2 mb-2">
            <h6 className="font-space-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted py-2.5 px-2">
              Solutions
            </h6>
            <a
              href="/solutions"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              For Founders
            </a>
            <a
              href="/solutions"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              For Sales
            </a>
            <a
              href="/solutions"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              For Engineering
            </a>
            <a
              href="/solutions"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              By industry
            </a>
          </div>

          <div className="border-b border-hairline pb-2 mb-2">
            <h6 className="font-space-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted py-2.5 px-2">
              Compare
            </h6>
            <a
              href="/compare"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              vs Slack
            </a>
            <a
              href="/compare"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              vs Microsoft Teams
            </a>
            <a
              href="/compare"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              vs Flock
            </a>
          </div>

          <div className="border-b border-hairline pb-2 mb-2">
            <h6 className="font-space-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted py-2.5 px-2">
              Resources
            </h6>
            <a
              href="/resources"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Blog & guides
            </a>
            <a
              href="/templates"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Templates
            </a>
            <a
              href="/stories"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Customer stories
            </a>
            <a
              href="/enterprise"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Enterprise
            </a>
            <a
              href="/roadmap"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Roadmap
            </a>
            <a
              href="/security"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Security
            </a>
            <a
              href="/integrations"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Integrations
            </a>
            <a
              href="/download"
              onClick={handleLinkClick}
              className="block py-[9px] pr-2 pl-[18px] text-[0.92rem] text-muted hover:text-violet transition-colors"
            >
              Download apps
            </a>
          </div>
        </div>

        {/* CTA Buttons in Panel */}
        <div className="mt-4 flex flex-col gap-2.5">
          <Button href="/contact" onClick={handleLinkClick} variant="ghost" className="w-full hover:!bg-white hover:!text-[#6ED190] hover:!border-[#6ED190] hover:!shadow-[0_2px_10px_rgba(34,18,80,0.06)] !font-poppins">
            Sign in
          </Button>
          <Button href="/contact" onClick={handleLinkClick} variant="primary" className="w-full !font-poppins">
            Start free
          </Button>
        </div>
      </div>
    </div>
  );
}
