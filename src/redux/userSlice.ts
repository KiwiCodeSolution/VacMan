/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { currentUser, emailVerify, logIn, logOut, registration } from './userOperations';

interface IUser {
  email: string;
  token: string;
  profile: { [key: string]: string };
}

const initialState = {
  email: '',
  token: '',
  isAuth: false,
  onBoarding: true,
  isLoading: false,
  showStartingPage: true,
  lang: "eng",
  profile: {},
};

const userSlice = createSlice({
  name: 'user',
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
    setLang(state, { payload }: PayloadAction<"eng" | "ru" | "ukr">) {
      state.lang = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.profile = payload.profile;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, (state) => state)
      .addCase(registration.fulfilled, (state, action) => {
        state.isAuth = action.payload;
      })
      .addCase(registration.rejected, (state) => state)
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.profile = action.payload.profile;
        state.token = action.payload.token;
      })
      .addCase(logIn.rejected, (state) => state)
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.isAuth = action.payload;
        state.token = '';
        state.email = '';
        state.profile = {};
        state.showStartingPage = true;
      })
      .addCase(logOut.rejected, (state) => state)
      .addCase(currentUser.pending, (state) => state)
      .addCase(currentUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.profile = action.payload.profile;
        state.token = action.payload.token;
      })
      .addCase(currentUser.rejected, (state) => state)
      .addCase(emailVerify.pending, (state) => state)
      .addCase(emailVerify.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.profile = action.payload.profile;
        state.token = action.payload.token;
      })
      .addCase(emailVerify.rejected, (state) => state),
});

export const selectIsAuth = (state: RootState) => state.user.isAuth; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setOnBoarding, setIsLoading, setShowStartingPage, setLang, setUser } = userSlice.actions;
export default userSlice.reducer;
