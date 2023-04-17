/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUser, emailVerify, logIn, logOut, passCodeVerify, changePass, registration, updateProfile } from "./userOperations";
import { IProfile } from "./userSlice";

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
      // .addCase(emailVerify.pending, state => {})
      // .addCase(emailVerify.fulfilled, (state, { payload }) => {})
      // .addCase(emailVerify.rejected, state => { })
      // .addCase(passCodeVerify.pending, state => {})
      // .addCase(passCodeVerify.fulfilled, (state, { payload }) => {})
      // .addCase(passCodeVerify.rejected, state => {}),
      .addCase(changePass.pending, state => {})
      .addCase(changePass.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.type = "success";
        state.showNotification = true;
      })
      .addCase(changePass.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      })
      .addCase(updateProfile.pending, state => {})
      .addCase(updateProfile.fulfilled, (state, { payload }: { payload: { message: string, profileData: IProfile } }) => {
        state.message = payload.message;
        state.type = "success";
        state.showNotification = true;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.type = "error";
        state.showNotification = true;
      }),
});

export const { setShowNotification, setMessage, setType } = notificationSlice.actions;
export default notificationSlice.reducer;
