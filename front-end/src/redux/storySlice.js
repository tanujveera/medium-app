import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
  name:'story',
  initialState:{isHome:true, isStory:null},
  reducers:{
    newStory:(state,action)=>{
      state.isStory = action.payload;
    },
    homePage:(state,action)=>{
      state.isHome = action.payload;
    }
  }
})
export const  {newStory, homePage} = storySlice.actions;
export default storySlice.reducer;