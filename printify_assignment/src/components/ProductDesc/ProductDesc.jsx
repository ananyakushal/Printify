import React from "react";
import Product1 from "./Product1.png"
import Product2 from "./Product2.png"

const ProductDesc = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-8 rounded-lg">
      {/* Left section*/}
      <div className=" md:w-2/3 flex items-center justify-center">
        <img
          src={Product1}
          alt="Product Display"
          className="w-[45%] h-auto rounded-3xl shadow-lg"
        />
        {/* Plus buttons on each product in the image */}
        {/* <div className="absolute top-6 left-6">
          <button className="bg-green-400 text-white p-2 rounded-full">+</button>
        </div>
        <div className="absolute top-20 right-10">
          <button className="bg-green-400 text-white p-2 rounded-full">+</button>
        </div>
        <div className="absolute bottom-6 left-12">
          <button className="bg-green-400 text-white p-2 rounded-full">+</button>
        </div>
        <div className="absolute bottom-12 right-20">
          <button className="bg-green-400 text-white p-2 rounded-full">+</button>
        </div> */}
      </div>

      {/* Right section */}
      <div className="md:w-1/3 flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Easily add your design to a wide range of products
        </h2>
        <p className="text-gray-600 mb-6">
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a
          href="/all-products"
          className="text-green-500 hover:text-green-600 underline font-semibold"
        >
          All products &rarr;
        </a>

        {/* Small image*/}
        <div className=" mt-8">
          <img
            src={Product2}
            alt="Design Preview"
            className="w-48 h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="bg-white p-2 rounded-md shadow-md">
              <div className="bg-gray-200 w-32 h-32 flex items-center justify-center"> */}
                {/* <span className="text-sm font-bold text-gray-800">Edit</span> */}
              </div>
              <div className="text-center mt-2">
                <button className="bg-green-400 text-white px-4 py-2 rounded-full">
                  Preview
                </button>
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
