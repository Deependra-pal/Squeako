import React from 'react';

interface PackCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export default function PackCard({ icon, title, subtitle, className = '' }: PackCardProps) {
  return (
    <div
      className={`flex items-start gap-[13px] bg-white border border-hairline rounded-[13px] p-[18px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sh-sm ${className}`}
    >
      <span className="w-[38px] h-[38px] rounded-[10px] bg-mint-wash text-mint-deep grid place-items-center flex-none">
        <span className="w-[19px] h-[19px] flex items-center justify-center">{icon}</span>
      </span>
      <div>
        <b className="font-sora font-semibold text-[0.94rem] text-ink block leading-snug">
          {title}
        </b>
        <span className="text-[0.8rem] text-muted block mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
