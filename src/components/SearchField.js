// searching input + button
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//(Below)import Thunk

import { fetchSearch } from "../redux/searchJobSlice";

export default function SearchField() {
  const jobRequest = useSelector((state) => state.searches.searchJobs);

  const dispatch = useDispatch();

  console.log(jobsRequest);

  useEffect(() => {
    dispatch(fetchSearch());
  }, []);

  console.log(jobRequest);

  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // console.log(search);
  
  function handleSearchSubmit(){
    dispatch(fetchSearch({limit: 5, name: search}))
  }
  
  return (
    <div>
      {/* <form> */}
        <input
          type="Search"
          placeholder="Search"

          value={search}
          onChange = {handleSearchInput}

        />
        {/* button is your action */}
        <button

        onClick={handleSearchSubmit}

        >
          Search
        </button>
      {/* </form> */}
    </div>
  );
}
