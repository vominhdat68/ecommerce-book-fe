import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/shared/store/redux/reduxStore";

import { authActions } from "@/features/auth//slices";
import { validatePhone, validateOTP, validatePassword } from "@/features/auth/utils/validation";
import type { MethodSMSType, OTPFormData, Message } from "@/features/auth/types/auth";
import { AUTH } from '@/features/auth/message/Auth'

export const useAuthForm = (
  formName: 'register' | 'forgotPassword',
  sliceFormActions: any,
  messageActions: (state: RootState) => { error: Message | null; message: Message | null; },
  stateActions: (state: RootState) => OTPFormData
) => {

  const dispatch = useDispatch<AppDispatch>();
  const message = useSelector(messageActions);
  const formData = useSelector(stateActions);


  const validForm = useMemo(() => {
    const isPhoneValid = validatePhone(formData.username);
    const isOTPValid = validateOTP(formData.otpCode);
    const passwordError = validatePassword(formData.password);
    return { isPhoneValid, isOTPValid, passwordError };
  }, [formData]);

  const setUsername = useCallback((username: string) => {
    dispatch(sliceFormActions.setField({ username }));

    if (username.length === 10 && !validatePhone(username)) {
      if (message.error?.field !== AUTH.POSITION_MESSAGE.UDL_USERNAME) {
        dispatch(authActions.setError({
          form: formName,
          error: {
            code: AUTH.ERROR_CODES.VALIDATION_USERNAME,
            message: AUTH.MESSAGES.VALIDATION.USERNAME.INVALID,
            field: AUTH.FIELDS.USERNAME_INVALID,
          },
        }));
        return
      }
    } else if (message.error?.field === AUTH.POSITION_MESSAGE.UDL_USERNAME || message.error?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD) {
      dispatch(authActions.setError({ form: formName, error: null }));
      return
    }
  }, [dispatch, message.error?.field]);

  const selectOTPMethod = useCallback((method: MethodSMSType) => {
    dispatch(sliceFormActions.setOTPMethod(method));
    if (message.error?.field !== AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD) {
      dispatch(authActions.setError({ form: formName, error: null }))
      return;
    }

  }, [dispatch]);

  const setOTPCode = useCallback((otpCode: string) => {
    dispatch(sliceFormActions.setField({ otpCode }));
    if (message.error?.field === AUTH.POSITION_MESSAGE.UDL_OTP) {
      dispatch(authActions.setError({ form: formName, error: null }));
      return
    }
  },
    [dispatch]
  );

  const setPassword = useCallback((password: string) => {
    dispatch(sliceFormActions.setField({ password }));
    if (message.error?.field === AUTH.POSITION_MESSAGE.UDL_PASSWORD) {
      dispatch(authActions.setError({ form: formName, error: null }));
      return
    }
  }, [dispatch, message.error?.field]);

  const captcha = {
    verify: useCallback((token: string) => {
      dispatch(sliceFormActions.setCaptchaVerified({ verified: true, token }));
    }, [dispatch]),
    error: useCallback(() => {
      dispatch(authActions.setLoading(false));
      dispatch(sliceFormActions.setCaptchaVerified({ verified: false, token: "" }));
      dispatch(authActions.setError({
        form: formName,
        error: { code: "CAPTCHA_ERROR", message: "CAPTCHA lỗi, vui lòng thử lại." },
      }));
    }, [dispatch]),
    expire: useCallback(() => {
      dispatch(sliceFormActions.setCaptchaVerified({ verified: false, token: "" }));
      dispatch(authActions.setError({
        form: formName,
        error: { code: "CAPTCHA_EXPIRED", message: "CAPTCHA hết hạn." },
      }));
    }, [dispatch]),
  };

  return {
    formData,
    validForm,
    actions: { setUsername, setPassword, setOTPCode, selectOTPMethod, captcha },
  };
};
