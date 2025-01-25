import React, { useState } from "react";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const finalPrice = (totalPrice - discount).toFixed(2);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const applyCoupon = () => {
    if (coupon === "EP-50") {
      setDiscount(50);
      Swal.fire({
        title: "Coupon Applied!",
        text: "You got a discount of 50 Taka.",
        icon: "success",
      });
    } else {
      setDiscount(0);
      Swal.fire({
        title: "Invalid Coupon!",
        text: "Please use a valid coupon code.",
        icon: "error",
      });
    }
  };

  return (
    <div className="border p-10">
      <div className="flex justify-evenly mb-8">
        <h2 className="font-bold text-3xl">Your Cart</h2>

        {cart.length ? (
          <Link to="/dashboard/all-payments">
            <button className="btn btn-primary">
              Pay ৳ {finalPrice}
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h4 className="font-bold">{item.name}</h4>
                </td>
                <td>৳ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      {/* Coupon Code Section */}
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon Code"
          className="input input-bordered w-60"
        />
        <button onClick={applyCoupon} className="btn bg-orange-600">
          Apply Coupon
        </button>
      </div>
      {/* Summary Section */}
      <div className="w-full mt-8 flex justify-around">
        <div className="text-center">
          <h4 className="text-2xl font-bold">Quantity</h4>
          <h4 className="text-2xl font-bold">{cart.length}</h4>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Sub-Total</h4>
          <h4 className="text-2xl font-bold">{totalPrice} Taka</h4>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Discount</h4>
          <h4 className="text-2xl font-bold">- {discount} Taka</h4>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">Total</h4>
          <h4 className="text-2xl font-bold">{finalPrice} Taka</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
