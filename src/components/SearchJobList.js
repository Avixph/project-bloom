import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchJobPost from "./SearchJobPost";
//import DropDownTest from "./DropDownTest";

//drop down goes here
//step 1 make drop down without API

//the useState is for infinte scroll
export default function SearchJobList() {
  const [page, setPage] = useState(1);

  const SearchJobRequest = useSelector((state) => state.searches.searchJobs);

  if (!SearchJobRequest) {
    return null;
  }

  console.log(`There are ${SearchJobRequest.length} jobs!`);

  const renderList = () => {
    return SearchJobRequest.map((jobinfo, index) => {
      return <SearchJobPost {...jobinfo} key={index} />;
    });
  };

  return <div>{renderList()}</div>; //bc u can only ever return 1 div , need to wrap it
}
