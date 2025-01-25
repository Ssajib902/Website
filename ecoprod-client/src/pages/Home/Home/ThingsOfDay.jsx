import React from "react";
import { FaGift, FaTags, FaHeadset } from "react-icons/fa";

const ThingsOfDay = () => {
  const items = [
    {
      icon: <FaGift size={30} className="text-yellow-500" />,
      title: "Shop & Earn Points",
      description:
        "The more you shop the more you earn - cash back, free shipping, exclusive offers, and more. Discover the perks of Egg Club membership.",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
    {
      icon: <FaTags size={30} className="text-green-500" />,
      title: "Deal of the Day",
      description:
        "Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock.",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
    {
      icon: <FaHeadset size={30} className="text-blue-500" />,
      title: "Premium Care",
      description:
        "Too busy to place an order or handling order issues? No need to worry as we give you an option to take premium assistance.",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center py-10 bg-gray-50">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-96"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {item.icon}
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThingsOfDay;
