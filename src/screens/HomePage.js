import Header from "../components/Header";
import Footer from "../components/Footer";
import LightsOut from "../components/LightsOut";
// import { JobData } from "../services/fetchJobs";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchRandom } from "../redux/randomJobSlice";

export default function HomePage() {
  const jobRequest = useSelector((state) => state.randoms.randomJobs);

  const dispatch = useDispatch();

  console.log(jobRequest);

  useEffect(() => {
    dispatch(fetchRandom());
  }, []);

  return (
    <div className="home">
      <Header />
      <LightsOut />
      <Footer />
    </div>
  );
}
