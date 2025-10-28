import { createApi } from "@reduxjs/toolkit/query/react";
import { mockAuthAPI } from "./mockAPI";
import type { Message } from "@/features/auth/types/auth";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export interface APIResponse {
  success: boolean;
  code: string;
  message: string;
  errors?: Message;
  data?: any;
}

export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterRequest {
  username: string;
  password: string;
}

export interface OTPRequest {
  phone: string;
  method: "sms" | "zalo" | "";
  captchaToken?: string;
}

export interface VerifyOTPRequest {
  phone: string;
  otpCode: string;
}

export interface ResetPasswordRequest {
  phone: string;
  newPassword: string;
}

// ------------------ API Definition ------------------
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
    fetchFn: async (input, init) => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        return await fetch(input, { ...init, signal: controller.signal });
      } finally {
        clearTimeout(timeout);
      }
    },
  }),
  // tagTypes: ['Auth', 'User'], // tao tags co query cu the, giup tu dong refetch lai api cua api duoc danh dau tag o api khac(sau khi api nay duoc thuc thi)
  endpoints: (builder) => ({
    // --- Login ---
    login: builder.mutation<APIResponse, LoginRequest>({
      // query: (credentials) => ({
      //   url: "/auth/login",
      //   method: "POST",
      //   body: credentials,
      // }),
      // invalidatesTags: ['Auth'],
      queryFn: async (credentials) => {
        try {
          const data = await mockAuthAPI.login(credentials);
          return { data };
        } catch (err: any) {
          return { error: { status: 500, data: err.message } };
        }
      },
    }),

    // --- Register ---
    register: builder.mutation<APIResponse, RegisterRequest>({
      // query: (userData) => ({
      //   url: "/auth/register",
      //   method: "POST",
      //   body: userData,
      // }),
      queryFn: async (userData) => ({ data: await mockAuthAPI.register(userData) }),

    }),

    // --- Forgot Password ---
    forgotPassword: builder.mutation<APIResponse, RegisterRequest>({
      // query: (userData) => ({
      //   url: "/auth/register",
      //   method: "POST",
      //   body: userData,
      // }),
      queryFn: async (userData) => ({ data: await mockAuthAPI.register(userData) }),

    }),

    // --- Send OTP ---
    sendOTP: builder.mutation<APIResponse, { phone: string; method: "sms" | "zalo"; captchaToken?: string }>({
      // query: (payload) => ({
      //   url: "/auth/otp/send",
      //   method: "POST",
      //   body: payload,
      // }),
      queryFn: async ({ phone, method, captchaToken }) => ({
        data: await mockAuthAPI.sendOTP(phone, method, captchaToken),
      }),
    }),

    // --- Resend OTP ---
    resendOTP: builder.mutation<APIResponse, { phone: string; method: "sms" | "zalo" }>({
      // query: (payload) => ({
      //   url: "/auth/otp/resend",
      //   method: "POST",
      //   body: payload,
      // }),
      queryFn: async ({ phone, method }) => ({ data: await mockAuthAPI.resendOTP(phone, method) }),
    }),

    // --- Verify OTP ---
    verifyOTP: builder.mutation<APIResponse, VerifyOTPRequest>({
      // query: (payload) => ({
      //   url: "/auth/otp/verify",
      //   method: "POST",
      //   body: payload,
      // }),
      queryFn: async (payload) => ({ data: await mockAuthAPI.verifyOTP(payload) }),
    }),

    // --- Reset Password ---
    resetPassword: builder.mutation<APIResponse, ResetPasswordRequest>({
      // query: (payload) => ({
      //   url: "/auth/password/reset",
      //   method: "POST",
      //   body: payload,
      // }),
      queryFn: async (payload) => ({ data: await mockAuthAPI.resetPassword(payload) }),
    }),

    // --- Logout ---
    logout: builder.mutation<APIResponse, void>({
      // query: () => ({
      //   url: "/auth/logout",
      //   method: "POST",
      // }),
      queryFn: async () => ({ data: await mockAuthAPI.logout() }),
    }),

    // --- Refresh Token ---
    refreshToken: builder.mutation<APIResponse, void>({
      // query: () => ({
      //   url: "/auth/refresh",
      //   method: "POST",
      // }),
      queryFn: async () => ({ data: await mockAuthAPI.logout() }),
    }),

    // --- Validate Session ---
    validateSession: builder.query<APIResponse, void>({
      // query: () => ({
      //   url: "/auth/validate",
      //   method: "GET",
      // }),
      // providesTags: ['Auth'],
      queryFn: async () => ({ data: await mockAuthAPI.validateSession() }),
    }),
  }),
});

// ------------------ Export Hooks ------------------
export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,

  useSendOTPMutation,
  useResendOTPMutation,
  useVerifyOTPMutation,
  useResetPasswordMutation,

  useLogoutMutation,
  useRefreshTokenMutation,
  useValidateSessionQuery,
} = authApi;
