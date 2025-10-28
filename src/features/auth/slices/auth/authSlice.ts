// features/auth/slices/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, FormType, Message } from '@/features/auth/types/auth';


const initialState: AuthState = {
  isLoading: false,
  register: { error: null, message: null },
  login: { error: null, message: null },
  forgotPassword: { error: null, message: null },
  currentForm: 'login',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (
      state,
      action: PayloadAction<{ form: FormType; error: Message | null }>
    ) => {
      const { form, error } = action.payload;
      state[form].error = error;
      state.isLoading = false;
    },

    setMessage: (
      state,
      action: PayloadAction<{ form: FormType; message: Message | null }>
    ) => {
      const { form, message } = action.payload;
      state[form].message = message;
      state.isLoading = false;
    },

    clearFeedback: (state, action: PayloadAction<FormType>) => {
      const form = action.payload;
      state[form].error = null;
      state[form].message = null;
    },

    resetAuth: () => ({ ...initialState }), // clone ra object mới

    setCurrentForm: (state, action: PayloadAction<FormType>) => {
      state.currentForm = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;