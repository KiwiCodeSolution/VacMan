import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'http://kiwicode.tech:5000';
// axios.defaults.baseURL = 'https://vacmanserver-production.up.railway.app';

interface IUser {
  email: string;
  token: string;
  profile: { [key: string]: string };
}

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk<boolean, { email: string; password: string }, { rejectValue: string }>(
  'user/registration',
  async (credentials, { rejectWithValue }) => {
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
      const response = await axios.post('/auth/login', credentials);
      setAuthHeader(response.data.token);
      console.log('Congratulations! You are logined!');
      console.log(response.data.user);
      return response.data.user;
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

      const response = await axios.get(`/auth/current`);
      if (persistedToken === null) {
        return rejectWithValue('Unable to fetch user');
      }
      setAuthHeader(persistedToken);
      console.log(response.data);
      return response.data;
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
      const response = await axios.get(`/auth/emailVerify?token=${credentials.token}`);
      setAuthHeader(credentials.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue('Server error.');
    }
  }
);
