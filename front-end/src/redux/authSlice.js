import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/auth/axiosInstance";

export const checkAuthStatus = createAsyncThunk('auth/checkStatus', async () => {
  const response = await axiosInstance.get('/auth-status');
  return response.data.user;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    response: null,
    loading: true,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.response = null;
    },
    extraReducers: (builder) => {
      builder
        .addCase(checkAuthStatus.pending, (state) => {
          state.loading = true;
        })
        .addCase(checkAuthStatus.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload;
          state.loading = false;
        })
        .addCase(checkAuthStatus.rejected, (state) => {
          state.isAuthenticated = false;
          state.user = null;
          state.loading = false;
        });
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;