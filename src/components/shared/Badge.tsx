import React from 'react';

interface BadgeProps {
  variant?: 'trust' | 'status-on' | 'status-away' | 'status-busy';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'trust',
  icon,
  children,
  className = '',
}: BadgeProps) {
  if (variant === 'trust') {
    return (
      <span
        className={`inline-flex items-center gap-[7px] bg-lilac rounded-full py-[6px] px-[13px] text-[0.78rem] font-semibold text-violet font-sora ${className}`}
      >
        {icon && <span className="flex-none">{icon}</span>}
        {children}
      </span>
    );
  }

  // Status badges
  const statusClasses = {
    'status-on': 'bg-[#D9E38A] text-[#166534]',
    'status-away': 'bg-[#D9E38A] text-[#166534]',
    'status-busy': 'bg-[#D9E38A] text-[#166534]',
  };

  return (
    <span
      className={`font-space-mono text-[0.66rem] font-bold py-[3px] px-[8px] rounded-full flex-none ${statusClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
