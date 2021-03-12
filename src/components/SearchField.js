// searching input + button
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//(Below)import Thunk
import { fetchSearch } from "../redux/searchJobSlice"




export default function SearchField() {


  const jobsRequest = useSelector((state) => state.searches.jobs);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSearch())
  }, [])


  console.log(jobsRequest);



  const [search, setSearch] = useState("");

  

  function handleSearchInput(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  console.log(search);

  return (
    <div>
      <form>
        <input
          type="Search"
          placeholder="Search"
          // value={term} ---might use a react hook
          onChange = {handleSearchInput}
        />
        <button
          // onClick={}
        >
          Search
        </button>
      </form>
    </div>
  );
}
