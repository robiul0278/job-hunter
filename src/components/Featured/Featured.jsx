import React, { useContext } from 'react';
import { FeaturedContext } from '../Home/Home';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const features = useContext(FeaturedContext)
    return (
        <div className='container mx-auto mt-32'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold'>Featured Jobs</h1>
                <p className=' text-slate-500 mt-5' >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-12 mt-8'>
                {
                  features.map(feature => <FeaturedCard
                  key={feature.id}
                  feature={feature}
                  ></FeaturedCard>)  
                }
            </div>
            <div className='text-center my-5'>
                <button className='btn bg-blue-600 text-white font-bold'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;