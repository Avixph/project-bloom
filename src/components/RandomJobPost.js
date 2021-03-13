import { NavLink } from "react-router-dom";
import noImage from "../images/logos/no-image-logo.svg";

export default function RandomJobPost(props) {
  return (
    <div className="randomJobBlurb">
      <img
        src={props.company_logo_url ? props.company_logo_url : noImage}
        alt=""
        className="companyLogo"
      />
      <h2 className="jobTitle">{props.title}</h2>
      <h3 className="companyName">{props.company_name}</h3>
      <ul className="jobItems">
        <li className="JobCategory">{props.category}</li>
        <li className="jobRequirement">{props.candidate_required_location}</li>
        <li className="jobHours">{props.job_type}</li>
        <NavLink
          to={{
            pathname: "/jobDescription",
            state: props
              ? {
                  logo: props.company_logo_url,
                  title: props.title,
                  category: props.category,
                  salary: props.salary,
                  requirement: props.candidate_required_location,
                  hours: props.job_type,
                  description: props.description,
                  apply: props.url,
                }
              : {},
          }}
        >
          <button type="button" className="detailsBttn">
            View <br /> Details
          </button>
        </NavLink>
      </ul>
    </div>
  );
}
