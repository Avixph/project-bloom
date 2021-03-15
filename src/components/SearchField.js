// searching input + button
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice"



export default function SearchField() {
  
  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const dispatch = useDispatch();

  console.log(jobsRequest);

  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  // console.log(search);

  return (
    <div>
        <input
          type="Search"
          placeholder="Search"
          value={search}
          onChange = {handleSearchInput}
        />
        <button
          onClick={() => dispatch(fetchSearch({limit: 10, field: search}))}
        >
          Search
        </button>
    </div>
  );
}
