//Displaying of local job api data
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchRandom } from "../redux/randomJobSlice";
import RandomJobPost from "./RandomJobPost";

export default function RandomJobList() {
  // const [arr, setArr] = useState([])
  const [page, setPage] = useState(1);
  const RandomJobRequest = useSelector((state) => {
    return state.randoms.randomJobs;
  });

  const dispatch = useDispatch();

  console.log(RandomJobRequest);

  useEffect(() => {
    dispatch(fetchRandom());
  }, []);

  return (
    <div className="randomList">
      {/* <h1>Developer Jobs to Consider...</h1> */}
      <div
        className="scrollableDiv3"
        style={{
          height: 600,

          overflow: "auto",
          // display: "flex",
          // flexDirection: "column-reverse",
          // flexWrap: "wrap",
          // justifyContent: "flex-start",
        }}
      >
        <h1>Developer Jobs to Consider...</h1>
        <InfiniteScroll
          dataLength={RandomJobRequest.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className="infintie_scroll"
          pullDownToRefreshThreshold={50}
          scrollableTarget="scrollableDiv3"
        >
          {RandomJobRequest.map((jobInfo, index) => {
            return <RandomJobPost {...jobInfo} key={index} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
