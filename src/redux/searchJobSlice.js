import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { fetchJobSearch } from "../services/fetchJobs";

export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (obj) => {
    console.log(obj);
    const { data } = await axios.get(
      `https://remotive.io/api/remote-jobs?search=${obj.field}&limit=${obj.limit}`
    );
    return data.jobs;

    // const data = fetchJobSearch({...obj});
    // return data;
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
      state.status = "loading";
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      state.searchJobs = payload;
      state.status = "success";
    },
    [fetchSearch.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default searchSlice.reducer;
