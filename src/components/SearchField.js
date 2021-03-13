// searching input + button
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/searchJobSlice";

export default function SearchField() {
  const jobRequest = useSelector((state) => state.searches.searchJobs);
  const dispatch = useDispatch();

  console.log(jobRequest);

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
      {/* <form> */}
      <input
        type="Search"
        value={search}
        onChange={handleSearchInput}
        placeholder="search for roles, technologies or companies  "
      />

      <button onClick={handleSearchSubmit}>Search</button>
      {/* </form> */}
    </div>
  );
}
