import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLogin: false,
  token: null,
  expire: null
};

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     const request = await axios.post(
//       "https://gateway.scan-interfax.ru/api/v1/account/login",
//       userCredentials
//     );
//     const responce = await request.data.data;
//     localStorage.setItem("user", JSON.stringify(responce));
//     return responce;
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      state.token = '123'
      state.expire = '456'
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null
      state.expire = null
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
