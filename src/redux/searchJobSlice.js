import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobsSearch } from "../services/fetchJobs";



export const fetchSearch = createAsyncThunk(
  "jobSearches/fetchSearch",
  async () => {
    return fetch('https://pokeapi.co/api/v2/ability/110/').then(res => res.json())
  }
)








const searchSlice = createSlice({
  

  name: "jobSearches",
  initialState: {
    jobs: [],
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