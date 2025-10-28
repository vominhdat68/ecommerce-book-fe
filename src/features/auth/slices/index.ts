import { combineReducers } from '@reduxjs/toolkit';

import authReducer, { authActions } from '@/features/auth/slices/auth/authSlice';
import loginReducer, { loginActions } from '@/features/auth/slices/auth/loginSlice';

export const rootAuthReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

// Export all actions
export {
  authActions,
  loginActions
};
