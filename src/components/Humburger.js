import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import LightsOut from "../components/LightsOut";



export default function Humburger({ dark }) {

  const [showMenu, setShowMenu] = useState(false);



  const mystyle = {
    position: "fixed",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  function renderMenu () {
    if (showMenu) {
     return (
       <div class="hamMenu">
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
             <li className="lightsOutBurger">
               <LightsOut />
             </li>
           </ul>
       </div>
     )
    }
  }

  return (
    <div>
      <span className={dark ? "hamburgerMenu" : "darkHamburgerMenu"}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
          //Option 1 add className if you take the pseudoelement approach
        />
      </span>
      {renderMenu()}
    </div>
  )
}

//Option 2 set addEventListner to the entire page
//onBlur event on nav restructure the hamburger menu