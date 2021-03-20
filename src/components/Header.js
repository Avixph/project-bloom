import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import LightsOut from "../components/LightsOut";
import Hamburger from "./Humburger";

export default function Header({ handleLights, dark}) {

  return (
    <header className={dark ? "headerArea" : "darkHeaderArea"}>
      <div className={dark ? "headerContent" : "darkHeaderContent"}>
        <img src={dark ? bloomLogoLight : bloomLogoDark} alt="" className="logo" />
        <nav>
          <ul>
            <li className="displayNav">
              <NavLink exact to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="displayNav">
              <NavLink exact to={"/search"}>
                Search Jobs
              </NavLink>
            </li>
            <li className="displayNav">
              <NavLink exact to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="displayHamburger">
              <Hamburger lightSwitch={ handleLights} dark={dark} />
            </li>
            <li className="displayNav">
              <LightsOut lightSwitch={handleLights} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}