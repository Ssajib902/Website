import React from "react";

const DeliveryLocations = () => {
  const locations = ["Dhaka", "Chattogram", "Jashore", "Rajshahi", "Khulna", "Rangpur", "Barishal", "Sylhet", "Cumilla", "Dinajpur", "Noakhali", "Pabna"];

  return (
      <div
        className="bg-cover bg-center relative p-10  sm:p-5 lg:p-5"
        style={{
          backgroundImage: `url('/src/assets/home/deliveryCity.jpg')`, // Update the path to the actual background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-6 p-10">
          <h2 className="text-2xl font-extrabold p-5 text-red-500 uppercase rounded-lg border border-red-600 bg-slate-300 bg-opacity-40">
            Currently Delivering in
          </h2>
          <div className="grid grid-cols-6 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="px-6 py-3 cursor-pointer text-center border border-black rounded-full shadow-md font-medium text-black text-xl hover:scale-105 transition-transform bg-slate-300 bg-opacity-40"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default DeliveryLocations;
