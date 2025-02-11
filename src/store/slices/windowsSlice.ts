import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Window = {
  id: string;
  visible: boolean;
};

const initialState: { windows: Record<string, Window> } = {
  windows: {},
};

export const windowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<Window>) => {
      const { payload } = action;
      let window = state.windows[payload.id];
      if (!window) {
        window = state.windows[payload.id] = payload;
        window.visible = payload.visible;
      }
    },
    changeWindowVisibility: (state, action: PayloadAction<Window>) => {
      const { payload } = action;
      const window = state.windows[payload.id];
      if (window) {
        window.visible = payload.visible;
      }
    },
    removeWindow: (state, action: PayloadAction<{ windowId: string }>) => {
      const { windowId } = action.payload;
      delete state.windows[windowId];
    },
  },
});

export const { addWindow, changeWindowVisibility, removeWindow } =
  windowsSlice.actions;
export default windowsSlice.reducer;
