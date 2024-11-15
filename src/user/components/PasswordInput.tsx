import { Eye, EyeOff } from "lucide-react";
import { InputProps } from "./Input"; // Add import

interface PasswordInputProps extends Omit<InputProps, "type"> {
  show?: boolean;
  onToggleShow?: () => void;
  minLength?: number;
  requireSpecialChar?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  show = false,
  onToggleShow,
  minLength = 8,
  requireSpecialChar = true,
  error,
  ...props
}) => {
  const validatePassword = (value: string): string | undefined => {
    if (value && value.length < minLength) {
      return `Password must be at least ${minLength} characters long`;
    }
    if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Password must contain at least one special character";
    }
    return undefined;
  };

  const combinedError =
    error || (props.value && validatePassword(props.value as string));

  return (
    <div className="space-y-3 md:space-y-4">
      {props.label && (
        <label className="block text-[#12496E] text-lg md:text-xl font-semibold">
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className={`w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 
            ${combinedError ? "border-red-500" : "border-gray-300"} 
            rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white 
            pr-12`} // Added pr-12 to prevent text overlap with icon
          {...props}
        />
        <button
          type="button"
          onClick={onToggleShow}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#30BFCA] rounded-lg p-1"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? (
            <EyeOff className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Eye className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>
      </div>
      {combinedError && (
        <p className="text-red-500 text-sm mt-1">{combinedError}</p>
      )}
    </div>
  );
};

export default PasswordInput;
