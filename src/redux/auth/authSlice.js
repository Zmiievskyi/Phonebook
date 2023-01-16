import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logOut, refreshUser } from '../auth/operations';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      isSignUp: false,
      isLogIn: false,
      userInfo: {},
      token: '',
    },
    error: false,
  },

  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user.isSignUp = true;
      state.user.isLogIn = true;
      state.error = false;
      state.user.userInfo = action.payload.user;
      state.user.token = action.payload.token;
    },

    [login.fulfilled](state, action) {
      state.user.isSignUp = true;
      state.user.isLogIn = true;
      state.error = false;
      state.user.userInfo = action.payload.user;
      state.user.token = action.payload.token;
    },

    [logOut.fulfilled](state) {
      state.user.isLogIn = false;
      state.user.isSignUp = false;
      state.user.userInfo = { name: 'User', number: null };
      state.user.token = '';
    },

    [login.rejected](state, action) {
      state.error = true;
    },
    [login.pending](state, action) {
      state.error = false;
    },
    [signUp.rejected](state, action) {
      state.error = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user.userInfo = action.payload;
    },
  },
});

export const { setFilter } = authSlice.actions;

export const authReducer = authSlice.reducer;
