export const getUser = (state) => state.auth.user.userInfo;
export const getIsLogin = (state) => state.auth.user.isLogIn;
export const getError = state => state.auth.error;