import React from 'react';
import Printify from "./HeroImg.png"

function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-20 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Create and sell <br /> custom products
          </h1>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center justify-center md:justify-start text-xl text-gray-700">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center justify-center md:justify-start text-xl text-gray-700">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center justify-center md:justify-start text-xl text-gray-700">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414 0L9 12.586 7.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Largest global print network
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600">
              Start for free
            </button>
            <button className="flex items-center text-lg font-medium px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-2.492-2.493A5.994 5.994 0 019 5.5C9 4.12 9.821 3 11.25 3h1.5C14.179 3 15 4.12 15 5.5c0 1.379-.821 2.5-2.25 2.5H12l3.33 3.33c.74-.515 1.746-.83 2.748-.83 1.519 0 2.844.629 3.786 1.675a5.994 5.994 0 010 8.49 5.994 5.994 0 01-8.486 0 5.994 5.994 0 01-1.368-6.913L10.7 9.242l-1.374-1.374a1 1 0 00-1.415 1.415l2.492 2.492a8 8 0 1111.311-11.311 8 8 0 01-11.31 0"
                />
              </svg>
              How it works?
            </button>
          </div>

          <p className="text-green-500 mt-6 text-center md:text-left">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right*/}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={Printify}
            alt="Custom T-shirt"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
