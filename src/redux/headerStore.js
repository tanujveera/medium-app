import { createSlice } from "@reduxjs/toolkit";

const headerStore = createSlice({
  name: "header",
  initialState: { isLogin: true, isLoginModal: false, isEmail: null },
  reducers: {
    loginState: (state, action) => {
      state.isLogin = action.payload;
    },
    loginModal: (state) => {
      state.isLoginModal = !state.isLoginModal;
    },
    loginEmail: (state, action) => {
      state.isEmail = action.payload;
    },
  },
});

export const { loginState, loginModal, loginEmail } = headerStore.actions;

export default headerStore.reducer;
