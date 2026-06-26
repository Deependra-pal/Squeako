'use client';

import React, { useState } from 'react';

interface AnnouncementBarProps {
  onLinkClick?: () => void;
}

export default function AnnouncementBar({ onLinkClick }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id="announce"
      className="bg-[#6ED190] text-[#0B1818] text-[0.86rem] text-center py-2 px-10 relative font-medium z-100"
    >
      <span className="font-bold">New</span> — Squeako is now on Android & iOS.{' '}
      <a
        href="/pricing"
        onClick={onLinkClick}
        className="font-bold underline underline-offset-2 ml-1.5 whitespace-nowrap"
      >
        Get 3 months free on annual plans &rarr;
      </a>
      <button
        id="announceX"
        aria-label="Dismiss"
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-[#0B1818]/70 hover:text-[#0B1818] cursor-pointer text-[1.1rem] leading-none p-1 transition-colors duration-150"
      >
        &times;
      </button>
    </div>
  );
}
