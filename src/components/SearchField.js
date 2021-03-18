// searching input + button
//using Redux react toolkit and slice

import "../styles/componentStyles/SearchField.css";
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
    <div className="searchField">
      <input
        type="Search"
        placeholder="Search for Jobs"
        value={search}
        onChange={handleSearchInput}
        className="searchInput"
      />
      <div className="searchDivider"></div>
      <button onClick={handleSearchSubmit} className="searchBttn">
        Search
      </button>
    </div>
  );
}
