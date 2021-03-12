import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchJobSlice";



export default configureStore({
  reducer: {
    searches: searchReducer,
  },
  
});
