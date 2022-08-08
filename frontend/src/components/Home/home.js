import React from "react";
import Nav from "./nav";
import Categories from "./categories";
import FeaturedArea from "./featuredArea";

function Home() {
  return (
    <div className="home">
        <Nav/>
        <Categories/>
        <FeaturedArea/>
    </div>
  );
}

export default Home;
