// features/auth/slices/createOTPFormSlice.ts
import { createSlice, type PayloadAction, type Slice } from '@reduxjs/toolkit';
import type { MethodSMSType, OTPFormData } from '@/features/auth/types/auth';

const initialFormState: OTPFormData = {
  username: '',
  selectedMethod: null,
  captchaToken: '',
  otpCode: '',
  password: '',
  otpSent: false,
  otpVerified: false,
  isCaptchaRequired: true,
  captchaVerified: false,
};

export function createOTPFormSlice(name: string): Slice<
  OTPFormData,
  {
    setField: (
      state: OTPFormData,
      action: PayloadAction<Partial<OTPFormData>>
    ) => void;

    setOTPMethod: (state: OTPFormData, action: PayloadAction<MethodSMSType>) => void;

    setCaptchaVerified: (
      state: OTPFormData,
      action: PayloadAction<{ verified: boolean; token?: string }>
    ) => void;

    setOTPSent: (state: OTPFormData, action: PayloadAction<boolean>) => void;

    setOTPVerified: (state: OTPFormData, action: PayloadAction<boolean>) => void;

    resetState: (
      state: OTPFormData,
      action: PayloadAction<Partial<OTPFormData> | undefined>
    ) => OTPFormData;
  }
> {

  return createSlice({
    name,
    initialState: initialFormState,
    reducers: {
      setField: (state, action) => {
        Object.assign(state, action.payload);
      },

      setOTPMethod: (state, action) => {
        state.selectedMethod = action.payload;
      },

      setCaptchaVerified: (state, action) => {
        state.captchaVerified = action.payload.verified;
        state.captchaToken = action.payload.token || "";
      },

      setOTPSent: (state, action) => {
        state.otpSent = action.payload;
      },

      setOTPVerified: (state, action) => {
        state.otpVerified = action.payload;
      },

      resetState: (_, action) => {
        return {
          ...initialFormState,
          ...action.payload,
        };
      },
    },
  });
}
