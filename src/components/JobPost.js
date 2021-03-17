import { unwrapResult } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";
import noImage from "../images/logos/no-image-logo.svg";

export default function JobPost(props) {
  return (
    <div className="jobBlurb">
      <div className="logoFrame">
        <img
          src={props.company_logo_url ? props.company_logo_url : noImage}
          alt=""
          className="companyLogo"
        />
      </div>
      <h2 className="jobTitle">{props.title}</h2>
      <h3 className="companyName">{props.company_name}</h3>
      {/* <ul className="jobItems">
        <li className="jobRequirement">{props.candidate_required_location}</li>
        <li className="jobHours">{props.job_type}</li>
      </ul> */}
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
        <button type="button" className="detailsBttn">
          View <br /> Details
        </button>
      </NavLink>
    </div>
  );
}
