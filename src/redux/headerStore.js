import { createSlice } from "@reduxjs/toolkit"


const headerStore = createSlice({
  name:"header",
  initialState:{isHome:null, isAbout:null, isLogin:null},
  reducers:{
    loginState:(state, action)=>{
      state.isLogin = action.payload
    }
  }
})

export const {loginState} = headerStore.actions;

export default headerStore.reducer;