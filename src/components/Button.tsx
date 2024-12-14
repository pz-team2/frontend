import { Link } from 'react-router-dom';
import React from 'react'

interface ButtonProps {
  to?: string; // `to` menjadi opsional
  variant: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ to, children, variant, icon }) => {
  // Jika `to` ada, render `Link`, jika tidak, render hanya `button`
  const content = (
    <button className={`flex items-center p-2 rounded-lg border-0 text-white ${variant} hover:bg-cyan-700 font-medium text-bold`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );

  // Jika `to` ada, bungkus dengan Link, jika tidak langsung render button
  return to ? <Link to={to}>{content}</Link> : content;
};
