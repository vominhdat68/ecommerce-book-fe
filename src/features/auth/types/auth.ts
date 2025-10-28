/**
 * =====================================
 *  Auth Feature Types
 *  - State Types
 *  - Form Types
 *  - OTP Types
 *  - Message Types
 * =====================================
 */


/* ---------- STATE TYPES ---------- */
export type FormType = "login" | "register" | "forgotPassword";
export type MethodSMSType = "sms" | "zalo";

export interface AuthState {
  isLoading: boolean;
  login: { error: Message | null; message: Message | null };
  register: { error: Message | null; message: Message | null };
  forgotPassword: { error: Message | null; message: Message | null };
  currentForm: FormType;
}

/* ---------- FORM TYPES ---------- */


export interface LoginFormData {
  username: string;
  password: string;
}

export interface OTPFormData {
  username: string;
  password: string;
  otpCode: string;
  otpSent: boolean;
  otpVerified: boolean;
  selectedMethod: MethodSMSType | null;
  isCaptchaRequired: boolean;
  captchaVerified: boolean;
  captchaToken: string;

}

export interface RegisterFormData extends OTPFormData {
}

export interface ForgotPasswordFormData extends OTPFormData {
}

/* ---------- OTP TYPES ---------- */


// features/auth/types/auth.ts
export interface CountdownState {
  isActive: boolean;
  isPaused?: boolean;
  expireAt?: number;
  isExpired?: boolean;
}

export interface OTPMethod {
  id: "sms" | "zalo";
  label: string;
  requiresCaptcha: boolean;
}

/* ---------- MESSAGE TYPES ---------- */
export interface Message {
  code: string;
  message: string;
  field?: string;
}






//  PORPSSS
export interface LoginFormProps {
  switchForm: (form: FormType) => void;
}

export interface ForgotPWProps {
  onBackPrev: (form: FormType) => void;
}