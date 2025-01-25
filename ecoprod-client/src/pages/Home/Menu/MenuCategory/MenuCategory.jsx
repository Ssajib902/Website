// import React from "react";
// import MenuItem from "../../../Shared/MenuItem/MenuItem";
// import Cover from "../../../Shared/Cover/Cover";
// import { Link } from "react-router-dom";

// const MenuCategory = ({ items, title, img }) => {
//   return (
//     <>
//       <div className="pt-8">
//         {title && <Cover img={img} title={title}></Cover>}
//         <div className="grid md:grid-cols-2 gap-10 mt-16">
//           {items.map((item) => (
//             <MenuItem key={item._id} item={item}></MenuItem>
//           ))}
//         </div>
//         <Link to={`/order/${title}`}>
//           <div className="flex justify-center w-full">
//             <button className="btn btn-outline bg-opacity-5 border-0 border-b-4 mt-5 mb-10">
//               Order Now
//             </button>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default MenuCategory;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Cover from "../../../Shared/Cover/Cover";

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <div className="h-80">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.size}</p>
      <p className="text-red-500 font-bold mt-2">৳{product.price}</p>
      <p className="text-gray-500 text-sm">Delivery 3 Days</p>
    </div>
    <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md w-full flex items-center justify-center gap-2">
      <FaShoppingBag /> Add to Bag
    </button>
  </div>
);

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Order Now Button */}
      <Link to={`/order/${title}`}>
        <div className="flex justify-center w-full">
          <button className="btn btn-outline bg-opacity-5 border-0 border-b-4 mt-5 mb-10">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
