import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function Eyebrow({ children, light = false, className = '' }: EyebrowProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center font-space-mono text-[0.68rem] tracking-[0.14em] uppercase font-bold py-1.5 px-3.5 border border-[#16D196] bg-[#16D196]/5 text-white select-none shadow-[inset_0_0_6px_rgba(22,209,150,0.25)] ${className}`}
    >
      {children}
      {/* Corner green dots centered on sharp corners without shadow */}
      <span className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] rounded-full bg-[#16D196] block"></span>
      <span className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] rounded-full bg-[#16D196] block"></span>
      <span className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] rounded-full bg-[#16D196] block"></span>
      <span className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] rounded-full bg-[#16D196] block"></span>
    </span>
  );
}
