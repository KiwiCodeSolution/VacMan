import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { logIn, logOut, registration } from './userOperations';

interface IUser {
  email: string;
  token: string;
  isAuth: boolean;
  onBoarding: boolean;
  isLoading: boolean;
  profile: { [key: string]: string };
}

const initialState = {
  email: '',
  token: '',
  isAuth: false,
  onBoarding: true,
  isLoading: true,
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
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.profile = payload.profile;
    },
  },
  // eslint-disable-next-line prettier/prettier
  extraReducers: (builder) =>
    builder
      // eslint-disable-next-line prettier/prettier
      .addCase(registration.pending, (state) => state)
      .addCase(registration.fulfilled, (state, action) => {
        state.profile = action.payload;
        // state.token = action.payload.token;
      }) // eslint-disable-next-line prettier/prettier
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.token = action.payload.token;
      }) // eslint-disable-next-line prettier/prettier
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.isAuth = action.payload;
      }),
  // .addCase(registration.rejected, (state, action: PayloadAction<string>) => {
  // console.log(action.payload);
  // }),
});

export const selectIsAuth = (state: RootState) => state.user.isAuth; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setOnBoarding, setIsLoading, setUser } = userSlice.actions;
export default userSlice.reducer;
