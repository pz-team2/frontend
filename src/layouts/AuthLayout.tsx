// AuthLayout.tsx

import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  imageSrc: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, imageSrc }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#12496E", fontFamily: 'Poppins, sans-serif' }}>
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center items-center">
            <img 
              src={imageSrc} 
              alt="Event" 
              className="w-48 md:w-72 lg:w-80 h-auto object-contain transition-transform duration-300"
            />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-black text-center md:text-left">
                {title}
              </h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};