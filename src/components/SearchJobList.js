import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchJobPost from "./SearchJobPost";

//Post info goes here
export default function SearchJobList() {
  const [page, setPage] = useState(1);

  const SearchJobRequest = useSelector((state) => state.searches.searchJobs);

  if (!SearchJobRequest) {
    return null;
  }

  console.log(`There are ${SearchJobRequest.length} jobs!`);

  function renderList() {
    return SearchJobRequest.map((jobinfo, index) => {
      return <SearchJobPost {...jobinfo} key={index} />;
    });
  }

  return <div>{renderList()}</div>;
}
