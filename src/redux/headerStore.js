import { createSlice } from "@reduxjs/toolkit";

const headerStore = createSlice({
  name: "header",
  initialState: { isSignin: true, isEmail: null },
  reducers: {
    loginState: (state, action) => {
      state.isSignin = action.payload;
    },

    loginEmail: (state, action) => {
      state.isEmail = action.payload;
    },
  },
});

export const { loginState, loginEmail } = headerStore.actions;

export default headerStore.reducer;
