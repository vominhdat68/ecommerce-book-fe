import { createSlice, type PayloadAction } from '@reduxjs/toolkit'; 
import type { LoginFormData } from '@/features/auth/types/auth';

const initialState: LoginFormData = {
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'auth/login',
  initialState,
  reducers: {
    setField: (
      state: LoginFormData,
      action: PayloadAction<Partial<LoginFormData>>
    ) => {
      Object.assign(state, action.payload);
    },
    resetLogin: () => initialState,
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;