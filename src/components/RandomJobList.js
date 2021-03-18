//Displaying of local job api data
import "../styles/componentStyles/RandomJobList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandom } from "../redux/randomJobSlice";
import JobPost from "./JobPost";

export default function RandomJobList({ dark }) {
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
    return RandomJobRequest.map((jobInfo, index, dark) => {
      return <JobPost dark={dark} {...jobInfo} key={index} />;
    });
  };

  return (
    <div className="randomList">
      <h1 className={dark ? "pageTitle" : "darkPageTitle"}>
        Remote Jobs Available
      </h1>
      <button onClick={handleReload} className={dark ? "" : "darkBttn"}>
        Reload
      </button>
      <br />
      <section>{renderRandomList()}</section>
    </div>
  );
}
