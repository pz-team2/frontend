export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-3 md:space-y-4">
      {label && (
        <label className="block text-[#12496E] text-lg md:text-xl font-semibold">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;