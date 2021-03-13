import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

import { fetchJobSearch } from "../services/fetchJobs";

export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (obj, thunkAPI) => {
    console.log(obj);
    // const { data } = await axios.get(
    //   `https://remotive.io/api/remote-jobs?search=${obj.feild}&limit=${obj.limit}`
    // );
    // //limit not working

    // return data;

    fetchJobSearch(obj);
  }
);

const searchSlice = createSlice({
  name: "jobSearches",
  initialState: {
    searchJobs: undefined,
    status: null,
  },
  extraReducers: {
    [fetchSearch.pending]: (state, action) => {
      state.status = "loading jobs...";
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      state.searchJobs = payload;
      state.status = "success";
    },
    [fetchSearch.rejected]: (state, action) => {
      state.status = "error fail to load jobs!";
    },
  },
});

export default searchSlice.reducer;
