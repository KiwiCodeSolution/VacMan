/* eslint-disable prettier/prettier */
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

export const registration = createAsyncThunk<string, { email: string; password: string }, { rejectValue: string | undefined }>(
  'user/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      console.log('AsyncThunk: Congratulations! You are registered!');
      return response.data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message);
      }
      return error;
    }
  }
);

export const logIn = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string | undefined }>(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.user.token);
      console.log('Congratulations! You are logined!');
      console.log(data.user);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // console.log('AxiosError:', error);
        return rejectWithValue(error.response?.data?.message);
      }
      return error;
    }
  }
);

export const logOut = createAsyncThunk<boolean, undefined, { rejectValue: string }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    const response = await axios.get('/auth/logout');
    console.log('AxiosResponse:', response);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message)
    }
    clearAuthHeader();
    return true;
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
      // console.log('currentUser:', data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);

export const emailVerify = createAsyncThunk<IUser, { verificationCode: string }, { rejectValue: string }>(
  'user/emailVerify',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/emailVerify?verificationCode=${credentials.verificationCode}`);
      setAuthHeader(data.user.token);
      console.log(data);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);
