import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`bg-white border border-hairline rounded-2xl p-6 shadow-sh-sm hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200 ${className}`}
    >
      <div className="w-11 h-11 rounded-xl bg-mint-wash text-mint-deep grid place-items-center mb-4 flex-none">
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      </div>
      <h4 className="font-sora font-semibold text-lg text-ink mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-muted text-[0.9rem] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
