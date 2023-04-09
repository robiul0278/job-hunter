import React from 'react';
import HeroArea from './HeroArea';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <HeroArea></HeroArea>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;