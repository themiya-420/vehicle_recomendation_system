import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav fixed w-screen bg-blue-400 h-16 flex flex-row items-center justify-between p-4">
        <div className="flex flex-row gap-4 text-white items-center">
          <a className="text-2xl font-bold">VehiRec. </a>
          <a href="#" class="relative  group">
            Contact
            <span class="absolute mt-2 left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" class="relative  group">
            About Us
            <span class="absolute mt-2 left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <button className="bg-white text-blue-400 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 ">
            Login
          </button>
          <button className="bg-white text-blue-400 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 ">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
