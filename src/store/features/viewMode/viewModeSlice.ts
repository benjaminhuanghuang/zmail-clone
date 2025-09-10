import { createSlice } from "@reduxjs/toolkit";
import type { ViewMode } from "./types";

interface ViewModeState {
  mode: ViewMode;
}

const initialState: ViewModeState = { mode: "default" };

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (state, { payload }: { payload: ViewMode }) => {
      state.mode = payload;
    },
  },
  selectors: {
    viewMode: (state: ViewModeState) => state.mode,
  },
});

// export actions
export const { setViewMode } = viewModeSlice.actions;

// export selectors will lost type inference
export const { viewMode } = viewModeSlice.selectors;

export default viewModeSlice.reducer;
