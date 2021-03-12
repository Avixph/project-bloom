import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';


//Post info goes here
export default function SearchJobList() {
  
  const jobsRequest = useSelector((state) => state.searches.jobs);

  
  if (!jobsRequest) { 
    return null
  }


  function renderList() {
    return jobsRequest.jobs.map(post => { 
      return (
          <p key={post.name}>{post.company_name}</p>
      )
    })
  }
  
  return (
    <div>{renderList()}</div>
  );
}
