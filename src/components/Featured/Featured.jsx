import React, { useContext, useState } from 'react';
import { FeaturedContext } from '../Home/Home';
import FeaturedCard from './FeaturedCard';
import "./feature.css"

const Featured = () => {
    const data = useContext(FeaturedContext);
    const [showAll, setShowAll] = useState(false);

    const features = showAll? data : data.slice(0 , 4);
     const handleClick = () =>{
        setShowAll(true)
     }

    return (
        <div className='container mx-auto mt-32'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold'>Featured Jobs</h1>
                <p className=' text-slate-500 mt-5' >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 md:px-36 gap-12 mt-8'>
                {
                  features.map(feature => <FeaturedCard
                  key={feature.id}
                  feature={feature}
                  ></FeaturedCard>)  
                }
            </div>
            <div className='text-center my-5'>
                <span onClick={handleClick}  className={`btn btn-type text-white ${features.length > 4 ? "hidden": "" }`}>See All Jobs</span>
            </div>
        </div>
    );
};

export default Featured;