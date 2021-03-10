import { GitHubJobs_URL } from "./constants.js"

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
      **Parsing   // const stringParams = new URLSearchParams(params).toString() => 'description=node&lat=-74.2910'

        // helper function that parses obj to string
        // console.log(data);
        // if params === {} stringParams === ''; otherwise params is full; stringParams === '...withParams'
        **// GitHubJobs_URL = https://jobs.github.com/positions.json?`{stringParams}`
        // `${GitHubJobs_URL}search=`
        // `${GitHubJobs_URL}otherParams=`
        const jobAPI = `${GitHubJobs_URL}${stringParams}`;
        const jobInfo = await axios.get(jobAPI).then(({ data }) => {
          return data;
        });
    //     console.log(artInfo);
        return jobInfo;
    //}


  const JobData = (jobdIndex) => {
    const [jdata, setData]=useState([])

    const fetchdata =()=>{
      const response = axios.get('https://jobs.github.com/positions.json?search=node')
      .then((res)=> setData(res.data))
    }
    console.log(data)

    useEffect(() => {
      fetchdata();
    }, []);
    return (
        <div className="space-launch-info">
          <h1>Space Launch Data</h1>
          {data.map(jdata => {
            return <div className="space-item"><h2><strong>Mission: </strong>{item.mission_name}</h2>
            <p className="details"><strong>Mission Status: </strong>{item.details}</p>
            <p className="explanation">{item.explanation}</p>
            <p className="year"><strong>Launch Year:</strong> {item.launch_year}</p>
            <p className="article"><strong>Read:</strong> <a href={item.links.article_link}>{item.links.article_link}</a></p>
            <p className="video-link"><strong>Watch to get more info:</strong> <a href={item.links.video_link}>{item.links.video_link}</a></p>
            </div>
          })}
        </div>
        )
        
    }
    
  export default LaunchData;
  
