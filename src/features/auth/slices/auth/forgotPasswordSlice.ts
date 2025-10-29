import { createOTPFormSlice } from "@/features/auth/slices/auth/verifyFormSlice";

const forgotPasswordSlice = createOTPFormSlice("auth/forgotPassword");
export const forgotPasswordActions = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
