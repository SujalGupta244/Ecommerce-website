import React from "react";
import Categories from "./categories";
import FeaturedArea from "./featuredArea";
import { useGlobalContext } from "../../context";

function Home() {
  // const {isUser} = useGlobalContext();
  return (
    <div className="home">
        <Categories/>
        <FeaturedArea/>
    </div>
  );
}

export default Home;
