import { NavLink } from "react-router-dom";
import noImage from "../images/logos/no-image-logo.svg";

export default function SearchJobPost(props) {
  return (
    <div classname="searchJobBlurb">
      <img
        src={props.company_logo_url ? props.company_logo_url : noImage}
        alt=""
        className="companyLogo"
      />
      <h2 classname="jobTitle">{props.title}</h2>
      <h3 classname="companyName">{props.company_name}</h3>
      <div classname="jobItems">
        <p classname="jobCategory">{props.category}</p>
        <p classname="jobRequirement">{props.candidate_required_location}</p>
        <p classname="jobHours">{props.job_type}</p>
      </div>
      <NavLink
        to={{
          pathname: "/jobDescription",
          state: props
            ? {
                logo: props.company_logo_url,
                title: props.title,
                company: props.company_name,
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
        <button type="button" classname="detailedBttn">
          View <br /> Details!
        </button>
      </NavLink>
    </div>
  );
}
