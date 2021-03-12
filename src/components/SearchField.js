// searching input + button
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice"
import fetchJobPosts from "../services/fetchJobPosts"



export default function SearchField() {


  const jobsRequest = useSelector((state) => state.searches.jobs);
  const dispatch = useDispatch();

  console.log(jobsRequest);

  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  console.log(search);



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
