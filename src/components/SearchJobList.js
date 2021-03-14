import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

//Post info goes here
export default function SearchJobList() {
  const [page, setPage] = useState(1);
  const jobsRequest = useSelector((state) => state.searches.searchJobs);

  if (!jobsRequest) {
    return null;
  }

  console.log(`There are ${jobsRequest.length} jobs!`);

  function renderList() {
    return jobsRequest.map((post, index) => {
      return (
        <ul>
          <li key={index}>{post.company_name}</li>
        </ul>
      );
    });
  }
  return (
    <div className="scrollableDiv">
      <InfiniteScroll
        dataLength={jobsRequest.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {renderList()}
      </InfiniteScroll>
    </div>
  );
}
