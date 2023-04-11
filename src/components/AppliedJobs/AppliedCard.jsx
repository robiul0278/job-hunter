import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedCard = ({ jobs }) => {
  const { image, post, company, workType, time, location, salary,id } = jobs;
  return (
    <div className=" border-2 rounded-xl p-4">
      <div className="card w-full card-side bg-base-100">
        <figure>
          <img
            className="h-60 w-60 object-fill p-12 bg-stone-100"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="flex justify-between align-middle items-center p-8">
          <div className="card-bod ">
            <h2 className="card-title">{post}</h2>
            <p className="detail-text">{company}</p>
            <div className="card-actions">
              <p className="work-type font-semibold px-2 rounded-md">
                {workType}
              </p>
              <p className="work-type font-semibold px-2 rounded-md">{time}</p>
            </div>
            <div className="flex pt-6 gap-5">
              <span className="detail-text">
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </span>
              <span className="detail-text">
                <FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}
              </span>
            </div>
          </div>
          <div className="card-actions absolute  right-0">
            <Link to="/"  className="btn btn-type">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCard;
