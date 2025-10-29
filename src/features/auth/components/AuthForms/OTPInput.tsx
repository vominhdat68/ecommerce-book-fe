import React, { memo, useCallback } from "react";
import CustomInput from "@/shared/components/CustomInput";

interface CountdownState {
  isRunning: boolean;
  timeLeft: number; // giây còn lại
}

interface OTPError {
  message?: string;
  [key: string]: any;
}

interface OTPInputProps {
  otpCode: string;
  otpSent: boolean;
  error?: OTPError;
  countdown: CountdownState;
  onChange: (val: string) => void;
  onClear: () => void;
  onResend: () => void;
  onReset: () => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  otpCode,
  otpSent,
  error,
  countdown,
  onChange,
  onClear,
  onResend,
  onReset,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const isInputDisabled = !otpSent || !countdown.isRunning;
  const canResend = !countdown.isRunning;

  return (
    <div className="text-gray-700">
      <CustomInput
        label="Mã xác nhận OTP"
        name="otp"
        type="text"
        maxLength={6}
        autoComplete="one-time-code"
        placeholder="6 ký tự"
        disabled={isInputDisabled}
        value={otpCode}
        onChange={handleChange}
        onClearValue={onClear}
        isRenderStatusIco={false}
        errorMessage={error?.message}
      />

      {otpSent && (
        <div className="flex justify-end gap-2 my-4 text-sm">
          {/* Resend OTP Button */}
          <button
            type="button"
            aria-label="Gửi lại OTP"
            data-testid="resend-otp-btn"
            disabled={!canResend}
            onClick={onResend}
            className={`p-2 rounded-[5px] transition-transform 
              ${canResend
                ? "bg-[#2489F4] text-[#ffffff] rounded-[5px] cursor-pointer hover:opacity-90 hover:scale-101"
                : "text-[#2489F4]"
              }`}
          >

            {canResend ? "Gửi lại OTP" : `Gửi lại ${countdown.timeLeft}s`}
          </button>
          {/* cursor-not-allowed */}
          {/* Change Method Button */}
          <button
            type="button"
            className="border border-[#2489F4] rounded-[5px] text-[#2489F4] p-2 cursor-pointer hover:opacity-80 hover:scale-105 transition-transform"
            aria-label="Chọn phương thức xác thực khác"
            data-testid="reset-method-btn"
            onClick={onReset}
          >
            Phương thức khác
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(OTPInput);
