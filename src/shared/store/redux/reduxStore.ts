// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { rootAuthReducer } from '@/features/auth/slices';
import { authApi } from "@/features/auth/services/authSliceService";
import { searchServices } from "@/features/search/services/searchService";

import { homeService } from '@/features/home/service/homeService';


import controlModalReducer from '@/shared/slice/ControlModalSlice'
import { cartService } from '@/features/cart/services/cartService';
import cartReducer from "@/features/cart/slices/cartSlice"
import { productDetailService } from '@/features/product-detail/service/detailProductService'

export const store = configureStore({
  reducer: {
    auth: rootAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [searchServices.reducerPath]: searchServices.reducer,

    [homeService.reducerPath]: homeService.reducer,
    [cartService.reducerPath]: cartService.reducer,
    [productDetailService.reducerPath]: productDetailService.reducer,

    //----------------- STORE UI -----------------
    cart: cartReducer, // UI state của cart
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
        cartService.middleware,
        productDetailService.middleware,

      ]),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;