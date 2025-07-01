import React from "react";
import Counter from "../components/Counter"; // ce fichier doit exister
import Navbar from "../components/Navbar/Navbar";
import HomeComponent from "../components/Home/HomeComponent";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-lg:flex max-lg:justify-center max-lg:flex-wrap">
        <HomeComponent />
        <Counter />
      </div>
    </>
  );
};

export default Home;
