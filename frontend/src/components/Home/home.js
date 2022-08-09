import React from "react";
import Nav from "./nav";
import Categories from "./categories";
import FeaturedArea from "./featuredArea";
import Footer from "../Layouts/footer";
function Home() {
  return (
    <div className="home">
        <Nav/>
        <Categories/>
        <FeaturedArea/>
        <Footer/>
    </div>
  );
}

export default Home;
