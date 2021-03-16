import Header from "../components/Header";
import Footer from "../components/Footer";
import LightsOut from "../components/LightsOut";
import { fetchJobCategory } from "../services/fetchJobs";
import { useState, useEffect } from "react";

//is this the file to put the fetched data? 
//step 1 - see data shows in console
//step 2 - pull API data through to show on Job dEscription screens?
//step 3 - use interpolation so user can access specifically what they want 

export default function JobDescription() {
  const [jobsArray, setJobsArray]= useState([])
  useEffect(async () => {
    setJobsArray(await fetchJobCategory("software-dev", 25));
  }, []);
  
  console.log(jobsArray)
     
  return (
     <div className="jobDescription">
     {jobsArray.map(jobinfo => { //item is the specific subcomponent within the data
      return (
        <>
          <div>{jobinfo.title}</div>
          <div dangerouslySetInnerHTML={ { __html: jobinfo.description } } />
        </>
      );
    })}
      <Header />
      <LightsOut/>
      <Footer />
  </div>
  )
}
