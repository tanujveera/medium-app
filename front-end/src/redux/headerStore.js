import { createSlice } from "@reduxjs/toolkit";

const headerStore = createSlice({
  name: 'header',
  initialState: { isSignIn: true, isEmail: false, landing:{}, about:{} },
  reducers: {
    loginState: (state, action) => {
      state.isSignIn = action.payload;
    },

    loginEmail: (state, action) => {
      state.isEmail = action.payload;
    },
    pageInfoData:(state,action) => {
      state.landing= action.payload;
    },
    aboutData:(state,action)=>{
      state.about = action.payload;
    }
  },
});

export const { loginState, loginEmail, pageInfoData, aboutData } = headerStore.actions;

export default headerStore.reducer;
