import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomJobSlice";
import searchReducer from "./searchJobSlice";

export default configureStore({
  reducer: {
    randoms: randomReducer,
    searches: searchReducer,
  },
});
