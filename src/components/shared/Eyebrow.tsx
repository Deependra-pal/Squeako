import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function Eyebrow({ children, light = false, className = '' }: EyebrowProps) {
  return (
    <span
      className={`font-space-mono text-[0.72rem] tracking-[0.18em] uppercase font-bold inline-flex items-center gap-2 before:content-[""] before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#6ED190] text-white ${
        light
          ? 'before:shadow-[0_0_0_3px_rgba(110,209,144,0.25)]'
          : 'before:shadow-[0_0_0_3px_rgba(110,209,144,0.18)]'
      } ${className}`}
    >
      {children}
    </span>
  );
}
