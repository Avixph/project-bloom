import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
// import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import LightsOut from "../components/LightsOut";


export default function Header({ handleLights, dark}) {

  return (
    <header className={dark ? "headerArea" : "darkHeaderArea"}>
      <div className={dark ? "headerContent" : "darkHeaderContent"}>
        <img src={dark ? bloomLogoLight : bloomLogoDark} alt="" className="logo" />

        <nav>
          <ul>
            <li>
              <NavLink exact to={"/home"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to={"/search"}>
                Search Jobs
              </NavLink>
            </li>
            <li>
              <NavLink exact to={"/about"}>
                About
              </NavLink>
            </li>
            {/* <li>
              <Hamburger />
            </li> */}
            <li>
              <LightsOut lightSwitch={handleLights} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}