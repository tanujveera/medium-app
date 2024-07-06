import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerStore"
import storyReducer from "./storySlice"
import authReducer from "./authSlice"

const appStore = configureStore({
  reducer:{
    header:headerReducer,
    story:storyReducer,
    auth:authReducer
  }
})

export default appStore;