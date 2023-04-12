import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";
import { getShoppingCart } from "../utilities/fakedb";

const AppliedJobs = () => {
  // founded job from localStorage
  const jobData = useLoaderData();
  console.log(jobData);
  const [jobs, setJobs] = useState([]);
  console.log(jobs.length);

  useEffect(() => {
    const foundedJobs = [];
    const storedCart = getShoppingCart();
    console.log(storedCart);
    // find and set jobs in foundedJobs array
    for (const id in storedCart) {
      const filterJobs = jobData.find((job) => job.id == id);
      if (filterJobs) {
        foundedJobs.push(filterJobs);
      }
    }

    setJobs(foundedJobs);
  }, []);

  const handleFilter = (event) => {
    filteredJobs = [];
    for (const job of jobData) {
      if (event.target.value == job.workType) {
        filteredJobs.push(job);
      } else if (event.target.value == "show-all") {
        filteredJobs.push(job);
      }
    }

    // set data useState
    setJobs(filteredJobs);
  };
  return (
    <div>
      <div className="detailsArea grid grid-cols-12">
        <div className=" col-span-3 bottom-0 left-0">
          <img className="w-80" src="Image/Vector.png" alt="" />
        </div>
        <div className=" col-span-6 flex justify-center items-center">
          <section>
          <h1 className="font-bold">Applied Jobs</h1>
            {/* {jobs.length === 0 ? (
              <h1>No Applied Job Found</h1>
            ) : (
              <div>Applied Jobs</div>
            )} */}
          </section>

          <h1 className="text-center font-bold"></h1>
        </div>
        <div className=" col-span-3 absolute top-0 right-0">
          <img src="Image/Vector-1.png" alt="" />
        </div>
      </div>
      <section className=" container mx-auto grid md:px-36 md:mt-32 md:mb-32">
        {jobs.length === 0 ? (
          <div className="mx-auto"> <img src="https://media.istockphoto.com/id/1290154699/pt/vetorial/comic-speech-bubble-with-text-oops-message-in-pop-art-style.jpg?s=612x612&w=0&k=20&c=8-yDS3NdmnwmpVvTAZz37vfsVaD1i8m8LfDgmOk6PJY=" alt="" /></div>
        ) : (
          <div>
            <div className="flex justify-end m-2 ">
              <select
                onChange={handleFilter}
                defaultValue="default"
                className="select w-full max-w-xs"
              >
                <option value="default" disabled>
                  Pick your favorite Simpson
                </option>
                <option value="show-all">Show All</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>

            <div className="grid gap-5 mt-4">
              {jobs.map((job) => (
                <AppliedCard key={job.id} job={job}></AppliedCard>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AppliedJobs;
