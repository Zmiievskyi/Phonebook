import { createSlice } from "@reduxjs/toolkit";
import { signUp, login, logOut } from "../auth/operations";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: {
      isSignUp: false,
      isLogIn: false,
      userInfo: {},
      token: "",
    },
  },

  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user.isSignUp = true;
      state.user.isLogIn = true;
      state.user.userInfo = action.payload.user;
      state.user.token = action.payload.token;
    },

    [login.fulfilled](state, action) {
      state.user.isSignUp = true;
      state.user.isLogIn = true;
      state.user.userInfo = action.payload.user;
      state.user.token = action.payload.token;
    },

    [logOut.fulfilled](state) {
      state.user.isLogIn = false;
      state.user.isSignUp = false;
      state.user.userInfo = { name: "User", number: null };
      state.user.token = "";
    },

    [logOut.rejected](state, action) {
      console.log(action);
    },
  },
});

export const { setFilter } = authSlice.actions;

export const authReducer = authSlice.reducer;
