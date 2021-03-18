import "../styles/componentStyles/Header.css";
import { NavLink } from "react-router-dom";
import bloomLogoLight from "../images/logos/project-bloom-logo-light.svg";
import bloomLogoDark from "../images/logos/project-bloom-logo-dark.svg";
import LightsOut from "../components/LightsOut";

export default function Header({ lightSwitch, dark }) {
  return (
    <header className={dark ? "headerArea" : "darkHeaderArea"}>
      <div className="headerContent">
        <img
          src={dark ? bloomLogoDark : bloomLogoLight}
          alt=""
          className="logo"
        />
        <nav>
          <ul>
            <li className={dark ? "" : "darkLi"}>
              <NavLink exact to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className={dark ? "" : "darkLi"}>
              <NavLink exact to={"/search"}>
                Search Jobs
              </NavLink>
            </li>
            <li className={dark ? "" : "darkLi"}>
              <NavLink exact to={"/about"}>
                About
              </NavLink>
            </li>
            <li>
              <LightsOut lightSwitch={lightSwitch} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
