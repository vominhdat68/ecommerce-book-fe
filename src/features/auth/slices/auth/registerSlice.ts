import { createOTPFormSlice } from "@/features/auth/slices/auth/verifyFormSlice";

const registerSlice = createOTPFormSlice("auth/register");
export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
