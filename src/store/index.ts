import { configureStore } from "@reduxjs/toolkit";
import windowsSlice from "./slices/windowsSlice";
import { api } from "./api";
import classroomSlice from "./slices/classroomSlice";

export const store = configureStore({
  reducer: {
    windows: windowsSlice,
    classroom: classroomSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
