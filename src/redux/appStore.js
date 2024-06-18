import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerStore"
import storyReducer from "./storySlice"

const appStore = configureStore({
  reducer:{
    header:headerReducer,
    story:storyReducer
  }
})

export default appStore;