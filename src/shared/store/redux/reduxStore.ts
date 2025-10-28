// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import { rootAuthReducer } from '@/features/auth/slices';
import { authApi } from "@/features/auth/services/authSliceService";


import controlModalReducer from '@/shared/slice/ControlModalSlice'

export const store = configureStore({
  reducer: {
    //----------------- STORE DATA LOGIC -----------------    
    auth: rootAuthReducer,
    [authApi.reducerPath]: authApi.reducer,

    //----------------- STORE UI -----------------
    controlModal: controlModalReducer, // dung cho dong mo modal( fix click <link> ko dong modal)

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
      .concat([
        authApi.middleware,
      ]),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;