import "../styles/screenStyles/LandingPage.css";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import landingbannerlight from "../images/design_elements/project-bloom-landing-banner-light.svg";
import landingbannerDark from "../images/design_elements/project-bloom-landing-banner-dark.svg";
import { NavLink } from "react-router-dom";
import LightsOut from "../components/LightsOut";

export default function LandingPage({ lightSwitch, dark }) {
  
  return (
    <div className="">
      <header className="landingHeaderArea">
        <img src={dark ? bloomLogoLight : bloomLogoDark} alt="" className="logo" />
        <LightsOut lightSwitch={lightSwitch} />
      </header>
      <div
        className="bannerParent"
      >
        <div>
          <img
            src={dark ? landingbannerlight : landingbannerDark}
            alt=""
            className="landingBanner"
            
          />
        </div>
        <div>
          <h2
            className={dark ? "landingQuote" : "darkLandingQuote"}
          >
            “Helping you blossom into your next career”
          </h2>
          <div className="buttonParent">
            <NavLink to={"/home"}>
              <button type="button" className={dark ? "enterBttn" : "darkEnterBttn"}>
                Enter
              </button>
            </NavLink>
           </div> 
        </div>
      </div>
    </div>
  );
}