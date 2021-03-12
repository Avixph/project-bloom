import { REMOTIVE_URL } from "./constants.js";
import axios from "axios";




async function fetchJobs(category, limit) {
  const response = await axios.get(`${REMOTIVE_URL}?category=${ category }&limit=${ limit }`);
  return response.data.jobs;
}

