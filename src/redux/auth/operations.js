import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (newUser, thunkAPI) => {
    try {
      const respons = await axios.post("/users/signup", newUser);
      setAuthHeader(respons.data.token);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const respons = await axios.post("/users/login", user);
    setAuthHeader(respons.data.token);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.user.token;
    // setAuthHeader(persistedToken);
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "contacts/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
