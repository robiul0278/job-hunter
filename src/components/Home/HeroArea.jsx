import React from "react";
import "./HeroArea.css";
const HeroArea = () => {
  return (
    <div className="hero-area">
            <div className="grid grid-cols-12 container mx-auto pt-10 gap-16">
      <div className="py-28 col-span-6 items-center">
        <h2 className="hero-title">
          One Step <br /> Closer To Your <br />
          <span className="hero-title2">Dream Job</span>
        </h2>
        <p className="area-p pb-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <span className="btn btn-bg">Get Started</span>
      </div>
      <div className="col-span-6 area-img">
        {/* <img className="h-full w-auto" src="../public/Image/man.png" alt="" /> */}
      </div>
    </div>
    </div>
  );
};

export default HeroArea;
