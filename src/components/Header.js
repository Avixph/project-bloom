import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
// import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import LightsOut from "../components/LightsOut";

export default function Header() {
  return (
    <header className="headerArea">
      <div className="headerContent">
        <img src={bloomLogoLight} alt="" className="logo" />
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
            <li>
              <LightsOut />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
