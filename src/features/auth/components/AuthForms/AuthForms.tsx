import { AUTH } from "@/features/auth/message/Auth";
import { ActionButton } from "@/shared/components/Button";
import CustomInput from "@/shared/components/CustomInput";

import { MethodSelector, OTPInput } from "@/features/auth/components/AuthForms//index";

type AuthFormsProps = {
  state: any;
  otpCountdown: any;
  validation: any;
  actions: any;
  onSubmit: () => void;

  nameLabelAction: string;
};

const AuthForms: React.FC<AuthFormsProps> = ({
  state,
  otpCountdown,
  validation,
  actions,
  onSubmit,
  nameLabelAction,
}) => {
  const showMethodOptions = !state.formData.otpSent && !state.formData.otpVerified;
  const showCaptcha =
    state.formData.isCaptchaRequired &&
    state.formData.selectedMethod &&
    !state.formData.otpVerified;

  const showOTPInput = !state.formData.otpVerified;
  
  return (
    <>
      {/* thong bao khi gui da gui otp den SMS */}
      {state.formData.otpSent && !state.formData.otpVerified && (
        <span className="text-[#28a745] text-[13px] block mb-2">
          {state.message?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_OK && state.message?.message}
        </span>
      )}
      {
        state.error?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD && (
          <span className="text-[#C92127] text-[13px] block mb-2"> {state.error?.message} </span>
        )}

      <form
        className="w-full space-y-5"
        method="POST"
      >
        {/* Phone input */}
        <div className="text-[#555555]">
          <CustomInput
            label="Số điện thoại"
            name="register-phone"
            type="tel"
            maxLength={10}
            autoComplete="tel"
            value={state.formData.username}
            placeholder="Nhập số điện thoại"
            disabled={state.formData.otpSent}// ko cho sua username khi dang trong qua trinh xac thuc otp
            onChange={(e) => !state.isLoading && actions.setUsername(e.target.value.replace(/\D/g, ""))}
            onClearValue={() => actions.setUsername("")}
            isValid={validation.validForm.isPhoneValid}
            errorMessage={state.error?.field === AUTH.POSITION_MESSAGE.UDL_USERNAME && state.error?.message}
          />
        </div>

        {/* Method selection */}
        {showMethodOptions && (
          <MethodSelector
            selectedMethod={state.formData.selectedMethod}
            disabled={validation.validForm.isPhoneValid}
            onSelect={actions.selectOTPMethod}
          />
        )}

        {/* OTP Input */}
        {showOTPInput && (
          <OTPInput
            otpCode={state.formData.otpCode}
            otpSent={state.formData.otpSent}
            error={state.error?.field === AUTH.POSITION_MESSAGE.UDL_OTP && state.error}
            countdown={otpCountdown}
            onChange={(val) => actions.setOTPCode(val.replace(/\D/g, ""))}
            onClear={() => actions.setOTPCode("")}
            onResend={actions.handleResendOTP}
            onReset={actions.handleResetOTP}
          />
        )}

        {/* Password */}
        <div className="text-[#555555]">
          <CustomInput
            label="Mật khẩu"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            disabled={state.formData.otpVerified !== true}
            value={state.formData.password}
            onChange={(e) => actions.setPassword(e.target.value)}
            onClearValue={() => actions.setPassword("")}
            isValid={validation.validForm.isPasswordValid}
            isRenderStatusIco={false}
            errorMessage={state.error?.field === AUTH.POSITION_MESSAGE.UDL_PASSWORD && state.error.message}
          />
        </div>

        <div className="text-center">
          <ActionButton
            variant="auth"
            label={nameLabelAction}
            disabled={!state.formData.otpVerified}
            onClick={onSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default AuthForms;