import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';


//Post info goes here
export default function SearchJobList() {

  const [page, setPage] = useState(1);
  const jobsRequest = useSelector((state) => state.searches.jobs);
  
  if (!jobsRequest) { 
    return null
  }

  function renderList() {
    const jobItems = jobsRequest.jobs.map((post, index) => {
      return (
        <li key={index}>{post.company_name}</li>
      )
    });
    return (
      <ul>{ jobItems }</ul>
    )
  }
  
  console.log(jobsRequest.jobs.length)
  
  return (
    <div className="scrollableDiv">
      <InfiniteScroll
        dataLength={jobsRequest.jobs.length}
        next={() => setPage(page + 1) }
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {renderList()}
      </InfiniteScroll>
    </div>        
  );
}

