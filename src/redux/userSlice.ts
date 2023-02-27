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
  firstTime: true,
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
    setFirstTime(state, action: PayloadAction<boolean>) {
      state.firstTime = action.payload;
    },
  },
});

export const selectIsAuth = (state: RootState) => state.user.isAuth; // а нахрена это ? <Sander-Pod>
export const { setIsAuth, setFirstTime } = userSlice.actions;
export default userSlice.reducer;
