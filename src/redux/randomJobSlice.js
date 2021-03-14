import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobCollection } from "../services/fetchJobs";

export const fetchRandom = createAsyncThunk(
  "jobAtRandom/fetchRandom",
  async () => {
    const data = await fetchJobCollection();
    console.log(`There are ${data.length} jobs!`);

    const randomData = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomData.push(data[randomIndex]);
      data.splice(randomIndex, 1);
    }

    console.log(`There are ${randomData.length} jobs!`);
    return randomData;
  }
);

const randomSlice = createSlice({
  name: "jobAtRandom",
  initialState: {
    randomJobs: [],
    status: null,
  },
  extraReducers: {
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
