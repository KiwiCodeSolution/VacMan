/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUser, emailVerify, logIn, logOut, registration } from "./userOperations";

export interface INotification {
  message: string;
  type: string;
  showNotification: boolean;
}

const initialState = {
  message: "",
  type: "success",
  showNotification: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setShowNotification(state, { payload }: PayloadAction<boolean>) {
      state.showNotification = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(registration.pending, state => {})
      .addCase(registration.fulfilled, (state, action) => {
        state.message = action.payload;
        state.type = "success";
      })
      .addCase(registration.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      })
      .addCase(logIn.pending, state => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.message = "";
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      })
      .addCase(logOut.pending, state => {})
      .addCase(logOut.fulfilled, (state, { payload }) => {})
      .addCase(logOut.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
      })
      .addCase(currentUser.pending, state => {})
      .addCase(currentUser.fulfilled, (state, { payload }) => {})
      .addCase(currentUser.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
      })
      .addCase(emailVerify.pending, state => {})
      .addCase(emailVerify.fulfilled, (state, { payload }) => {})
      .addCase(emailVerify.rejected, state => {}),
});

export const { setShowNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
