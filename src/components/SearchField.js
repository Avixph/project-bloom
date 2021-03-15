// searching input + button

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice"

export default function SearchField() {
  
  const SearchJobRequest = useSelector((state) => state.searches.searchJobs);
  const dispatch = useDispatch();

  console.log(SearchJobRequest);

  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  console.log(search);

  const handleSearchSubmit = () => {
    dispatch(fetchSearch({ limit: 10, field: search }));
  };

  return (
    <div>
    
      <input
        type="Search"
        placeholder="Search"
        value={search}
        onChange={handleSearchInput}
      />

      <button
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    
    </div>
  );
}
