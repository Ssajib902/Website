import React from "react";
import store from "/src/assets/pngs/store.png";
import payment from "/src/assets/pngs/atm-card.png";
import delivery from "/src/assets/pngs/delivery-truck.png";
import savings from "/src/assets/pngs/savings.png";

const Highlights = () => {
  const features = [
    {
      icon: store,
      text: (
        <>
          <span className="text-red-500 font-bold">+15000 products</span> to shop
          from
        </>
      ),
    },
    {
      icon: payment,
      text: (
        <>
          Pay <span className="text-red-500 font-bold">after</span> receiving
          products
        </>
      ),
    },
    {
      icon: delivery,
      text: (
        <>
          Get your delivery within{" "}
          <span className="text-red-500 font-bold">3 days</span>
        </>
      ),
    },
    {
      icon: savings,
      text: (
        <>
          Get offers that <span className="text-red-500 font-bold">Save Money</span>
        </>
      ),
    },
  ];

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 p-6 text-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
        >
          <img
            src={feature.icon}
            alt="icon"
            className="w-16 h-16 object-contain text-gray-700"
          />
          <div className="text-xl text-gray-600">{feature.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
