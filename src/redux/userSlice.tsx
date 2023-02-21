import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// interface IisAuth {
//   isAuth: boolean;
//   name: string;
//   email: string;
//   password: string;
//   token: string;
//   profile: { [key: string]: string };
// }

const initialState = {
  isAuth: false,
  name: '',
  email: '',
  password: '',
  token: '',
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
  },
});

export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const { setIsAuth } = userSlice.actions;
export default userSlice.reducer;
