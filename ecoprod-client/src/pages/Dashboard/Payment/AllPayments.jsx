import React from "react";

import CODImage from "/src/assets/payments/cod.jpg";
import NagadImage from "/src/assets/payments/Nagad.jpg";
import RocketImage from "/src/assets/payments/Rocket.jpg";
import CardImage from "/src/assets/payments/mastercard.jpg";
import BkashImage from "/src/assets/payments/Bkash.jpg";
import { Link } from "react-router-dom";

const AllPayments = () => {
  return (
    <>
      <div className="font-serif mt-40">
        <div className="text-center mb-10 font-bold text-2xl ">
          Select Your Payment Method
        </div>
        <div className="flex justify-around text-center">
          <Link to="/dashboard/cashondelivery">
            <div className="w-20 h-20 bg-white">
              <img className="border" src={CODImage} alt="" />
              <h1>Cash On Delivery</h1>
            </div>
          </Link>

          <Link to="/dashboard/nagad">
            <div className=" bg-white">
              <img className="w-20 h-20 border" src={NagadImage} alt="" />
              <h1>Nagad</h1>
            </div>
          </Link>

          <Link to="/dashboard/rocket">
            <div className="w-20 h-20 border">
              <img src={RocketImage} alt="" />
              <h1>Rocket</h1>
            </div>
          </Link>

          <Link to="/dashboard/bkash">
            <div className="w-20 h-20 border">
              <img src={BkashImage} alt="" />
              <h1>Bkash</h1>
            </div>
          </Link>

          <Link to="/dashboard/payment">
            <div className="w-20 h-20 border">
              <img src={CardImage} alt="" />
              <h1>Credit/Debit Card</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllPayments;
