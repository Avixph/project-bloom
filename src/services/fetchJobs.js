import { REMOTIVE_URL } from "./constants.js";
import axios from "axios";

export async function fetchJobCollection() {
  const collectionAPI = `${REMOTIVE_URL}`;

  const results = await axios.get(collectionAPI).then(({ data }) => {
    return data.jobs;
  });
  console.log(results);
  return results;
}

// export async function fetchJobCollection() {
//   const collectionAPI = `${REMOTIVE_URL}`;

//   const results = await axios.get(collectionAPI).then(({ data }) => {
//     return data;
//   });
//   const randomResults = {
//     ...results,
//     jobs: results.jobs.slice(0, 100),
//   };
//   console.log(randomResults);
//   return randomResults;
// }

export async function fetchJobCategory(category, limit) {
  const categoryAPI = await axios.get(
    `${REMOTIVE_URL}category=${category}&limit=${limit}`
  );
  return categoryAPI.data.jobs;
}

// export async function fetchJobSearch() {
//   const searchAPI = `${REMOTIVE_URL}search=front%20end&limit=25`;

//   const results = await axios.get(searchAPI).then(({ data }) => {
//     return data.jobs;
//   });
//   console.log(results);
//   return results;
// }

export async function fetchJobSearch(obj) {
  const searchAPI = `${REMOTIVE_URL}search=${obj.feild}&limit=${obj.limit}`;

  const results = await axios.get(searchAPI).then(({ data }) => {
    console.log(data.jobs);
    return data.jobs;
  });
  return results;
}

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
//in real world alias local host mimic real world environment
//boolean for full time part time
//
