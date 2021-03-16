import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { fetchJobsSearch } from "../services/fetchJobs";
import axios from "axios";
// import { fetchJobSearch } from "../services/fetchJobs";


export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (obj) => {

    console.log(obj);
    if (obj.field === "") return ["Fill in search field"]
    
    const { data } = await axios.get(
      `https://remotive.io/api/remote-jobs?search=${obj.field}&limit=${obj.limit}`
    );
    return data.jobs;

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
})


export default searchSlice.reducer;