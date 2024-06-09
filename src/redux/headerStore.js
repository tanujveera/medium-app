import { createSlice } from "@reduxjs/toolkit"


const headerStore = createSlice({
  name:"header",
  initialState:{isHome:null, isAbout:null, isLogin:true},
  reducers:{
    loginState:(state)=>{
      state.isLogin = !state.isLogin
    }
  }
})

export const {loginState} = headerStore.actions;

export default headerStore.reducer;