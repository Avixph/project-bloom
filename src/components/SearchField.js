// searching input + button
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice"



export default function SearchField() {


  const jobsRequest = useSelector((state) => state.searches.jobs);

  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(fetchSearch({limit: 2, field: search}))
  // }, [])


  console.log(jobsRequest);



  const [search, setSearch] = useState("");

  

  function handleSearchInput(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  // console.log(search);


  
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
        onClick={() => dispatch(fetchSearch({limit: 5, name: search}))}
        >
          Search
        </button>
      {/* </form> */}
    </div>
  );
}
