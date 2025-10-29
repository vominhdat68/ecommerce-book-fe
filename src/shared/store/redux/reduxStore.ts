// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { rootAuthReducer } from '@/features/auth/slices';
import { authApi } from "@/features/auth/services/authSliceService";
import { searchServices } from "@/features/search/services/searchService";

import { homeService } from '@/features/home/service/homeService';

import controlModalReducer from '@/shared/slice/ControlModalSlice'

export const store = configureStore({
  reducer: {
    auth: rootAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [searchServices.reducerPath]: searchServices.reducer,

    [homeService.reducerPath]: homeService.reducer,


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
        searchServices.middleware,

        homeService.middleware,

      ]),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;