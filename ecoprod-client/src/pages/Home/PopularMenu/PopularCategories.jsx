import React from "react";

import vegetableImage from "/src/assets/home/vegetables.png";
import fishImage from "/src/assets/home/fish.png";
import chickenImage from "/src/assets/home/chicken.png";
import woodenImage from "/src/assets/home/wooden.png";
import bambooImage from "/src/assets/home/bamboo.png";
import AntisepticsImage from "/src/assets/home/antiseptics.png";
import ClothesImage from "/src/assets/home/clothes.png";
import HPImage from "/src/assets/home/health&products.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const categories = [
  { name: "Vegetables", image: vegetableImage },
  { name: "Fish", image: fishImage },
  { name: "Chicken", image: chickenImage },
  { name: "Wooden", image: woodenImage },
  { name: "Bamboo", image: bambooImage },
  { name: "Clothes", image: ClothesImage },
  { name: "Health and Products", image: HPImage },
  { name: "Antiseptics", image: AntisepticsImage },
];

const PopularCategories = () => {
  return (
    <div className="p-6">
      <hr className="border border-orange-600" />
      <SectionTitle
        heading={"Popular Categories"}
        subHeading={"From EcoProd"}
      ></SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-cover mb-2"
            />
            <p className="mt-2 text-center text-sm font-medium">
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <button className="text-red-500 hover:underline">View All</button>
      </div>
    </div>
  );
};

export default PopularCategories;
