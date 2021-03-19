//Displaying of local job api data
import "../styles/componentStyles/RandomJobList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandom } from "../redux/randomJobSlice";
import JobPost from "./JobPost";

export default function RandomJobList({ dark }) {
  // const [arr, setArr] = useState([])

  const RandomJobRequest = useSelector((state) => {
    return state.randoms.randomJobs;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandom());
  }, [dispatch]);

  const handleReload = () => {
    dispatch(fetchRandom());
  };

  const renderRandomList = () => {
    return RandomJobRequest.map((jobInfo, index) => {
      return <JobPost {...jobInfo} key={index} dark={dark} />;
    });
  };

  return (
    <div className={dark ? "randomList" : "darkRandomList"}>
      <h2 className={dark ? "pageTitle" : "darkPageTitle"}>
        Remote Jobs Available
      </h2>
      <button onClick={handleReload}>Reload</button>

      <br />
      <section>{renderRandomList()}</section>
    </div>
  );
}
