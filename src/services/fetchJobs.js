import { REMOTIVE_URL } from "./constants.js";
import axios from "axios";

export async function fetchJobCollection() {
  const collectionAPI = `${REMOTIVE_URL}&limit=100`;

  const results = await axios.get(collectionAPI).then(({ data }) => {
    return data.jobs;
  });
  // console.log(results);
  return results;
}

export async function fetchJobSearch(field) {
  const searchAPI = `${REMOTIVE_URL}search=${field}`;

  const results = await axios.get(searchAPI).then(({ data }) => {
    console.log(data.jobs);
    return data.jobs;
  });
  return results;
}
