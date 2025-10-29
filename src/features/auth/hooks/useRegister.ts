import { useSelector } from "react-redux";
import { registerActions } from "@/features/auth/slices";

import { useAuthForm } from "@/features/auth/hooks/auth/useAuthForm";
import { useAuthOTP } from "@/features/auth/hooks/auth/useOTP";
import { useAuthAPI } from "@/features/auth/hooks/auth/useAuthAPI";
import type { RootState } from "@/shared/store/redux/reduxStore";

export const useRegister = () => {
  const { formData, validForm, actions: formActions } = useAuthForm(
    'register',
    registerActions,
    state => state.auth.auth,
    state => state.auth.register);

  const { otpCountdown, actions: otpActions } = useAuthOTP(
    'register',
    registerActions,
    state => state.auth.register);

  const { handleRegister } = useAuthAPI(
    'register',
    registerActions,
    state => state.auth.register
  );

  const { isLoading, register } = useSelector((state: RootState) => state.auth.auth);

  return {
    state: {
      isLoading,
      formData,
      error: register.error,
      message: register.message,
    },
    validation: { validForm },
    otpCountdown,
    actions: {
      ...formActions,
      ...otpActions,
      handleRegister,
    },
  };
};
