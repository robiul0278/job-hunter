import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar, faBriefcase,faMobileScreenButton,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from "../utilities/fakedb";

const JobDetails = () => {
  const data = useParams();
  const jobs = useLoaderData();


  const addToCart = (id) =>{
    addToDb(id);
  }

  // console.log(job)
  const job = jobs.find((jobData) => jobData.id == data.id);
  const {jobDescription, responsibility,educationalRequirements,experienceRequirements,salary,post,phone,email,location,id} = job;
  // console.log(job);
  return (
    <div>
      <div className="detailsArea grid grid-cols-12">
        <div className=" col-span-3 bottom-0 left-0"><img className="w-80" src="/public/Image/Vector.png" alt="" /></div>
        <div className=" col-span-6 flex justify-center items-center"><h1 className="text-center font-bold">Job Details</h1></div>
        <div className=" col-span-3 absolute top-0 right-0"><img src="Image/Vector-1.png" alt="" /></div>
      </div>
      <div className=" container mx-auto grid grid-cols-12 px-12 md:mt-32 md:mb-32">
        <div className=" col-span-8 md:px-12">
            
            <div className="mb-6">
            <span className=" font-bold">Job Description:</span> <span className="detail-text">{jobDescription}</span>
            </div>
            
            <div className="mb-6">
            <span className=" font-bold">Job Responsibility:</span> <span className="detail-text">{responsibility}</span>
            </div>

            <div className="mb-6">
            <span className=" font-bold">Educational Requirements:</span> 
            <p className="mb-6">{educationalRequirements}</p>
            </div>
            <div className="mb-6">
            <span className=" font-bold">Experiences:</span> 
            <p className="mb-6">{experienceRequirements}</p>
            </div>
        </div>
        <div className=" col-span-4 px-12">
          <div className="card w-full detailsArea2">
            <div className="card-body">
              <p className=" font-bold text-xl">Job Details</p>
              <hr className=" py-1"/>
              <span><FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}</span>
              <span><FontAwesomeIcon icon={faBriefcase} /> Job Title: {post}</span>
              <h2 className="font-bold text-xl">Contact Information</h2>
              <hr className=" py-1"/>
              <span><FontAwesomeIcon icon={faMobileScreenButton} /> Phone: {phone}</span>
              <span><FontAwesomeIcon icon={faEnvelope} /> Email: {email}</span>
              <span><FontAwesomeIcon icon={faLocationDot} /> Address: {location}</span>
            </div>
          </div>
            <div>
          <button onClick={() => addToCart(id)} className="btn-type btn text-white mt-4 w-full">Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
