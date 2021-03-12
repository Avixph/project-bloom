import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobSearch } from "../services/fetchJobs";

export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async () => {
    // return fetch(
    //   "https://remotive.io/api/remote-jobs?category=software-dev"
    // ).then((res) => res.json());

    // const { data } = await axios.get(
    //   "https://remotive.io/api/remote-jobs?category=software-dev&limit=25"
    // );
    // return data.jobs;

    fetchJobSearch();
  }
);

const searchSlice = createSlice({
  name: "jobSearches",
  initialState: {
    searchJobs: [],
    status: null,
  },

  searchReducers: {
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
