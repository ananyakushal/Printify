import React from "react";
import ProfitImg from "./ProfitImg.png"

const Profit = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6">
        {/* Left  */}
        <div className="text-white bg-gray-800 p-6 rounded-lg lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h1>
          <p className="text-gray-300 mb-8">
            You pay for fulfillment only when you make a sale
          </p>
          <div className="bg-gray-900 text-center p-6 rounded-lg">
            <div className="flex justify-between text-xl font-semibold">
              <p>You sell a t-shirt</p>
              <p>$30</p>
            </div>
            <div className="flex justify-between text-xl font-semibold my-4">
              <p>You pay for its production</p>
              <p>$12</p>
            </div>
            <hr className="my-2 border-gray-700" />
            <div className="flex justify-between text-xl font-semibold text-green-400">
              <p>Your profit</p>
              <p>$18</p>
            </div>
          </div>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Start selling
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center lg:w-1/2 p-6">
          <div className="w-full h-auto">
            <img
              src={ProfitImg}
              alt="Person watering money plant"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit;
