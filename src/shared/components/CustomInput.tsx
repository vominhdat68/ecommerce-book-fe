import React, { useState } from "react";

import ico_valid_success from "@/assets/images/ico_valid_success.svg";
import ico_valid_error from "@/assets/images/ico_valid_error.svg";

type CustomInputProps = {
  label?: string;
  type?: "text" | "password" | "number" | "email" | "tel";
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  isValid?: boolean;
  isRenderStatusIco?: boolean;
  errorMessage?: string;
  placeholder?: string;
  autoComplete?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearValue: () => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  value,
  maxLength,
  disabled,
  isValid,
  isRenderStatusIco = true,
  errorMessage,
  placeholder,
  autoComplete = "off",
  name,
  onChange,
  onClearValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  /**
   * Render icon trạng thái (error hoặc success).
   *
   * Rules:
   * - Nếu không có error và chưa validate → KHÔNG render.
   * - Nếu là password + valid → KHÔNG render success icon (UX không cần).
   * - Nếu có error → render icon error (click để clear input).
   * - Nếu valid → render success icon.
   */
  const renderStatusIcon = () => {
    if (!isRenderStatusIco) return;
    if (!(isValid && !errorMessage) && !errorMessage) return null;
    if (isValid && !errorMessage) return null; // password valid → không show success

    return (

      <span
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-lg
          ${errorMessage ? "cursor-pointer" : ""}
        `}
        role={errorMessage ? "button" : undefined}
        aria-label={errorMessage ? "Clear input" : "Validation status"}
        onClick={errorMessage ? onClearValue : undefined}
      >
        <img
          src={isValid && !errorMessage ? ico_valid_success : ico_valid_error}
          alt={isValid && !errorMessage ? "success" : "error"}
        />
      </span>
    );
  };

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-2 cursor-pointer"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full pr-11 h-[40px] pl-4 border border-[#CDCFD0] rounded-[5px]   
            ${errorMessage
              ? "focus:border-[#C92127]/60 focus:outline-[#C92127]/40 focus:outline-2"
              : "focus:border-blue-500/60 focus:outline-blue-500/40 focus:outline-2"
            }
            ${disabled ? "bg-[#f2f2f2]" : ""}
          `}
        />

        {/* 1. BUTTON ẨN/HIỆN PASSWORD */}
        {isPassword && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 cursor-pointer text-[13px] select-none"
            role="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </span>
        )}

        {/* 2. ICON ERROR / SUCCESS */}
        {renderStatusIcon()}
      </div>

      {/* 3. HIỂN THỊ ERROR MESSAGE */}
      {errorMessage && (
        <p className="text-[#C92127] text-[13px] block mt-2">{errorMessage}</p>
      )}
    </>
  );
};

export default CustomInput;
