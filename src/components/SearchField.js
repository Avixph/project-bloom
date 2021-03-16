// searching input + button
//using Redux react toolkit and slice

import React, { useState } from "react";
import { useDispatch } from "react-redux";
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice";

export default function SearchField() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // console.log(search);

  const handleSearchSubmit = () => {
    const field = search;
    dispatch(fetchSearch(field));
  };

  return (
    <div>
      <input
        type="Search"
        placeholder="Search for Jobs"
        value={search}
        onChange={handleSearchInput}
      />

      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
}
