import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from './userSlice';

// axios.defaults.baseURL = 'http://localhost:3030';
// axios.defaults.baseURL = 'http://kiwicode.tech:5000';
axios.defaults.baseURL = 'https://vacmanserver-production.up.railway.app';

// interface IUser {
//   email: string;
//   token: string;
//   profile: { [key: string]: string };
// }

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk<boolean, { email: string; password: string }, { rejectValue: string }>(
  'user/registration',
  async (credentials, { rejectWithValue }) => {
    console.log('credentials', credentials);
    try {
      await axios.post('/auth/register', credentials);
      console.log('Congratulations! You are registered!');
      return true;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue("Can't register. Server error.");
    }
  }
);

export const logIn = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string }>(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.user.token);
      console.log('Congratulations! You are logined!');
      console.log(data.user);
      return data.user;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue("Can't register. Server error.");
    }
  }
);

export const logOut = createAsyncThunk<boolean, boolean, { rejectValue: string }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/auth/logout');
      console.log(response);
      clearAuthHeader();
      return false;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue('Server error.');
    }
  }
);

export const currentUser = createAsyncThunk<IUser, undefined, { rejectValue: string }>(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState() as { user: IUser };
      const persistedToken = user.token;
      setAuthHeader(persistedToken);
      const { data } = await axios.get(`/auth/current?currProfile=${user.currProfile}`);
      console.log('currentUser:', data);
      return data;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue('Server error.');
    }
  }
);

export const emailVerify = createAsyncThunk<IUser, { token: string }, { rejectValue: string }>(
  'user/emailVerify',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/emailVerify?token=${credentials.token}`);
      setAuthHeader(credentials.token);
      console.log(data);
      return data.user;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue('Server error.');
    }
  }
);
