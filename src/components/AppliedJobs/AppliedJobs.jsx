import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {
  const applied = useLoaderData();
  const [items, setItems] = useState(applied);



  const filterItem = (work) => {
    const updateItems = applied.filter((works) => {
      return works.workType === work
    });
    setItems(updateItems);
  }

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
      <div className=" container mx-auto grid md:px-36 md:mt-32 md:mb-32">
        <div className="flex justify-end mb-3">
          <div className="dropdown dropdown-end mr-">
            <label tabIndex={0} className="bg-stone-100 px-5 py-3 rounded-sm">
            Filter By <FontAwesomeIcon icon={faChevronDown} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 shadow bg-base-100 w-52"
            >
              <li>
                <p onClick={() => filterItem('remote')}>Remote</p>
              </li>
              <li>
                <p>Onsite</p>
              </li>
            </ul>
          </div>
        </div>
      <div className="grid gap-5 mt-4">
      {applied.map((jobs) => (
          <AppliedCard key={jobs.id} jobs={jobs}></AppliedCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
