import { createSlice } from "@reduxjs/toolkit";
import {getSchedule} from "./scheduleThunk.js";

export const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    schedules: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.schedules = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addDefaultCase((state) => state);
  },
});

export default scheduleSlice.reducer;