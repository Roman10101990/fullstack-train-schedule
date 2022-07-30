import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSchedule = createAsyncThunk(
  "schedules/getSchedule",
  async function (values, thunkApi) {
    try {
      const response = await axios.get("http://localhost:5000", {
        params: {
          startPoint: values.startCityName,
          endPoint: values.endCityName
        }
        });
if(response.data.length === 0 ){
  console.log("No such train");
  return;
}
return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);