import "../styles/screenStyles/LandingPage.css";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
// import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import landingbannerlight from "../images/design_elements/project-bloom-landing-banner-light.svg";
// import landingbannerDark from "../images/design_elements/project-bloom-landing-banner-dark.svg";
import { NavLink } from "react-router-dom";
import LightsOut from "../components/LightsOut";

export default function LandingPage() {
  return (
    <div className="landing h-screen">
      <header className="landingHeaderArea">
        <img src={bloomLogoLight} alt="" className="logo" />
        <LightsOut />
      </header>
      <div
        // className="flex items-center justify-center "
        className="bannerParent"
      >
        <div className="w-3/4">
          <img
            src={landingbannerlight}
            alt=""
            className="landingBanner"
            // style={{ width: "55%" }}
          />
        </div>
        <div className="w-1/4">
          <h2
            // className="text-russian_violet"
            className="landingQuote"
          >
            “Helping you blossom into your next career”
          </h2>
          <div className="buttonParent">
            <NavLink to={"/home"}>
              <button type="button" className="enterBttn">
                Enter
              </button>
            </NavLink>
           </div> 
        </div>
      </div>
    </div>
  );
}
