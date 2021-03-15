import React, { useState } from 'react';
import { useSelector } from 'react-redux';


//Post info goes here
export default function SearchJobList() {

  //list of jobs
  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const loading = useSelector((state) => state.searches.status)

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  

  if (!jobsRequest) { 
    return null
  }
  
  const currentPosts = jobsRequest.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts)

  

  function renderList() {

    return <ul>
      {currentPosts.map((post, index) => (
        <li key={index}>
          {post.company_name}
        </li>
      ))}
      </ul>
  };
  
// console.log(jobsRequest.length)
  
  return (
    <div>
        {renderList()}
    </div>        
  );
}
