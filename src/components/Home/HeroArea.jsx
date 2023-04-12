import React from "react";
import "./HeroArea.css";
const HeroArea = () => {
  return (
      <div className="hero hero-area">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="Image/man.png"
            className="md:max-w-xl max-w-sm -mb-4"
          />
          <div>
          <h2 className="hero-title hero-title-responsive">
            One Step <br /> Closer To Your <br />
            <span className="hero-title2">Dream Job</span>
           </h2>
             <p className="area-p pb-4">
             Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
             from start to finish.
           </p>
            <button className="btn btn-bg">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default HeroArea;
