import React from "react";
import Categories from "./categories";
import FeaturedArea from "./featuredArea";
import Footer from "../Layouts/footer";
function Home() {
  return (
    <div className="home">
        <Categories/>
        <FeaturedArea/>
        <Footer/>
    </div>
  );
}

export default Home;
