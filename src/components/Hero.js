import React from "react";

const Hero = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
              Let's not stress for
              <span className="text-blue-400 dark:text-blue-300">Finding</span>
              Vehicles.
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 dark:text-gray-300 font-normal text-center text-xl">
              Find your dream vehicle that matches your Lifestyle.
            </p>
          </div>
          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                name="q"
                className="w-full p-3 rounded-full rounded-r-none border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                placeholder="Enter Price, Model"
              />
              <button className="inline-flex items-center gap-2 bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
                <span>Find</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
