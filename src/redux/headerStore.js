import { createSlice } from "@reduxjs/toolkit";

const headerStore = createSlice({
  name: 'header',
  initialState: { isSignIn: true, isEmail: false },
  reducers: {
    loginState: (state, action) => {
      state.isSignIn = action.payload;
    },

    loginEmail: (state, action) => {
      state.isEmail = action.payload;
    },
  },
});

export const { loginState, loginEmail } = headerStore.actions;

export default headerStore.reducer;
