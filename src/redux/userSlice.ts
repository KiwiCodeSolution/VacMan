/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { currentUser, emailVerify, logIn, logOut, registration } from './userOperations';

interface IProfile {
  [key: string]: string;
}

export interface IUser {
  email: string;
  token: string;
  currProfile?: string;
  profile: IProfile;
}

const initialState = {
  email: '',
  token: '',
  isAuth: false,
  onBoarding: true,
  isLoading: false,
  showStartingPage: true,
  lang: 'eng',
  currProfile: '',
  profile: {} as IProfile,
  message: '',
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
    setLang(state, { payload }: PayloadAction<'eng' | 'ru' | 'ukr'>) {
      state.lang = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.profile = payload.profile;
      state.currProfile = payload.currProfile || '';
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, (state) => state)
      .addCase(registration.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
      })
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
        state.currProfile = '';
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
      })
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isAuth = payload;
        state.token = '';
        state.email = '';
        state.currProfile = '';
        state.profile = {} as IProfile;
        state.showStartingPage = true;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
      })
      .addCase(currentUser.pending, (state) => state)
      .addCase(currentUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
      })
      .addCase(emailVerify.pending, (state) => state)
      .addCase(emailVerify.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
        state.onBoarding = true;
      })
      .addCase(emailVerify.rejected, (state) => state),
});

export const selectProfile = (state: RootState): IUser => state.user; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setOnBoarding, setIsLoading, setShowStartingPage, setLang, setUser } = userSlice.actions;
export default userSlice.reducer;
