// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import controlModalReducer from '@/shared/slice/ControlModalSlice'

export const store = configureStore({
  reducer: {
    //----------------- STORE DATA LOGIC -----------------    


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
      ]),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;