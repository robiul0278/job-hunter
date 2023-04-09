import React from 'react';
import HeroArea from './HeroArea';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import { useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
export const LevelContext = createContext(1);

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <HeroArea></HeroArea>
            <LevelContext.Provider value={categories}>
                <Category></Category>
                <Featured></Featured>
            </LevelContext.Provider>
        </div>
    );
};

export default Home;