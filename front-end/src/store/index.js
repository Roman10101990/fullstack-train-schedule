import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./scheduleThunkAndSlice/scheduleSlice.js"

export const store = configureStore({
  reducer: {
    schedules: scheduleSlice
  },
});