/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUser, emailVerify, logIn, logOut, registration } from "./userOperations";

type Ttype = "error" | "success" | "warning" | "info";

export interface INotification {
  message: string;
  type: Ttype;
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
    setMessage(state, { payload }: { payload: string }) {
      state.message = payload;
    },
    setType(state, { payload }: { payload: Ttype }) {
      state.type = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(registration.pending, state => {})
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.type = "success";
        state.showNotification = true;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      })
      .addCase(logIn.pending, state => {})
      .addCase(logIn.fulfilled, (state) => {
        state.message = "";
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      })
      .addCase(logOut.pending, state => {})
      .addCase(logOut.fulfilled, state => {})
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

export const { setShowNotification, setMessage, setType } = notificationSlice.actions;
export default notificationSlice.reducer;
