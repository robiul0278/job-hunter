import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";

const AppliedJobs = () => {
  const applied = useLoaderData();
  console.log(applied);

  return (
    <div>
        <div className="detailsArea grid grid-cols-12">
          <div className=" col-span-3 bottom-0 left-0">
            <img className="w-80" src="/public/Image/Vector.png" alt="" />
          </div>
          <div className=" col-span-6 flex justify-center items-center">
            <h1 className="text-center font-bold">Applied Jobs</h1>
          </div>
          <div className=" col-span-3 absolute top-0 right-0">
            <img src="/public/Image/Vector-1.png" alt="" />
          </div>
        </div>
      <div className=" container mx-auto grid gap-5 md:px-36 md:mt-32 md:mb-32">
        {applied.map((jobs) => (
          <AppliedCard key={jobs.id} jobs={jobs}></AppliedCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
