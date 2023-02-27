import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// interface IisAuth {
//   isAuth: boolean;
//   name: string;
//   email: string;
//   token: string;
//   profile: { [key: string]: string };
// }

const initialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  onBoarding: true,
  isLoading: true,
  profile: {
    phoneNumber: '',
    position: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setOnBoarding(state, action: PayloadAction<boolean>) {
      state.onBoarding = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const selectIsAuth = (state: RootState) => state.user.isAuth; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setOnBoarding, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
