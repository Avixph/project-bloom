import Header from "../components/Header";
import Footer from "../components/Footer";
import LightsOut from "../components/LightsOut";
import { JobData } from "../services/fetchJobs";
import { useState, useEffect} from "react"

export default function HomePage() {


  return (
    <div className="home">
      <Header />
      <LightsOut />
      <Footer />
    </div>
  );
}
