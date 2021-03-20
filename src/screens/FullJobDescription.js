import "../styles/screenStyles/JobDescription.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import noImage from "../images/logos/no-image-logo.svg";

export default function FullJobDescription(props) {
  console.log(props.lightSwitch)
  console.log(props.dark)

  return (
    <div className="FullJobDescription">
      <Header handleLights={props.lightSwitch} dark={props.dark} />
      <div className={props.dark ? "jobDetail" : "darkJobDetail"}>
        <div className="jobDescriptParent">
        <h2 className="jobDescripTitle">{props.location.state.title}</h2>
          
          <div className="logoFrameDescrip">
            <img
              src={props.location.state.logo ? props.location.state.logo : noImage}
              alt=""
              className="companyLogo"
            />
          </div>
        </div>
        <h3 className="companyName">{props.location.state.company}</h3>

        <div className="jobDecripItems">
          <p className="JobCategory">
            Category: {props.location.state.category}
          </p>
          <p className="jobReqmnt">
            Hiring: {props.location.state.requirement}
          </p>
          <p className="jobHours">Job Hours: {props.location.state.hours}</p>
        </div>

        <div
          className ="jobDescripContent"
          dangerouslySetInnerHTML={{ __html: props.location.state.description }}
        />
        <div className="applyContainer">
          <a className="applyButton" href={props.location.state.apply} target="_blank" rel="noreferrer">
            <button>apply</button>
          </a>
        </div>
      </div>
      <Footer dark={props.dark} />
    </div>
  );
}
