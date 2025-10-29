import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/shared/store/redux/reduxStore";

import { useSendOTPMutation, useResendOTPMutation, useVerifyOTPMutation } from "@/features/auth/services//authSliceService";
import { useCountdown } from "@/shared/hooks/countdown/useCountdown"
import { authActions } from "@/features/auth/slices";
import { AUTH } from '@/features/auth/message/Auth'
import type { OTPFormData } from "@/features/auth/types/auth";


export const useAuthOTP = (
  formName: 'register' | 'forgotPassword',
  sliceFormActions: any,
  stateActions: (state: RootState) => OTPFormData

) => {

  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector(stateActions);
  const countdown = useCountdown(formName);

  const [sendOTPMutation, { isLoading: isSendOTPLoading }] = useSendOTPMutation();
  const [resendOTPMutation, { isLoading: isResendOTPLoading }] = useResendOTPMutation();
  const [verifyOTPMutation, { isLoading: isVerifyOTPLoading }] = useVerifyOTPMutation();

  const isLoading = isResendOTPLoading || isSendOTPLoading || isVerifyOTPLoading;


  useEffect(() => {
    dispatch(authActions.setLoading(isLoading));
    if (isVerifyOTPLoading) {
      if (countdown.isRunning) countdown.pause(); // tạm dừng countdown otp khi đang call api verify
    }
    else {
      if (countdown.isRunning) countdown.resume(); // tiếp tục countdown khi xong call api
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    // Điều kiện để tự động gửi OTP:
    // 1. CAPTCHA đã verified
    // 2. Đã chọn phương thức OTP
    // 3. Chưa gửi OTP
    // 4. Chưa tự động gửi OTP lần nào 

    if (formData.captchaVerified &&
      formData.selectedMethod &&
      !formData.otpSent) {
      handleSendOTP();
    }
  }, [formData.captchaVerified, formData.selectedMethod, formData.otpSent]);

  // Auto verify OTP
  useEffect(() => {
    if (formData.otpSent && !countdown.isRunning) {
      dispatch(authActions.setError({
        form: formName,
        error: { code: AUTH.ERROR_CODES.OTP_EXPIRED, message: AUTH.MESSAGES.VALIDATION.OTP.OTP_EXPIRED, field: AUTH.FIELDS.OTP_COED_EXPIRED }
      }));
      return;
    }
    if (formData.otpCode.length === 6 && formData.otpSent && !formData.otpVerified) {
      void handleVerifyOTP();
    }
  }, [formData.otpCode, formData.otpSent, formData.otpVerified, !countdown.isRunning]);

  const handleSendOTP = useCallback(async () => {
    if (!formData.username || !formData.selectedMethod || !formData.captchaToken) {
      dispatch(authActions.setError({
        form: formName,
        error: {
          code: AUTH.ERROR_CODES.OTP_SEND_INVALID,
          message: AUTH.MESSAGES.ERROR.UNKNOWN,
          field: AUTH.FIELDS.OTP_SEND_INVALID
        }
      }));
      dispatch(sliceFormActions.reset());

      return
    }

    try {
      const res = await sendOTPMutation({
        phone: formData.username,
        method: formData.selectedMethod,
        captchaToken: formData.captchaToken,
      }).unwrap();

      if (!res.success) {
        dispatch(authActions.setError({
          form: formName,
          error: {
            code: res.code,
            message: res.message,
            field: AUTH.FIELDS.OTP_SEND_BAD
          }
        }));

        dispatch(sliceFormActions.setField({ selectedMethod: null, captchaToken: '' }))
        return;
      }

      dispatch(sliceFormActions.setOTPSent(true));
      countdown.start(res.data?.expireAt || 60);
      dispatch(authActions.setMessage({
        form: formName,
        message: {
          code: res.code,
          message: res.message,
          field: AUTH.FIELDS.OTP_SENT_OK
        }
      }));

    } catch (err: any) {
      dispatch(authActions.setError({ form: formName, error: { code: "SEND_OTP_FAILED", message: err.message, field: 'errorCatch' } }));
    }
  }, [formData, dispatch]);

  const handleVerifyOTP = useCallback(async () => {
    if (!countdown.isRunning) return;

    try {
      const res = await verifyOTPMutation({ phone: formData.username, otpCode: formData.otpCode }).unwrap();

      if (!res.success) {
        if (['OTP_ALREADY_USED', 'OTP_EXPIRED', 'OTP_TOO_MANY_ATTEMPTS', 'OTP_BLOCKED', 'OTP_SERVER_ERROR'].includes(res.code,)) {
          countdown.reset();
          dispatch(sliceFormActions.resetState({ username: formData.username }));
          dispatch(authActions.setError({ form: formName, error: { code: res.code, message: res.message, field: AUTH.FIELDS.OTP_VERIFY_BLOCK } }));
          return;
        }
        dispatch(authActions.setError({ form: formName, error: { code: res.code, message: res.message, field: AUTH.FIELDS.OTP_VERIFY_BAD } }));
        return;
      }
      // visible UI 
      countdown.reset();
      dispatch(sliceFormActions.resetState({ username: formData.username, otpVerified: true }));
      dispatch(authActions.setMessage({ form: formName, message: null }))

    } catch (err: any) {
      dispatch(authActions.setError({ form: formName, error: { code: "`VERIFY_OTP_FAILED`", message: err.message, field: 'errorCatch' } }));
    }
  }, [formData, dispatch]);

  const handleResendOTP = useCallback(async () => {
    if (countdown.isRunning) return;


    try {
      const res = await resendOTPMutation({
        phone: formData.username,
        method: formData.selectedMethod as "sms" | "zalo",
      }).unwrap();

      if (!res.success) {
        dispatch(authActions.setError({
          form: formName,
          error: { code: res.code, message: res.message, field: AUTH.FIELDS.OTP_RESEND_BAD }
        }));
        countdown.reset();
        dispatch(sliceFormActions.resetState({ username: formData.username }))
        return;
      }

      dispatch(sliceFormActions.setField({ otpCode: '' }))
      dispatch(authActions.setError({ form: formName, error: null }))

      dispatch(sliceFormActions.setOTPSent(true));
      countdown.start(res.data?.expireAt || 60);
      dispatch(authActions.setMessage({ form: formName, message: { code: res.code, message: res.message, field: AUTH.FIELDS.OTP_SENT_OK } }));

    } catch (err: any) {
      dispatch(authActions.setError({ form: formName, error: { code: "RESEND_OTP_FAILED", message: err.message, field: 'errorCatch' } }));
    }
  }, [formData, dispatch]);

  const handleResetOTP = useCallback(async () => {
    countdown.reset();
    dispatch(sliceFormActions.resetState({ username: formData.username }))
    dispatch(authActions.clearFeedback(formName));

  }, [formData, dispatch]);

  return {
    otpCountdown: countdown,
    actions: { handleSendOTP, handleVerifyOTP, handleResendOTP, handleResetOTP },
  };
};
