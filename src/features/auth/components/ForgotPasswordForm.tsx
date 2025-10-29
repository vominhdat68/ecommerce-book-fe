
import { AuthForms } from "@/features/auth/components/AuthForms/index";
import { useForgotPassword } from "@/features/auth/hooks/useForgotPw";

const ForgotPasswordForm: React.FC = () => {
  const { state, validation, otpCountdown, actions } = useForgotPassword();
  return (
    <>
      <AuthForms
        state={state}
        otpCountdown={otpCountdown}
        validation={validation}
        actions={actions}
        onSubmit={actions.handleForgotPw}
        nameLabelAction="Xác nhận" />
    </>
  );
}

export default ForgotPasswordForm;