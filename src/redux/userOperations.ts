/* eslint-disable prettier/prettier */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { IProfile, ISettings, IUser } from "./userSlice";
import serverUrl from "../appConfig";

axios.defaults.baseURL = serverUrl;

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registration = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string | undefined }
>("user/registration", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post("/auth/register", credentials);
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return error;
  }
});

export const logIn = createAsyncThunk<IUser, { email: string; password: string }, { rejectValue: string | undefined }>(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      setAuthHeader(data.user.token);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message);
      }
      return error;
    }
  }
);

export const logOut = createAsyncThunk<boolean, undefined, { rejectValue: string }>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    const response = await axios.get("/auth/logout");
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    clearAuthHeader();
    return false;
  }
);

export const currentUser = createAsyncThunk<IUser, undefined, { rejectValue: string }>(
  "user/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState() as { user: IUser };
      const persistedToken = user.token;
      setAuthHeader(persistedToken);
      const { data } = await axios.get(`/auth/current?currProfile=${user.currProfile}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);

export const emailVerify = createAsyncThunk<IUser, { verificationCode: string }, { rejectValue: string }>(
  "user/emailVerify",
  async ({ verificationCode }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/emailVerify?verificationCode=${verificationCode}`);
      setAuthHeader(data.user.token);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);

export const passRestore = createAsyncThunk<string, { email: string }, { rejectValue: string }>(
  "user/restorePass",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/auth/passRestore`, { email });
      return data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);
export const passCodeVerify = createAsyncThunk<IUser, { verificationCode: string }, { rejectValue: string }>(
  "user/pathCodeVerify",
  async ({ verificationCode }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/pathCodeVerify?verificationCode=${verificationCode}`);
      if (data) setAuthHeader(data.user.token);
      // console.log(data);
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);
export const changePass = createAsyncThunk<string, string, { rejectValue: string }>(
  "user/changePass",
  async (password, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/changePass", { password });
      return data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
  }
);

export const updateProfile = createAsyncThunk<
  { message: string; profile: IProfile },
  IProfile,
  { rejectValue: string }
>("user/updateProfile", async (profileData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/profile", { ...profileData });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
});

export const updateSettings = createAsyncThunk<
  { message: string; settings: ISettings },
  ISettings,
  { rejectValue: string }
>("user/updateSettings", async (settingsData, { rejectWithValue }) => {
  try {
    // console.log("update vacancy data:", { ...settingsData });
      const { data } = await axios.post("/settings", { ...settingsData });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error.response?.data?.message);
      return error;
    }
});

export const uploadAvatar = createAsyncThunk<
  { message: string; profile: IProfile }, unknown, { rejectValue: string }
  >("user/uploadAvatar", async (data, { rejectWithValue }) => {
  const response = await axios.post("profile/uploadAva", data);
  if (response.status !== 200) {
    return rejectWithValue(response.data.message);
  };
  return response.data;
});

export const sendFeedback = createAsyncThunk<
  string, {text:string, email:string, profile: IProfile}, { rejectValue: string }
  >("user/sendFeedback", async ({text, email, profile}, { rejectWithValue }) => {
    const { name, phoneNumber, location } = profile;
    const {VITE_TG_TOKEN: token, VITE_TG_CHAT_ID: chatId} = import.meta.env;
    const message = `<b>VacMan</b> %0A<b>Client:</b> ${email} %0A<b>Name:</b> ${name} %0A<b>Phone:</b> ${phoneNumber} %0A<b>location:</b> ${location} %0A<b>text:</b> ${text}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`
    
    const response = await axios.get(url);
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);