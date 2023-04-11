import React from "react";
import "./feature.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const FeaturedCard = ({ feature }) => {
  const { post, company, location, salary, image, workType, time, id } = feature;


  return (
    <div>
      <div className="card border">
        <div className="card-body">
          <img className="feature-img" src={image} alt="" />
          <h2 className="card-title">{post}</h2>
          <p className=" text-slate-500 text-xl">{company}</p>
          <div className="card-actions">
            <p className="work-type font-semibold px-2 rounded-md">{workType}</p>
            <p className="work-type font-semibold px-2 rounded-md">{time}</p>
          </div>
          <div className="flex gap-5">
            <span><FontAwesomeIcon icon={faLocationDot}/> {location}</span>
            <span><FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}</span>
          </div>
          <div className=" card-actions">
          <Link to={`job/${id}`} className='btn btn-type text-white '>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
