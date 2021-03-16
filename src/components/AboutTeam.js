//About Team Info

import github from "../images/logos/github-logo.svg";
import linkedin from "../images/logos/linkedin-logo.svg";

export default function AboutTeam(props) {
  return (
    <div classname="TeamMember">
      <img src={props.pic} alt=""style={{width:"20%"}} />
      <h2 classname="TeamMemberName">
        {props.name.first} {props.name.last}
      </h2>
      <h3 classname="TeamRole">{props.name.role}</h3>
      <a href={props.links.github} classname="Github">
        <img src={github} alt=""style={{width:"8%"}} />
      </a>
      <a href={props.links.linkedin} classname="LinkedIn">
        <img src={linkedin} alt=""style={{width:"8%"}} />
      </a>
    </div>
  );
}
