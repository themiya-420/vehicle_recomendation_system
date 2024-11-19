import React from "react";

const Login = () => {
  return (
    <div
      className=" pattern-dots pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-100"
    >
      <div className="min-h-screen bg-gray-50 bg-opacity-80 flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
            Login
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-2 rounded-lg font-medium hover:bg-blue-500 transition"
            >
              Login
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-400 hover:underline font-medium"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
