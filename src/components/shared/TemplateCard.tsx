import React from 'react';

interface TemplateCardProps {
  topBg: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function TemplateCard({
  topBg,
  icon,
  title,
  description,
  className = '',
}: TemplateCardProps) {
  return (
    <div
      className={`group bg-white border border-hairline rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-sh-md transition-all duration-300 ease-out ${className}`}
    >
      <div className="h-[7px]" style={{ backgroundColor: topBg }}></div>
      <div className="p-[18px]">
        <div className="w-[38px] h-[38px] rounded-[10px] bg-mint-wash grid place-items-center text-mint-deep mb-3 flex-none">
          <span className="w-[19px] h-[19px] flex items-center justify-center">{icon}</span>
        </div>
        <h4 className="font-sora font-bold text-[1rem] text-ink mb-[5px] leading-snug">
          {title}
        </h4>
        <p className="text-[0.85rem] text-muted mb-3 leading-relaxed">
          {description}
        </p>
        <span className="text-[#6ED190] font-semibold text-[0.84rem] font-sora inline-flex items-center gap-1">
          Use template{' '}
          <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110">
            &rarr;
          </span>
        </span>
      </div>
    </div>
  );
}
