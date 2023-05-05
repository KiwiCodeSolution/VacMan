/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";
// eslint-disable-next-line import/no-cycle
import {
  currentUser,
  registration,
  logIn,
  logOut,
  passCodeVerify,
  emailVerify,
  changePass,
  updateProfile,
  updateSettings,
  uploadAvatar,
} from "./userOperations";

export interface IProfile {
  [key: string]: string;
}
export interface ISettings {
  lang: "eng" | "ukr" | "ru";
  theme: "light" | "dark";
  notification: boolean;
}
export interface IUser {
  email: string;
  token: string;
  currProfile?: string;
  profile: IProfile;
  settings: ISettings;
}

const initialState = {
  email: "",
  token: "",
  isAuth: false,
  emailConfirmed: false,
  passCodeVerified: false,
  onBoarding: true,
  isLoading: false,
  showStartingPage: true,
  currProfile: "",
  profile: { avatar: "", phoneNumber: "", position: "" } as IProfile,
  settings: { lang: "eng", theme: "light",  notification: false } as ISettings,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    setOnBoarding(state, { payload }: PayloadAction<boolean>) {
      state.onBoarding = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setShowStartingPage(state, { payload }: PayloadAction<boolean>) {
      state.showStartingPage = payload;
    },
    setSettings(state, { payload }: PayloadAction<ISettings>) {
      state.settings = payload;
    },
    setProfile(state, { payload }: { payload: IProfile }) {
      state.profile = payload;
    },
    setMessage(state, { payload }: { payload: string }) {
      state.message = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.profile = payload.profile;
      state.settings = payload.settings;
      state.currProfile = payload.currProfile || "";
    },
  },

  extraReducers: builder =>
    builder
      .addCase(registration.pending, state => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.isAuth = true;
        state.token = payload.token;
        state.email = payload.email;
        state.profile = payload.profile;
        state.settings = payload.settings;
        state.currProfile = "";
        state.message = "";
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isAuth = payload;
        state.token = "";
        state.email = "";
        state.currProfile = "";
        state.profile = {} as IProfile;
        state.settings = {} as ISettings;
        state.showStartingPage = true;
        state.passCodeVerified = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isLoading = false;
      })
      .addCase(currentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.token = payload.token;
        state.email = payload.email;
        state.profile = payload.profile;
        state.settings = payload.settings;
        state.isLoading = false;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isAuth = false;
        state.token = "";
        state.email = "";
        state.currProfile = "";
        state.profile = {} as IProfile;
        state.settings = {} as ISettings;
        state.passCodeVerified = false;
        state.isLoading = false;
      })
      .addCase(emailVerify.pending, state => {
        state.isLoading = true;
      })
      .addCase(emailVerify.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.settings = payload.settings;
        state.token = payload.token;
        state.onBoarding = true;
        state.emailConfirmed = true;
        state.isLoading = false;
      })
      .addCase(emailVerify.rejected, state => {
        state.isLoading = false;
      })
      .addCase(passCodeVerify.pending, state => {
        state.passCodeVerified = false;
        state.isLoading = true;
      })
      .addCase(passCodeVerify.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.settings = payload.settings;
        state.token = payload.token;
        state.onBoarding = true;
        state.passCodeVerified = true;
        state.isLoading = false;
      })
      .addCase(passCodeVerify.rejected, state => {
        state.isLoading = false;
      })
      .addCase(changePass.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePass.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(changePass.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }: { payload: { message: string; profile: IProfile } }) => {
        state.profile = payload.profile;
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateSettings.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        updateSettings.fulfilled,
        (state, { payload }: { payload: { message: string; settings: ISettings } }) => {
          state.settings = payload.settings;
          state.isLoading = false;
        }
      )
      .addCase(updateSettings.rejected, state => {
        state.isLoading = false;
      })
      .addCase(uploadAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        uploadAvatar.fulfilled,
        (state, { payload }: { payload: { message: string; profile: IProfile } }) => {
          state.profile = payload.profile;
        })
      .addCase(uploadAvatar.rejected, state => {
        state.isLoading = false;
      })
  ,
});

export const { setIsAuth, setOnBoarding, setIsLoading, setShowStartingPage, setUser, setMessage } = userSlice.actions;
export default userSlice.reducer;
