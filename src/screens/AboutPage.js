import "../styles/screenStyles/AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTeam from "../components/AboutTeam";
import { teamBloom } from "../services/team.json";

export default function AboutPage({ lightSwitch, dark }) {
  console.log(lightSwitch)
  const renderTeam = () => {
    return teamBloom.map((teamInfo, index) => { //don't put dark in the map, target in the props so that it can be passed on click
      return <AboutTeam  {...teamInfo} key={index} dark={dark} />;
    });
  };
  //font color, button color, card color, background color?
  return (
    <div className="about"> 
      <Header handleLights={lightSwitch} dark={dark} />
      <div className= "aboutBloom" >
      {/* "aboutBloom"*/}
        <h1 className="aboutHeading">About</h1>{" "}
        <p className="aboutDescription">
          The goal of <strong>bloom</strong> is to streamline the remote job
          searching process for remote workers. We will help decrease the amount
          of time it takes to find relevant roles for the skills one is
          proficient in and the location they are in.
        </p>{" "}
        
      </div>
      <div className="container">{renderTeam()}</div> 
      <Footer dark={dark} />
    </div>
  );
}
