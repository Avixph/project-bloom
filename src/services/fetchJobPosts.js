import { REMOTIVE_URL } from "./constants.js";
import axios from "axios";





async function fetchJobs(searchInput, limit) {
  const response = await axios.get(`${REMOTIVE_URL}?search=${searchInput}&limit=${limit}`);

  return response.data.jobs;
}







export default fetchJobs;


// https://remotive.io/api/remote-jobs?search=front%20end