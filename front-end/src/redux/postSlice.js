import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { postsData: null },
  reducers: {
    renderPosts: (state, action) => {
      state.postsData = action.payload;
    },
  },
});

export const { renderPosts } = postSlice.actions;

export default postSlice.reducer;
