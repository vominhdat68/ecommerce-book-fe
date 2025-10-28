// mockAPI.ts
import type {
  APIResponse,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  VerifyOTPRequest,
} from "./authSliceService";

import { sendOtpResponses, resendOtpResponses, verifyOtpResponses } from './mockJson/caseOTP.json'
import { registerResponses } from './mockJson/caseRegister.json'
import { forgotPasswordResponses } from './mockJson/caseForgotPw.json'
import { loginResponses } from './mockJson/caseLogin.json'

// fake DB memory
let mockUsers: Array<{ id: string; username: string; password: string; email?: string }> = [
  { id: "u1", username: "0999999999", password: "123456", email: "test@example.com" },
];

type OTPData = {
  code: string;
  expireAt: number;
  attempts: number;
  maxAttempts: number;
  sendCount: number;
  lastSentAt: number;
};

const otpStore: Record<string, OTPData> = {};

let sessions: Record<string, { token: string; refreshToken: string; userId: string }> = {};

export const mockAuthAPI = {
  // ----------------- LOGIN -----------------
  async login({ username, password }: LoginRequest): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1500));

    switch (username) {

      case "0900000001":
        return loginResponses.SUCCESS;

      case "0900000002":
        return loginResponses.INVALID_CREDENTIALS;

      case "0900000003":
        return loginResponses.ACCOUNT_NOT_VERIFIED;

      case "0900000005":
        return loginResponses.ACCOUNT_LOCKED;

      case "0900000006":

        return loginResponses.TOO_MANY_ATTEMPTS;
      case "0900000007":

        return loginResponses.SERVER_ERROR;

      default:
        return {
          success: false,
          code: "UNKNOWN_",
          message: "vvvvvvvvvvvvvvvv"
        };
    }
  },

  // ----------------- REGISTER -----------------
  async register(userData: RegisterRequest): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1500));


    switch (userData.username) {

      case "0900000001":
        return registerResponses.REGISTER_SUCCESS;

      case "0900000002":
        return registerResponses.INVALID_PASSWORD;

      case "0900000003":
        return registerResponses.USERNAME_ALREADY_EXISTS;

      case "0900000004":
        return registerResponses.OTP_NOT_VERIFIED;

      case "0900000005":
        return registerResponses.SERVER_ERROR;


      default:
        return {
          success: false,
          code: "UNKNOWN_",
          message: "vvvvvvvvvvvvvvvv"
        };
    }
  },

  // ----------------- SEND OTP -----------------
  async sendOTP(phone: string, method: "sms" | "zalo", captchaToken?: string): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1000));

    switch (phone) {
      case "0900000001":
        return sendOtpResponses.OTP_SENT;

      case "0900000002":
        return sendOtpResponses.INVALID_PHONE;

      case "0900000003":
        return sendOtpResponses.USERNAME_ALREADY_EXISTS;

      case "0900000004":
        return sendOtpResponses.OTP_SEND_FAILED;

      case "0900000005":
        return sendOtpResponses.TOO_MANY_REQUESTS;
      default:
        return {
          success: false,
          code: "OTP_UNKNOWN_PHONE",
          message: "Số điện thoại không có trong mock data."
        };
    }
  },

  // ----------------- RESEND OTP -----------------
  async resendOTP(phone: string, method: "sms" | "zalo"): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    switch (phone) {
      case "0900000001":
        return resendOtpResponses.OTP_RESENT;

      case "0900000002":
        return resendOtpResponses.OTP_RESEND_TOO_EARLY;

      case "0900000003":
        return resendOtpResponses.OTP_RESEND_LIMIT_REACHED;

      case "0900000004":
        return resendOtpResponses.OTP_RESEND_FAILED;

      default:
        return {
          success: false,
          code: "OTP_UNKNOWN_PHONE",
          message: "Số điện thoại không có trong mock data."
        };
    }
  },

  // ----------------- VERIFY OTP -----------------
  async verifyOTP({ phone, otpCode }: VerifyOTPRequest): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1500));

    switch (otpCode) {
      case "000000":
        return verifyOtpResponses.OTP_VERIFIED;

      case "000001":
        return verifyOtpResponses.OTP_INVALID;
      case "000002":
        return verifyOtpResponses.OTP_NOT_FOUND;


      case "000003":
        return verifyOtpResponses.OTP_ALREADY_USED;

      case "000004":
        return verifyOtpResponses.OTP_TOO_MANY_ATTEMPTS;

      case "000005":
        return verifyOtpResponses.OTP_EXPIRED;

      case "000006":
        return verifyOtpResponses.OTP_BLOCKED;

      case "000007":
        return verifyOtpResponses.OTP_SERVER_ERROR;


    }
  },

  // ----------------- RESET PASSWORD -----------------
  async resetPassword({ phone, newPassword }: ResetPasswordRequest): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 1500));

    switch (phone) {

      case "0900000001":
        return forgotPasswordResponses.RESET_PASSWORD_SUCCESS;

      case "0900000002":
        return forgotPasswordResponses.INVALID_PASSWORD;

      case "0900000003":
        return forgotPasswordResponses.USER_NOT_FOUND;

      case "0900000004":
        return forgotPasswordResponses.INVALID_CAPTCHA;


      default:
        return {
          success: false,
          code: "UNKNOWN_",
          message: "vvvvvvvvvvvvvvvv"
        };
    }
  },

  // ----------------- LOGOUT -----------------
  async logout(): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 500));
    return { success: true, message: { code: "LOGOUT_SUCCESS", message: "Đăng xuất thành công" } };
  },

  // ----------------- REFRESH TOKEN -----------------
  async refreshToken(): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 500));
    return {
      success: true,
      message: { code: "REFRESH_TOKEN_SUCCESS", message: "Refresh token thành công" },
      data: {
        token: "mock-access-" + Math.random().toString(36).substring(2, 10),
        refreshToken: "mock-refresh-" + Math.random().toString(36).substring(2, 10),
      },
    };
  },

  // ----------------- VALIDATE SESSION -----------------
  async validateSession(): Promise<APIResponse> {
    await new Promise((r) => setTimeout(r, 500));
    return { success: true, code: "SESSION_VALID", message: "Session hợp lệ" };
  },
};
