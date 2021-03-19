// searching input + button
//using Redux react toolkit and slice
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/searchJobSlice";

export default function SearchField({ dark }) {
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
    <div className={dark ? "searchField" : "darkSearchField"}>
      <input
        type="Search"
        placeholder="Search for Jobs"
        value={search}
        onChange={handleSearchInput}
      />
      <div className={dark ? "searchDivider" : "darkSearchDivider"}></div>
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
}
