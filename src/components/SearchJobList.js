import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchJobPost from "./SearchJobPost";
//import DropDownTest from "./DropDownTest";

//drop down goes here
//step 1 make drop down without API

//the useState is for infinte scroll
export default function SearchJobList() {

  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status)


  // console.log(`There are ${SearchJobRequest.length} jobs!`);



  const renderList = () => {
    if (status === "loading") {
      return <h2>Loading...</h2>
    } else if (status === "success") {
      return jobsRequest.map((jobinfo, index) => {
        return <SearchJobPost {...jobinfo} key={index} />;
      });
    } else {
      <h2>Error: Please </h2>
    }
  };

  return <div>{renderList()}</div>; //bc u can only ever return 1 div , need to wrap it
}
