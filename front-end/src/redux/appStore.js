import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerStore"
import storyReducer from "./storySlice"
import authReducer from "./authSlice"
import postReducer from "./postSlice";

const appStore = configureStore({
  reducer:{
    header:headerReducer,
    story:storyReducer,
    auth:authReducer,
    post:postReducer
  }
})

export default appStore;