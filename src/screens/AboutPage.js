import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTeam from "../components/AboutTeam";
import { teamBloom } from "../services/team.json";

export default function AboutPage() {
  const renderTeam = () => {
    return teamBloom.map((teamInfo, index) => {
      return <AboutTeam {...teamInfo} key={index} />;
    });
  };
  return (
    <div className="about">
      <Header />
      <div classname="aboutBloom">
        <h1>About</h1>{" "}
        <p classname="aboutDescription">
          The goal of <strong>bloom</strong> is to streamline the remote job
          searching process for remote workers. We will help decrease the amount
          of time it takes to find relevant roles for the skills one is
          proficient in and the location they are in.
        </p>{" "}
      </div>
      <div>{renderTeam()}</div>

      <Footer />
    </div>
  );
}
