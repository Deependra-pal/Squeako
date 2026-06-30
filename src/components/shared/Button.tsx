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
    size === 'lg' ? 'py-[13px] px-[26px] text-[0.98rem]' : 'py-[10px] px-[20px] text-[0.92rem]';

  const variantClasses = {
    primary:
<<<<<<< HEAD
      'border border-transparent bg-[#16D196] text-[#090D0C] hover:bg-[#105e3a] hover:text-white hover:-translate-y-[2px] shadow-[0_0_15px_rgba(22,209,150,0.2)] hover:shadow-[0_0_25px_rgba(22,209,150,0.65)]',
    ghost:
      'border-[1.5px] border-solid border-[#16D196]/40 bg-transparent text-[#16D196] hover:border-[#16D196] hover:bg-[#16D196] hover:text-[#090D0C] hover:-translate-y-[2px] shadow-sm hover:shadow-[0_0_20px_rgba(22,209,150,0.4)]',
    light:
      'border border-transparent bg-transparent text-white hover:bg-[#16D196] hover:text-[#090D0C] hover:-translate-y-[2px]',
    'outline-light':
      'border-[1.5px] border-solid border-white/50 bg-transparent text-white hover:border-[#16D196] hover:bg-[#16D196] hover:text-[#090D0C] hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(22,209,150,0.4)]',
=======
      'border border-transparent bg-[#D9E38A] text-[#090D0C] hover:bg-[#436B56] hover:text-white hover:-translate-y-[2px] shadow-sm hover:shadow-[0_12px_30px_rgba(67,107,86,0.25)]',
    ghost:
      'border-[1.5px] border-solid border-white/40 bg-transparent text-white hover:border-[#D9E38A] hover:bg-[#D9E38A] hover:text-[#090D0C] hover:-translate-y-[2px] shadow-sm',
    light:
      'border border-transparent bg-transparent text-white hover:bg-[#D9E38A] hover:text-[#090D0C] hover:-translate-y-[2px]',
    'outline-light':
      'border-[1.5px] border-solid border-white/50 bg-transparent text-white hover:border-[#D9E38A] hover:bg-[#D9E38A] hover:text-[#090D0C] hover:-translate-y-[2px]',
>>>>>>> 8dc5601bbb5d2dab7b47e0627f73101e12cd7afc
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
