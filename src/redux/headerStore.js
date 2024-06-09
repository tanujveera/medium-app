import { createSlice } from "@reduxjs/toolkit"


const headerStore = createSlice({
  name:"header",
  initialState:{isHome:null, isAbout:null, isLogin:true, isLoginModal:false},
  reducers:{
    loginState:(state,action)=>{
      state.isLogin = action.payload
    },
    loginModal:(state)=>{
      state.isLoginModal= !state.isLoginModal
    }
  }
})

export const {loginState,loginModal} = headerStore.actions;

export default headerStore.reducer;