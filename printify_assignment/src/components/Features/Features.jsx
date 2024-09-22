import React from 'react';
import Feature1 from "./Feature1.png"
import Feature2 from "./Feature2.png"
import Feature3 from "./Feature3.png"

function Features() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* First */}
          <div className="flex flex-col items-center">
            <img
              src={Feature1}
              alt="Higher Profits Icon"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Higher Profits</h3>
            <p className="text-gray-600 mt-2">
              We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
            </p>
          </div>

          {/* Second*/}
          <div className="flex flex-col items-center">
            <img
              src={Feature2}
              alt="Robust Scaling Icon"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Robust Scaling</h3>
            <p className="text-gray-600 mt-2">
              Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
            </p>
          </div>

          {/* Third*/}
          <div className="flex flex-col items-center">
            <img
              src={Feature3}
              alt="Best Selection Icon"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Best Selection</h3>
            <p className="text-gray-600 mt-2">
              With 900+ products and top quality brands, you can choose the best products for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
