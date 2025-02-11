import { configureStore } from "@reduxjs/toolkit";
import windowsSlice from "./slices/windowsSlice";

export const store = configureStore({
  reducer: {
    windows: windowsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
