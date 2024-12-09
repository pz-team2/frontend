import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-3 md:space-y-4">
      {label && (
        <label htmlFor="select-element" className="block text-[#12496E] text-lg md:text-xl font-semibold">
          {label}
        </label>
      )}
      <select
        id="select-element"
        className={`w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 
          ${error ? "border-red-500" : "border-gray-300"}
          rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent 
          bg-white disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
