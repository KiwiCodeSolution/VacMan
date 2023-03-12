import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';

interface IUser {
  email: string;
  token: string;
  isAuth: boolean;
  onBoarding: boolean;
  isLoading: boolean;
  profile: { [key: string]: string };
}

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const registration = createAsyncThunk<
  IUser,
  { email: string; password: string; username: string },
  { rejectValue: string }
>('user/registration', async (credentials, { rejectWithValue }) => {
  const response = await axios.post('/auth/register', credentials);
  //   const responsToken = response.data.token;
  //   setAuthHeader(responsToken);
  console.log('Congratulations! You are registered!');
  console.log(response.data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!response) {
    return rejectWithValue("Can't register. Server error.");
  }
  return response.data as IUser;
});

export const logIn = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string }>(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    const response = await axios.post('/auth/login', credentials);
    setAuthHeader(response.data.token);
    console.log('Congratulations! You are logined!');
    console.log(response.data);
    if (!response) {
      return rejectWithValue("Can't log in. Server error.");
    }
    return response.data;
  }
);

export const logOut = createAsyncThunk<boolean, boolean, { rejectValue: string }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    console.log('/auth/logout');
    const response = await axios.get('/auth/logout');
    console.log(response);
    if (!response) {
      return rejectWithValue('Server error.');
    }
    return false;
  }
);

export const currentUser = createAsyncThunk('user/current', async (_, thunkAPI) => {
  try {
    // setAuthHeader();
    const res = await axios.get('/auth/current');
    return res.data;
  } catch (error) {
    console.log('Please, try one more');
    //    return thunkAPI.rejectWithValue(error.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const emailVerify = createAsyncThunk('user/emailVerify', async (_, thunkAPI) => {
  try {
    // setAuthHeader();
    const res = await axios.get('/auth/emailVerify');
    return res.data;
  } catch (error) {
    console.log('Please, try one more');
    return thunkAPI.rejectWithValue(error);
  }
});
