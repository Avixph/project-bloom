import React, { useState } from 'react';
import { useSelector } from 'react-redux';


//Post info goes here
export default function SearchJobList() {

  const [page, setPage] = useState(1);

  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  
  if (!jobsRequest) { 
    return null
  }

  function renderList() {
    const jobItems = jobsRequest.map((post, index) => {
      return (
        <li key={index}>{post.company_name}</li>
      )
    });
    return (
      <ul>{ jobItems }</ul>
    )
  }
  
  console.log(jobsRequest.length)
  
  return (
    <div>
        {renderList()}
    </div>        
  );
}
