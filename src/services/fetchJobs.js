import { REMOTIVE_BASE_URL } from "./constants.js"
import axios from "axios"

//goes in functional component

// let JobSearch = () => {
//   const [data, setData]= useState([])
//         useEffect(async () => {
//           setData(await fetchJobs("software-dev", 25));
//         }, []);
//         console.log(data)
//      return  null;
//    };
//    export default JobSearch;

//How to seperate the fetching from the displaying in the component

//fetching part

//telling server to specify the limit of what you want
//based on parameters on Remotive API page
//check other parameters and update in your diff fetch

async function fetchJobs(category, limit) {
  const response = await axios.get(`${REMOTIVE_BASE_URL}?category=${ category }&limit=${ limit }`);
  return response.data.jobs;
}

export default fetchJobs;

/*
const JobSearchComponent = () => {
  const [ data, setData ] = useState([])
  useEffect(() => {
    setData(fetchJobs("software-dev", 25))
  });

};

*/

  // let JobSearch = () => {
  //   const [data, setData]= useState([])
  //         useEffect(() => {
  //           const response = axios.get(`${GitHubJobs_Search}?location=new+york`).then((response)=> setData(response.data))
  //           console.log(response)
  //         }, []);
  //         console.log(data)
  //      return  null;
  //    };
  //    export default JobSearch;


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


// const SampleComponent = () => {
//   const [ launches, setLaunches ] = useState([]);

//   const fetchData = useCallback(() => {
//     // fetch data
//   });
  
//   useEffect(() => {
//     fetchData().then((data) => {
//         setLaunches(data);
//     });
//   });



//taking api and passing it as a param
// export async function fetchArtByObjectID(objectIDs) {
//     console.log(objectIDs);
//     const artAPI = `${MET_URL}/public/collection/v1/objects/${objectIDs}`;
//     const artInfo = await axios.get(artAPI).then(({ data }) => {
//       return data;
//     });
//     console.log(artInfo);
//     return artInfo;
//   }

// data -> description=;location=;lat=;long=;
// params => 'description=node&lat=-74.9210'
// params => 'description=node'
// {
//     description: 'node',
//     lat: -74.2910,
// }
//need to parse at some point

//params needs useState?
// params = null => {}, otherwise { ...params } { description: 'string', search: 'node' }

// good to have, but not must
// want to check if params is not an object, then fetch wihtout params; otherwise, check for params
//map array

//export async function fetch (params = {}) {
        // params => 
        // {
        //     description: 'node',
        //     lat: -74.2910,
        // }
    //   **Parsing   // const stringParams = new URLSearchParams(params).toString() => 'description=node&lat=-74.2910'

    //     // helper function that parses obj to string
    //     // console.log(data);
    //     // if params === {} stringParams === ''; otherwise params is full; stringParams === '...withParams'
    //     **// GitHubJobs_URL = https://jobs.github.com/positions.json?`{stringParams}`
    //     // `${GitHubJobs_URL}search=`
    //     // `${GitHubJobs_URL}otherParams=`
    //     const jobAPI = `${GitHubJobs_URL}${stringParams}`;
    //     const jobInfo = await axios.get(jobAPI).then(({ data }) => {
    //       return data;
    //     });
    // //     console.log(artInfo);
    //     return jobInfo;
    // //}



    // useEffect is for later when updating DOM of component to show the API data
    //

    //     return (
    //     <div className="space-launch-info">
    //       <h1>Space Launch Data</h1>
    //       {data.map(jdata => {
    //         return <div className="space-item"><h2><strong>Mission: </strong>{item.mission_name}</h2>
    //         <p className="details"><strong>Mission Status: </strong>{item.details}</p>
    //         <p className="explanation">{item.explanation}</p>
    //         <p className="year"><strong>Launch Year:</strong> {item.launch_year}</p>
    //         <p className="article"><strong>Read:</strong> <a href={item.links.article_link}>{item.links.article_link}</a></p>
    //         <p className="video-link"><strong>Watch to get more info:</strong> <a href={item.links.video_link}>{item.links.video_link}</a></p>
    //         </div>
    //       })}
    //     </div>
    //     )
        
    // }
    
  

