import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { postsData: null, singlePost: null },
  reducers: {
    renderPosts: (state, action) => {
      state.postsData = action.payload;
    },
    postBlogData: (state,action) => {
      state.singlePost = action.payload;
    }
  },
});

export const { renderPosts, postBlogData } = postSlice.actions;

export default postSlice.reducer;
