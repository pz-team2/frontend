import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}

const ButtonProfile: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "relative text-lg md:text-xl font-semibold px-8 md:px-12 py-3 md:py-4 rounded-xl transition-all";
  const variantStyles = {
    primary: `bg-[#12496E] hover:bg-[#0d3655] text-white 
      disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300`,
    secondary: `bg-gray-200 hover:bg-gray-300 text-gray-800 
      disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-100`,
  };
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  const loadingStyles = isLoading ? "text-transparent" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${loadingStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-current" />
        </div>
      )}
    </button>
  );
};

export default ButtonProfile;