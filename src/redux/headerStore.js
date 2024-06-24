import { createSlice } from "@reduxjs/toolkit";

const headerStore = createSlice({
  name: 'header',
  initialState: { isSignIn: true, isEmail: false, pageInfo:{} },
  reducers: {
    loginState: (state, action) => {
      state.isSignIn = action.payload;
    },

    loginEmail: (state, action) => {
      state.isEmail = action.payload;
    },
    pageInfoData:(state,action) => {
      state.pageInfo= action.payload;
    }
  },
});

export const { loginState, loginEmail, pageInfoData } = headerStore.actions;

export default headerStore.reducer;
