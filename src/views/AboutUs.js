import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div
        className=" pattern-dots pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-100"
      >
        <div>
          <div className="min-h-screen bg-gray-50 bg-opacity-80 flex items-center justify-center">
            <div className="max-w-4xl mx-auto rounded-lg p-8">
              <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
                About Us
              </h1>
              <p className="text-gray-600 text-center mb-8">
                We are a team passionate about connecting people to their ideal
                vehicles using the power of machine learning. Our platform
                analyzes your needs and preferences to recommend the best
                options just for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h11M9 21v-4a3 3 0 00-3-3H3v7h6zm6-11h6m-3 7v7m0-7a3 3 0 00-3-3h-3"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Smart Recommendations
                    </h2>
                    <p className="text-gray-600">
                      Powered by advanced machine learning algorithms.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16V8m0 8a4 4 0 11-4-4h8a4 4 0 110 8z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      User-Friendly
                    </h2>
                    <p className="text-gray-600">
                      Designed for seamless browsing and selection.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 17a4 4 0 10-8 0m4-12v4m0 4v4"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Data-Driven Insights
                    </h2>
                    <p className="text-gray-600">
                      Recommendations backed by real-world data and trends.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a4 4 0 10-8 0v2M7 9v6a4 4 0 008 0V9m-4 0a1 1 0 00-1-1h2a1 1 0 00-1-1m-2 6h4"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Reliable Support
                    </h2>
                    <p className="text-gray-600">
                      Dedicated assistance whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
