// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  icon?: React.ReactNode;
  customClass?: string;
  width?: 'full' | 'auto' | 'custom'; // Menambahkan prop width
  customWidth?: string; // Untuk lebar khusus
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  customClass = '',
  width = 'auto',
  customWidth,
  children,
  ...props
}) => {
  const variantClass = {
    primary: 'bg-primary text-white hover:bg-primary-600',
    secondary: 'bg-secondary text-white hover:bg-secondary-600',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };

  const sizeClass = {
    lg: 'btn-lg',
    md: '',
    sm: 'btn-sm',
    xs: 'btn-xs',
  };

  const widthClass = {
    full: 'w-full', // Lebar penuh
    auto: 'w-auto', // Lebar otomatis
    custom: customWidth || '', // Lebar khusus
  };

  return (
    <button
      className={`btn ${variantClass[variant]} ${sizeClass[size]} ${widthClass[width]} ${customClass}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
