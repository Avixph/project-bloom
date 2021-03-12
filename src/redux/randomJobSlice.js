import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobCollection } from "../services/fetchJobs";

export const fetchRandom = createAsyncThunk(
  "jobAtRandom/fetchRandom",
  async () => {
    fetchJobCollection();
  }
);

const randomSlice = createSlice({
  name: "jobAtRandom",
  initialState: {
    randomJobs: [],
    status: null,
  },
  randomReducers: {
    [fetchRandom.pending]: (state, action) => {
      state.status = "loading jobs...";
    },
    [fetchRandom.fulfilled]: (state, { payload }) => {
      state.randomJobs = payload;
      state.status = "success!!!";
    },
    [fetchRandom.rejected]: (state, action) => {
      state.status = "error fail to load jobs!";
    },
  },
});

export default randomSlice.reducer;
