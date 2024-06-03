import { createSlice } from "@reduxjs/toolkit"


const headerStore = createSlice({
  name:"header",
  initialState:{isHome:null, isAbout:null, isLogin:null},
  reducers:{
    pageState:(state, action)=>{
      
    }
  }
})

export default headerStore