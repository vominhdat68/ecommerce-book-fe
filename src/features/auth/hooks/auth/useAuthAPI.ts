import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/shared/store/redux/reduxStore";

import { authActions, loginActions } from "@/features/auth/slices/index";
import { useAuthModal } from "@/features/auth/hooks/useAuthModal";
import { useRegisterMutation, useForgotPasswordMutation } from "@/features/auth/services/authSliceService";
import { validatePhone, validatePassword } from "@/features/auth/utils/validation";
import type { OTPFormData } from "@/features/auth/types/auth";
import { AUTH } from '@/features/auth/message/Auth'


export const useAuthAPI = (
  formName: 'register' | 'forgotPassword',
  sliceFormActions: any,
  stateActions: (state: RootState) => OTPFormData
) => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, password } = useSelector(stateActions);
  const { switchForm } = useAuthModal();

  const [registerMutation, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [forgotPwMutation, { isLoading: isForgotPwLoading }] = useForgotPasswordMutation();
  const isLoading = isRegisterLoading || isForgotPwLoading;

  useEffect(() => {
    dispatch(authActions.setLoading(isLoading));
  }, [isLoading, dispatch]);

  const handleAuth = useCallback(
    async (mutation: any, badField: string, failCode: string) => {
      if (!validatePhone(username)) {
        dispatch(authActions.setError({
          form: formName,
          error: { code: AUTH.ERROR_CODES.VALIDATION_USERNAME, message: AUTH.MESSAGES.VALIDATION.USERNAME.INVALID, field: AUTH.FIELDS.USERNAME_INVALID },
        }));
        return;
      }
      if (validatePassword(password)) {
        dispatch(authActions.setError({
          form: formName,
          error: { code: AUTH.ERROR_CODES.VALIDATION_PASSWORD, message: AUTH.MESSAGES.VALIDATION.PASSWORD.INVALID, field: AUTH.FIELDS.PASSWORD_INVALID },
        }));
        return;
      }
      try {
        const res = await mutation({ username: username, password: password }).unwrap();
        if (!res.success) {
          dispatch(authActions.setError({ form: formName, error: { code: res.code, message: res.message || AUTH.MESSAGES.VALIDATION.DEFAULT, field: badField } }));
          return;
        }

        // hien thi password da dang ky o login
        dispatch(loginActions.setField({ username: username }))
        switchForm("login")

        // reset toàn bộ state 
        dispatch(sliceFormActions.resetState());
        dispatch(authActions.clearFeedback(formName));
      } catch (err: any) {
        dispatch(authActions.setError({ form: formName, error: { code: failCode, message: err.message, field: formName } }));
      }
    },
    [dispatch, formName]
  );

  const handleRegister = useCallback(
    () => handleAuth(registerMutation, AUTH.FIELDS.RES_AUTH_BAD, AUTH.ERROR_CODES.REGISTER_FAILED),
    [handleAuth, registerMutation]
  );
  const handleForgotPw = useCallback(
    () => handleAuth(forgotPwMutation, AUTH.FIELDS.RES_AUTH_BAD, AUTH.ERROR_CODES.FORGOTPW_FAILED),
    [handleAuth, forgotPwMutation]
  );

  return { handleRegister, handleForgotPw };
};
