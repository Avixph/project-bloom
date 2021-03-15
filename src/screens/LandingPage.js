import bloomLogo from "../images/logos/project-bloom-logo.svg";
import { NavLink } from "react-router-dom";
import LightsOut from "../components/LightsOut";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="headerArea">
        <img src={bloomLogo} alt="" />
        <LightsOut />
      </header>
      <NavLink to={"/home"}>
        <h1>“Helping you blossom into your next career”</h1>
        <button type="button" className="enterBttn">
          Enter
        </button>
      </NavLink>
    </div>
  );
}
