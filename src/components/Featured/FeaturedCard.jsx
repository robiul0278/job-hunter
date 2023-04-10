import React from "react";
import "./feature.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const FeaturedCard = ({ feature }) => {
  const { post, company, location, salary, image } = feature;
  return (
    <div>
      <div className="card border">
        <div className="card-body">
          <img className="feature-img" src={image} alt="" />
          <h2 className="card-title">{post}</h2>
          <p className=" text-slate-500 text-xl">{company}</p>
          <div className="card-actions">
            <button className="btn btn-outline text-blue-600">Remote</button>
            <button className="btn btn-outline text-blue-600">Full Time</button>
          </div>
          <div className="flex gap-5">
            <span><FontAwesomeIcon icon={faLocationDot}/> {location}</span>
            <span><FontAwesomeIcon icon={faSackDollar} /> {salary}</span>
          </div>
          <div className=" card-actions">
          <button className='btn bg-blue-600 text-white font-bold'>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
