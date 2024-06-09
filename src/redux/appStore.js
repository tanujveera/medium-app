import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerStore"

const appStore = configureStore({
  reducer:{
    header:headerReducer
  }
})

export default appStore;