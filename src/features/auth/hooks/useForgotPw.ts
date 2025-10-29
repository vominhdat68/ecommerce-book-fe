import { useSelector } from "react-redux";

import { forgotPasswordActions } from "@/features/auth/slices";
import { useAuthForm } from "@/features/auth/hooks/auth/useAuthForm";
import { useAuthOTP } from "@/features/auth/hooks/auth/useOTP";
import { useAuthAPI } from "@/features/auth/hooks/auth/useAuthAPI";
import type { RootState } from "@/shared/store/redux/reduxStore";

export const useForgotPassword = () => {
  const { formData, validForm, actions: formActions } = useAuthForm(
    'forgotPassword',
    forgotPasswordActions,
    state => state.auth.auth.forgotPassword,
    state => state.auth.forgotPassword);

  const { otpCountdown, actions: otpActions } = useAuthOTP(
    'forgotPassword',
    forgotPasswordActions,
    state => state.auth.forgotPassword);

  const { handleForgotPw } = useAuthAPI(
    'forgotPassword',
    forgotPasswordActions,
    state => state.auth.forgotPassword
  );

  const { isLoading, forgotPassword } = useSelector((state: RootState) => state.auth.auth);

  return {
    state: {
      isLoading,
      formData,
      error: forgotPassword.error,
      message: forgotPassword.message,
    },
    validation: { validForm },
    otpCountdown,
    actions: {
      ...formActions,
      ...otpActions,
      handleForgotPw,
    },
  };
};
