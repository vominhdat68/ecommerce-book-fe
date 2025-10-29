import { combineReducers } from '@reduxjs/toolkit';

import authReducer, { authActions } from '@/features/auth/slices/auth/authSlice';
import loginReducer, { loginActions } from '@/features/auth/slices/auth/loginSlice';
import registerReducer, { registerActions } from '@/features/auth/slices/auth/registerSlice';
import forgotPasswordReducer, { forgotPasswordActions } from '@/features/auth/slices/auth/forgotPasswordSlice';
import countdownReducer from '@/shared/hooks/countdown/countdownSlice'

export const rootAuthReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  countdown: countdownReducer,
});

// Export all actions
export {
  authActions,
  loginActions,
  registerActions,
  forgotPasswordActions,
};
