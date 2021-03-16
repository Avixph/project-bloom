import "../styles/screenStyles/LandingPage.css";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
// import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import landingbannerlight from "../images/design_elements/project-bloom-landing-banner-light.svg";
// import landingbannerDark from "../images/design_elements/project-bloom-landing-banner-dark.svg";
import { NavLink } from "react-router-dom";
import LightsOut from "../components/LightsOut";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="headerArea">
        <img src={bloomLogoLight} alt="" className="logo" />
        <LightsOut />
      </header>
      <div>
        <img
          src={landingbannerlight}
          alt=""
          className="landingBanner"
          style={{ width: "55%" }}
        />
      </div>
      <div>
        <h1>“Helping you blossom into your next career”</h1>
      </div>
      <NavLink to={"/home"}>
        <button type="button" className="enterBttn">
          Enter
        </button>
      </NavLink>
    </div>
  );
}
