import { REMOTIVE_URL } from "./constants.js";
import axios from "axios";

export async function fetchJobCollection() {
  const collectionAPI = `${REMOTIVE_URL}&limit=100`;

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

export async function fetchJobSearch() {
  const searchAPI = `${REMOTIVE_URL}search=front%20end&limit=25`;

  const results = await axios.get(searchAPI).then(({ data }) => {
    return data.jobs;
  });
  console.log(results);
  return results;
}

// export async function fetchJobSearch(query) {
//   const searchAPI = `${REMOTIVE_URL}search=${query}&limit=${limit}`;

//   const results = await axios.get(searchAPI).then(({ data }) => {
//     return data.jobs;
//   });
//   console.log(results);
//   return results;
// }
