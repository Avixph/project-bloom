import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchJobPost from "./SearchJobPost";
//import DropDownTest from "./DropDownTest";

//drop down goes here
//step 1 make drop down without API

export default function SearchJobList() {

  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status)

  const [nextJobPosts, setNextJobPosts] = useState(10)

  const loadMore = () => {
    setNextJobPosts(nextJobPosts + 10);
  }

  console.log(jobsRequest)

  const renderList = () => {
    if (status === "loading") {
      if (nextJobPosts !== 10) {
        setNextJobPosts(10);
      }
      return <h2>Loading...</h2>
    } else if (jobsRequest[0] === "Fill in search field") {
      return <h2>Complete search field.</h2>
    } else if (status === "success") {
      return jobsRequest.slice(0, nextJobPosts).map((jobinfo, index) => {
        return <SearchJobPost {...jobinfo} key={index} />;
      });
    } else {
      <h2>Error: Please Try Again! </h2>
    }
  };

  return (
    <div>
      {renderList()}
      {nextJobPosts < jobsRequest.length && (
          <button onClick={loadMore}>Load More</button>
        )}
    </div>
  ) //bc u can only ever return 1 div , need to wrap it
}
