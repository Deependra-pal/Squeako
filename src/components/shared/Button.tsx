import React from 'react';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'light' | 'outline-light';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  id,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-[9px] font-sora font-semibold rounded-[14px] cursor-pointer transition-all duration-180 ease-in-out whitespace-nowrap active:scale-[0.98]';

  const sizeClasses =
    size === 'lg' ? 'py-[17px] px-[32px] text-[1.05rem]' : 'py-[14px] px-[26px] text-[1rem]';

  const variantClasses = {
    primary:
      'border border-transparent bg-[#D9E38A] text-[#0B1818] hover:bg-[#436B56] hover:text-white hover:-translate-y-[2px] shadow-sm hover:shadow-[0_12px_30px_rgba(67,107,86,0.25)]',
    ghost:
      'border-[1.5px] border-solid border-white/40 bg-transparent text-white hover:border-[#D9E38A] hover:bg-[#D9E38A] hover:text-[#0B1818] hover:-translate-y-[2px] shadow-sm',
    light:
      'border border-transparent bg-transparent text-white hover:bg-[#D9E38A] hover:text-[#0B1818] hover:-translate-y-[2px]',
    'outline-light':
      'border-[1.5px] border-solid border-white/50 bg-transparent text-white hover:border-[#D9E38A] hover:bg-[#D9E38A] hover:text-[#0B1818] hover:-translate-y-[2px]',
  };

  const computedClasses = `${baseClasses} ${sizeClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={computedClasses} onClick={onClick} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={computedClasses} onClick={onClick} id={id}>
      {children}
    </button>
  );
}
