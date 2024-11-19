import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecommendationList from "../components/RecommendationList";
import Footer from "../components/Footer";

const recommendations = [
  {
    image: "https://via.placeholder.com/150",
    name: "Product 1",
    description: "This is a short description of product 1.",
    price: 1000000.0,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product 2",
    description: "This is a short description of product 2.",
    price: 7500000.0,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product 3",
    description: "This is a short description of product 3.",
    price: 1200000000.0,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product 4",
    description: "This is a short description of product 4.",
    price: 128799999.0,
  },
];

const Home = () => {
  return (
    <>
      <div
        className="pattern-dots pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-100"
      >
        <div className="z-0 bg-white bg-opacity-80">
          <Navbar />
          <Hero />
          <div className="w-screen">
            <div className="flex flex-row justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-10 text-blue-400">
                Recommendations.
              </h1>
            </div>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
