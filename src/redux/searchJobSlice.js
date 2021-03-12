import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobsSearch } from "../services/fetchJobs";
import axios from "axios";


export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async (obj) => {
    
    console.log(obj)
  
    const { data } = await axios.get(`https://remotive.io/api/remote-jobs?search=${obj.name}&limit=${obj.limit}`)
    //limit not working
    return data;
  }
)


const searchSlice = createSlice({

  name: "jobSearches",
  initialState: {
    jobs: undefined,
    status: null,
  },

  extraReducers: {
    [fetchSearch.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      state.jobs = payload;
      state.status = "success";
    },
    [fetchSearch.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
})


export default searchSlice.reducer;