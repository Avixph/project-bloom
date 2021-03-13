import Header from "../components/Header";
import Footer from "../components/Footer";
import noImage from "../images/logos/no-image-logo.svg";

export default function FullJobDescription(props) {
  return (
    <div className="FullJobDescription">
      <Header />
      <div className="jobDetail">
        <img
          src={props.location.state.logo ? props.location.state.logo : noImage}
          alt=""
          className="companyLogo"
        />
        <h2 className="jobTitle">{props.location.state.title}</h2>
        <h3 className="companyName">{props.location.state.company}</h3>
        <ul className="jobItems">
          <li className="JobCategory">
            {" "}
            Category: {props.location.state.category}
          </li>
          <li className="jobRequirement">
            {" "}
            Hirring: {props.location.state.requirement}
          </li>
          <li className="jobHours">Job Hours: {props.location.state.hours}</li>
        </ul>
        <div
          dangerouslySetInnerHTML={{ __html: props.location.state.description }}
        />
        <a href={props.location.state.apply}>
          <button>apply</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
