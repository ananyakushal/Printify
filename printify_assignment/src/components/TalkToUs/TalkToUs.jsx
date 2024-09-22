import React from 'react';

const TalkToUs = () => {
  return (
    <div className="w-full py-6 flex justify-center items-center relative">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 flex justify-between items-center p-6 rounded-lg bg-green-100 relative overflow-hidden shadow-lg">
        
        {/* Left*/}
        <div className="z-10">
          <h3 className="text-lg font-semibold text-green-900">
            Are you a large business looking for custom solutions?
          </h3>
        </div>

        {/* Right */}
        <div className="z-10">
          <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all">
            Talk to sales
          </button>
        </div>

        <div className="absolute right-0 top-0 h-full w-full z-0">
          <svg className="absolute right-0 top-0 h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M500 0H0V500H500V0Z" fill="#34D399" />
            <path d="M250 0L500 500H0L250 0Z" fill="#6EE7B7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
