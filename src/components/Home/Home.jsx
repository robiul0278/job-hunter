import React, { createContext, useEffect, useState } from "react";
import HeroArea from "./HeroArea";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import { useLoaderData } from "react-router-dom";
export const LevelContext = createContext(1);
export const FeaturedContext = createContext(2);
export const JobDetail = createContext(3)

const Home = () => {
  const features = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`category.json`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <FeaturedContext.Provider value={features}>
        <LevelContext.Provider value={category}>
          <HeroArea></HeroArea>
          <Category></Category>
          <Featured></Featured>
        </LevelContext.Provider>
      </FeaturedContext.Provider>
    </>
  );
};

export default Home;
