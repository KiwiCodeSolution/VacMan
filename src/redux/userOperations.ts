import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = Bearer ${token};
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/auth/register', credentials);
    setAuthHeader(response.data.token);
    console.log('Congratulations! You are registered!');

    return response.data;
  } catch (error) {
    console.log('Please, try one more');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.log('Incorrect email or password. Please, try one more');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
 try {
   setAuthHeader();
   const res = await axios.get('/auth/logout');
   return res.data;
 } catch (error) {
   console.log('Please, try one more');
   return thunkAPI.rejectWithValueerror.message);
});

export const currentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
   try {
   setAuthHeader();
   const res = await axios.get('/auth/current');
   return res.data;
 } catch (error) {
   console.log('Please, try one more');
   return thunkAPI.rejectWithValue(error.message);
});

export const emailVerify = createAsyncThunk('auth/emailVerify', async (_, thunkAPI) => {
   try {
   setAuthHeader();
   const res = await axios.get('/auth/emailVerify');
   return res.data;
 } catch (error) {
   console.log('Please, try one more');
   return thunkAPI.rejectWithValue(error.message);
}
});