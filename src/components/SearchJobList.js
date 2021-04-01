import "../styles/componentStyles/SearchJobList.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobPost from "./JobPost";
import loadingSpinner from "../images/loading/spinner.gif";
import darkLoadingSpinner from "../images/loading/darkSpinner.gif";
//import DropDownTest from "./DropDownTest";

//load more button functionality

export default function SearchJobList({ dark }) {
  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status);

  const [nextJobPosts, setNextJobPosts] = useState(10);

  const loadMore = () => {
    setNextJobPosts(nextJobPosts + 10);
  };

  console.log(jobsRequest);

  const renderList = () => {
    if (status === "loading") {
      if (nextJobPosts !== 10) {
        setNextJobPosts(10);
      }
      return <img src={dark ? loadingSpinner : darkLoadingSpinner} alt="" />;
    } else if (jobsRequest[0] === "Fill in search field") {
      return <h2 className={dark ? "searchMessage" : "searchMessageDark"}>Complete search field.</h2>;
    } else if (status === "success") {
      return jobsRequest.slice(0, nextJobPosts).map((jobinfo, index) => {
        return <JobPost {...jobinfo} key={index} dark={dark} />;
      });
    } else {
      <h2>Error: Please Try Again! </h2>;
    }
  };

  const renderButton = () => {
    if (status === "success") {
      return (
        nextJobPosts < jobsRequest.length && (
          <button onClick={loadMore}>Load More</button>
        )
      );
    }
  };

  return (
    <div>
      <div className="jobList">{renderList()}</div>

      <div className={dark ? "button" : "darkButton"}>{renderButton()}</div>
    </div>
  ); //bc u can only ever return 1 div , need to wrap it
}
