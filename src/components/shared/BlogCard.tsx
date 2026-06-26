import React from 'react';

interface BlogCardProps {
  imgTitle: string;
  imgBg?: string; // CSS style background override
  category: string;
  title: string;
  description: string;
  readTime: string;
  type: string;
  className?: string;
}

export default function BlogCard({
  imgTitle,
  imgBg,
  category,
  title,
  description,
  readTime,
  type,
  className = '',
}: BlogCardProps) {
  return (
    <div
      className={`bg-white border border-hairline rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200 flex flex-col ${className}`}
    >
      <div
        className="h-[140px] bg-grad grid place-items-center text-white font-sora font-bold text-[0.92rem] opacity-[0.94] text-center px-4"
        style={imgBg ? { background: imgBg } : undefined}
      >
        {imgTitle}
      </div>
      <div className="p-[18px] flex flex-col gap-2 flex-1">
        <span className="font-space-mono text-[0.62rem] tracking-[0.08em] uppercase text-[#6ED190]">
          {category}
        </span>
        <h4 className="font-sora font-bold text-[1.02rem] text-ink leading-snug">
          {title}
        </h4>
        <p className="text-[0.85rem] text-muted leading-relaxed flex-1">
          {description}
        </p>
        <div className="text-[0.76rem] text-muted flex gap-3 pt-2 border-t border-hairline/40 mt-1">
          <span>{readTime}</span>
          <span>·</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
}
