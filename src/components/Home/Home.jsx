import React, { createContext, useEffect, useState } from "react";
import HeroArea from "./HeroArea";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import { useLoaderData } from "react-router-dom";
export const LevelContext = createContext(1);
export const FeaturedContext = createContext(2);

const Home = () => {
  const categories = useLoaderData();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch(`featured.json`)
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <>
      <FeaturedContext.Provider value={features}>
        <LevelContext.Provider value={categories}>
          <HeroArea></HeroArea>
          <Category></Category>
          <Featured></Featured>
        </LevelContext.Provider>
      </FeaturedContext.Provider>
    </>
  );
};

export default Home;
