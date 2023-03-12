import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'http://kiwicode.tech:5000';
// axios.defaults.baseURL = 'https://vacmanserver-production.up.railway.app';

interface IUser {
  email: string;
  token: string;
  profile: { [key: string]: string };
}

interface ICurrentUser {
  email: string;
  token: string;
  profile: { [key: string]: string };
}

// interface IState {
//   user: { [key: string]: string };
// }

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string }>(
  'user/registration',
  async (credentials, { rejectWithValue }) => {
    const response = await axios.post('/auth/register', credentials);
    const responsToken = response.data.token;
    setAuthHeader(responsToken);
    console.log('Congratulations! You are registered!');
    console.log(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!response) {
      return rejectWithValue("Can't register. Server error.");
    }
    return response.data as IUser;
  }
);

export const logIn = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string }>(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    const response = await axios.post('/auth/login', credentials);
    setAuthHeader(response.data.token);
    console.log('Congratulations! You are logined!');
    console.log(response.data.user);
    if (!response) {
      return rejectWithValue("Can't log in. Server error.");
    }
    return response.data.user;
  }
);

export const logOut = createAsyncThunk<boolean, boolean, { rejectValue: string }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    const response = await axios.get('/auth/logout');
    console.log(response);
    if (!response) {
      return rejectWithValue('Server error.');
    }
    clearAuthHeader();
    return false;
  }
);

export const currentUser = createAsyncThunk<ICurrentUser, undefined, { rejectValue: string }>(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    console.log(state);
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);

    const response = await axios.get(`/auth/current`);

    if (!response) {
      return rejectWithValue('Server error.');
    }
    console.log(response.data);
    return response.data;
  }
);

export const emailVerify = createAsyncThunk<ICurrentUser, undefined, { rejectValue: string }>(
  'user/emailVerify',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    console.log(state);
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);

    const response = await axios.get('/auth/emailVerify');
    console.log(response);
    if (!response) {
      return rejectWithValue('Server error.');
    }
    return response.data;
  }
);
