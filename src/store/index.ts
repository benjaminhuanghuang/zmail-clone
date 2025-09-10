import { configureStore } from "@reduxjs/toolkit";
// Import reducers
import viewModeReducer from "./features/viewMode/viewModeSlice";
import authReducer from "./features/auth/authSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    viewMode: viewModeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // avoid warnings for tokens, FormData, etc.
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
