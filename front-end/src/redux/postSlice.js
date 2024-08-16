import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "../utils/API/postsAPI";

export const postFetch = createAsyncThunk("post/fetch", async (id) =>{
  const response = await getPost(id);
  console.log(response?.data)
  return response?.data?.post;
})

const postSlice = createSlice({
  name: "post",
  initialState: { postsData: null, singlePost: null },
  reducers: {
    renderPosts: (state, action) => {
      state.postsData = action.payload;
    },
    // postBlogData: (state,action) => {
    //   state.singlePost = action.payload;
    // }
  },
  extraReducers:(builder)=>{
    builder.addCase(postFetch.pending, (state)=>{
      state.singlePost = null
    })
    .addCase(postFetch.rejected, (state)=>{
      state.singlePost = null
    })
    .addCase(postFetch.fulfilled, (state,action)=>{
      state.singlePost = action.payload;
    })
  }
});

export const { renderPosts, postBlogData } = postSlice.actions;

export default postSlice.reducer;
