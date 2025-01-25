import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const products = [
  { id: 1, name: "Schweppes Soda Water Can", size: "330(±10ml)", price: 300 },
  { id: 2, name: "Schweppes Tonic Water Can", size: "330(±10ml)", price: 300 },
  { id: 3, name: "Horlicks Classic Malt", size: "1000gm (Jar)", price: 780 },
  { id: 4, name: "Mothers Horlicks", size: "350gm (BIB)", price: 585 },
  { id: 5, name: "Womens Plus Horlicks", size: "400gm (Jar)", price: 575 },
  { id: 6, name: "Horlicks Junior Stage-1", size: "1500gm (Jar)", price: 460 },
  { id: 7, name: "Junior Horlicks", size: "450gm (Jar)", price: 460 },
  { id: 8, name: "Horlicks Classic Malt", size: "500gm (Jar)", price: 420 },
  { id: 9, name: "Horlicks Chocolate", size: "500gm (Jar)", price: 415 },
  { id: 10, name: "Horlicks Classic Malt", size: "250gm (Jar)", price: 225 },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">PRICE RANGE</h3>
        <input type="range" min="10" max="1850" className="w-full" />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">DELIVERY TIME</h3>
        <label>
          <input type="checkbox" className="mr-2" />2-3 Days
        </label>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">EXPRESS DELIVERY</h3>
        <label>
          <input type="checkbox" className="mr-2" />Yes
        </label>
        <br />
        <label>
          <input type="checkbox" className="mr-2" />No
        </label>
      </div>
      <div>
        <h3 className="font-semibold mb-2">FREE SHIPPING</h3>
        <label>
          <input type="checkbox" className="mr-2" />Yes
        </label>
        <br />
        <label>
          <input type="checkbox" className="mr-2" />No
        </label>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={`https://via.placeholder.com/150?text=${product.name}`}
        alt={product.name}
        className="w-full h-32 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.size}</p>
      <p className="text-red-500 font-bold mt-2">৳{product.price} Per Piece</p>
      <p className="text-gray-500 text-sm">Delivery 1-2 hours</p>
      <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md w-full flex items-center justify-center gap-2">
        <FaShoppingBag /> Add to Bag
      </button>
    </div>
  );
};

const Products = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4 p-4 grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
