import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: {
    showStartingPage: true,
  },
  reducers: {
    setShowStartingPage(state, { payload }: { payload: boolean }) {
      state.showStartingPage = payload;
    },
  },
});
export const { setShowStartingPage } = appSlice.actions;
export default appSlice.reducer;
