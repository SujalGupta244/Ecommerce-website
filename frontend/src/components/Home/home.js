import React from "react";
import Categories from "./categories";
import FeaturedArea from "./featuredArea";
function Home() {
  return (
    <div className="home">
        <Categories/>
        <FeaturedArea/>
    </div>
  );
}

export default Home;
