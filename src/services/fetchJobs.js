import { REMOTIVE_URL } from "./constants.js"
import axios from "axios"

async function fetchJobs(category, limit) {
  const response = await axios.get(`${REMOTIVE_URL}?category=${ category }&limit=${ limit }`);
  return response.data.jobs;
}

export default fetchJobs;


/*
Typing up some notes here while you're busy:

* I added REMOTIVE_BASE_URL to constants and stubbed out a call to their API which requires no key and no CORS.
  On their information page (https://remotive.io/api-documentation) they mention it's specifically to help developers, so this seems reasonable to use.
  This also only matches the functionality you had already (assuming the github url worked), so I don't believe it's overly-assisting.
  
* Now seeing the structure of this repository more clearly, I believe the intention for this file is to export a 'fetchJobs' method that a different component
  can use. If you were to write a function with the entire contents of your existing useEffect (and just return the data for the consumer to use) I believe that matches
  the re-usability pattern you mentioned your teammate was going for.

* try http://lvh.me:3002/fetchJobs this link points back to local host 

*/
//in real world alias local host mimc real world envt 

   //boolean for full time part time
   //

// navigator.geolocation.getCurrentPosition(givenLocation, error);

// navigator.permissions.query({ name: "geolocation" })

// export async function fetchLocalJobs(position) {
//   console.log(objectIDs);
//   const localJobAPI = `${REMOTIVE_URL}lat=${latitude}&long=${longitude}`;

//   const jobInfo = await axios.get(localJobAPI).then(({ data }) => {
//     return data;
//   });
//   console.log(jobInfo);
//   return jobInfo;
// }
