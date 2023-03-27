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
  currProfile: '',
  profile: {avatar: "", phoneNumber: "", position: "", lang: 'eng', theme: ""} as IProfile,
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
      state.profile.lang = payload;
    },
    setMessage(state, { payload }: { payload: string }) {
      state.message = payload;
    },
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.profile = payload.profile;
      state.currProfile = payload.currProfile || '';
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
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
        state.currProfile = '';
        state.message = '';
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
        state.token = '';
        state.email = '';
        state.currProfile = '';
        state.profile = {} as IProfile;
        state.showStartingPage = true;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isLoading = false;
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        if (payload) state.message = payload;
        state.isAuth = false;
        state.token = '';
        state.email = '';
        state.currProfile = '';
        state.profile = {} as IProfile;        
        state.isLoading = false;
      })
      .addCase(emailVerify.pending, state => {
        state.isLoading = true;
      })
      .addCase(emailVerify.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.email = payload.email;
        state.profile = payload.profile;
        state.token = payload.token;
        state.onBoarding = true;
        state.isLoading = false;
      })
      .addCase(emailVerify.rejected, state => {
        state.isLoading = false;
      }),
});

export const selectProfile = (state: RootState): IUser => state.user; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setOnBoarding, setIsLoading, setShowStartingPage, setLang, setUser, setMessage } = userSlice.actions;
export default userSlice.reducer;
