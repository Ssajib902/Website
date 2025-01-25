import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id, ratings } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
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
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleImageClick = () => {
    navigate(`/product/${_id}`, { state: { item } });
  };

  return (
    <div className="mb-10">
      <div className="card container rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white mb-5">
        <div className="relative cursor-pointer" onClick={handleImageClick}>
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <p className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg">
            ৳ {price}
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-lg h-16 font-semibold mb-2 text-gray-800">
            {name}
          </h2>
          <div className="flex gap-5">
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-12">
              {recipe}
              
            </p>
          </div>
          <div className="flex justify-around gap-2">
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-orange-500 text-white hover:bg-orange-600 rounded p-2 text-sm font-bold transition-all"
            >
              Add to Cart
            </button>

            <Link to='/dashboard/cart'>
              <button className="bg-blue-500 text-white hover:bg-blue-600 rounded p-2 text-sm font-bold transition-all">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
