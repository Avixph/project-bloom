import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobSearch } from "../services/fetchJobs";

export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (field) => {
    console.log(field);
    if (field === "") return ["Fill in search field"];

    const data = fetchJobSearch(field);
    return data;
  }
);

const searchSlice = createSlice({
  name: "jobSearches",
  initialState: {
    searchJobs: [],
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
