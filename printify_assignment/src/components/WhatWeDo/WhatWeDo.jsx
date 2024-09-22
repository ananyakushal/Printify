import React from 'react';
import Create from "./Create.png"
import Sell from "./Create.png"
import Handle from "./Create.png"

const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* CREATE*/}
      <div className="text-center md:w-1/3 flex flex-col items-center">
        <img
          src={Create}
          alt="Create Custom Products"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-green-600 font-bold uppercase mb-2">Create</h3>
        <h4 className="text-xl font-semibold mb-2">custom products</h4>
        <p className="text-gray-600">
          Easily add your designs to a wide range of products using our free tools.
        </p>
      </div>

      {/* SELL*/}
      <div className="text-center md:w-1/3 flex flex-col items-center">
        <img
          src={Sell}
          alt="Sell On Your Terms"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-green-600 font-bold uppercase mb-2">Sell</h3>
        <h4 className="text-xl font-semibold mb-2">on your terms</h4>
        <p className="text-gray-600">
          You choose the products, sale price, and where to sell.
        </p>
      </div>

      {/* FULFILLMENT */}
      <div className="text-center md:w-1/3 flex flex-col items-center">
        <img
          src={Handle}
          alt="We Handle Fulfillment"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-green-600 font-bold uppercase mb-2">We Handle</h3>
        <h4 className="text-xl font-semibold mb-2">fulfillment</h4>
        <p className="text-gray-600">
          Once an order is placed, we automatically handle all the printing and delivery logistics.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
