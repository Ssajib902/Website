import React from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state;
  const { name, image, price, recipe, details } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      });
    }
  };

  return (
    <div className="container flex mx-auto py-10 px-4">
      <div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt={name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p className="text-lg text-gray-700 mb-4">{recipe}</p>
            <p className="text-xl text-gray-900 font-semibold mb-6">
              ৳ {price}
            </p>
            <div className=" mt-2 mb-5">
              Details<p className="font-bold ">{details}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded transition-all"
              >
                Add to Cart
              </button>

              <Link to="/dashboard/cart">
                <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded transition-all">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-96 p-5 font-serif">
        <h3 className="text-center">Delivery Options</h3>
        <hr />
        <div className="flex mt-10 mb-5 justify-around text-sm">
          <img src="/src/assets/pngs/maps.png" className="w-6 h-6" alt="" />
          <div className="">Standard Delivery</div>
          <div>60 tk</div>
        </div>
        <div className="flex mt-10 mb-5 justify-around text-sm">
          <img
            src="/src/assets/pngs/cash-on-delivery.png"
            className="w-6 h-6"
            alt=""
          />
          <p>Cash on Delivery Available</p>
          <h3></h3>
        </div>
        <p className="p-10 text-center items-center flex gap-5"><FaCheckCircle /> Delivery within 3 days</p>
        <h2> </h2>
      </div>
    </div>
  );
};

export default ProductDetails;
