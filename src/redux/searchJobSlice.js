import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchJobsSearch } from "../services/fetchJobs";
import axios from "axios";

import { fetchJobSearch } from "../services/fetchJobs";

export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (obj) => {
    
    console.log(obj)
  
    const { data } = await axios.get(`https://remotive.io/api/remote-jobs?search=${obj.name}&limit=${obj.limit}`)
    //limit not working
    return data;
    
    // fetchJobSearch();
  }
)


const searchSlice = createSlice({

  name: "jobSearches",
  initialState: {
    searchJobs: undefined,

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
