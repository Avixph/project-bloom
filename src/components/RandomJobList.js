//Displaying of local job api data
import "../styles/componentStyles/RandomJobList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandom } from "../redux/randomJobSlice";
import JobPost from "./JobPost";

export default function RandomJobList() {
  // const [arr, setArr] = useState([])

  const RandomJobRequest = useSelector((state) => {
    return state.randoms.randomJobs;
  });

  const dispatch = useDispatch();

  console.log(RandomJobRequest);

  useEffect(() => {
    dispatch(fetchRandom());
  }, [dispatch]);

  const handleReload = () => {
    dispatch(fetchRandom());
  };

  const renderRandomList = () => {
    return RandomJobRequest.map((jobInfo, index) => {
      return <JobPost {...jobInfo} key={index} />;
    });
  };

  return (
    <div className="randomList">
      <h2 className="pageTitle">Developer Jobs to Consider</h2>
      <button onClick={handleReload}>Reload</button>
      <br />
      <section>{renderRandomList()}</section>
    </div>
  );
}