import { configureStore } from "@reduxjs/toolkit";
// Import reducers
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // avoid warnings for tokens, FormData, etc.
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
