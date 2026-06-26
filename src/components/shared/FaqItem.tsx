'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FaqItem({ question, answer, className = '' }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white border transition-all duration-200 rounded-[14px] overflow-hidden ${
        isOpen ? 'border-[#d8d1f5] shadow-sh-sm' : 'border-[#E6DDCD]'
      } ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent border-0 py-[19px] px-[21px] cursor-pointer flex justify-between items-center gap-4 font-sora font-semibold text-[1rem] text-[#17120B] focus:outline-none"
      >
        <span>{question}</span>
        <span
          className={`w-[26px] h-[26px] rounded-[8px] flex items-center justify-center font-extrabold text-[1.1rem] flex-none transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-180 bg-[#6ED190] text-[#0B1818]' : 'bg-[#E6F9EE] text-[#137A48]'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-[21px] pb-[19px] text-[#7C766C] text-[0.95rem] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
