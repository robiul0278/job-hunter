import React, { useContext } from 'react';
import CategoryCard from './CategoryCard';
import { LevelContext } from '../Home/Home';

const Category = () => {
    const categories = useContext(LevelContext)
    console.log(categories)
    return (
        <div className='container mx-auto mt-32'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold'>Job Category List</h1>
                <p className=' text-slate-500 mt-5' >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-4 mt-8'>
                {
                  categories.map(category => <CategoryCard
                  key={category.id}
                  category={category}
                  ></CategoryCard>)  
                }
            </div>
        </div>
    );
};

export default Category;