import "../styles/screenStyles/JobDescription.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import noImage from "../images/logos/no-image-logo.svg";

export default function FullJobDescription(props) {
  return (
    <div className="FullJobDescription">
      <Header />
      <div className="jobDetail">
        <div>
        <h2 className="jobDescripTitle">{props.location.state.title}</h2>
          
          <div className="logoFrame">
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
          dangerouslySetInnerHTML={{ __html: props.location.state.description }}
        />
        <a href={props.location.state.apply} target="_blank" rel="noreferrer">
          <button>apply</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
