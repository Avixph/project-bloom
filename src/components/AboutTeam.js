//About Team Info
import "../styles/componentStyles/AboutTeam.css";
import github from "../images/logos/github-logo.svg";
import linkedin from "../images/logos/linkedin-logo.svg";

export default function AboutTeam(props) {
  console.log('team page',props)
 

  return (
    //ternary statement if dark is true
    // if some var === x
    //return <img src{dark prop ? _ : dark}
   
    // if (!dark) {
    //   document.body.classList.add("App-dark");
    // } else {
    //   document.body.classList.remove("App-dark");
    // }
    // // console.log(dark);
  
    // return (
    //   <div className={dark ? "App" : "App-dark"}>

    // <header className={dark ? "headerArea" : "darkHeaderArea"}>
    //   <div className={dark ? "headerContent" : "darkHeaderContent"}>
    //     <img src={dark ? bloomLogoLight : bloomLogoDark} alt="" className="logo" />

    <div className={props.dark? "TeamMember":"TeamMember-dark"}>
     
      <img src={props.pic} alt="" className="image" />
      <h2 className="TeamMemberName">
        {props.name.first} {props.name.last}
      </h2>
      <h3 className="TeamRole">{props.name.role}</h3>
      <a
        href={props.links.github}
        target="_blank"
        rel="noreferrer"
        className="Github"
      >
        <button className={props.dark?"button-light":'button-dark'}> {/*if whatevr true, button light, if not button dark on each classname*/}
          <img src={github} alt="" style={{ width: "30%" }} />
        </button>
      </a>
      <a href={props.links.linkedin} classname="LinkedIn">
        <button className={props.dark?"button-light":'button-dark'}>
          <img src={linkedin} alt="" style={{ width: "29%" }} />
        </button>
      </a>
    </div>
  );
}
