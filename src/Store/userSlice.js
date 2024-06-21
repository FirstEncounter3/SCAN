import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  accessToken: null,
  expire: null
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload.accessToken
      state.expire = action.payload.expire
    },
    logout: (state) => {
      state.isLogin = false;
      state.accessToken = null
      state.expire = null
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
