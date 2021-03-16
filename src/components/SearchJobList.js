
import React, { useState } from "react";
import { useSelector } from "react-redux";


//Post info goes here
export default function SearchJobList() {
  const [page, setPage] = useState(1);


  const jobRequest = useSelector((state) => state.searches.searchJobs);

  if (!jobRequest) {
    return null;
  }

  console.log(`There are ${jobRequest.length} jobs!`);

  function renderList() {
    return jobRequest.map((post, index) => {
      return (
        <ul>
          <li key={index}>{post.company_name}</li>
        </ul>
      );
    });
  }

  return <div>{renderList()}</div>;

}
