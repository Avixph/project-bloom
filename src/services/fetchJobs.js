import { gitHubJobs_URL } from "./constants";
import axios from "axios"




export async function fetchJobsSearch() {
 

  const searchApi = `${gitHubJobs_URL}description=python&full_time=true`;

  const jobInfo = await axios.get(searchApi).then(({ data }) => {
    return data;
  });

  return jobInfo;
}