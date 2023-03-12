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

// const setAuthHeader = (responsToken) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${responsToken}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const registration = createAsyncThunk<IUser[], undefined, { rejectValue: string }>(
  'user/registration',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const response = await axios.post('/auth/register', credentials);
      const responsToken = response.data.token;
      //   setAuthHeader(responsToken);
      console.log('Congratulations! You are registered!');

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(`Sorry, registration error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', credentials);
    // setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.log('Incorrect email or password. Please, try one more');
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    // setAuthHeader();
    const res = await axios.get('/auth/logout');
    return res.data;
  } catch (error) {
    console.log('Please, try one more');
    return thunkAPI.rejectWithValue(error);
  }
});

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
