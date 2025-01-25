import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHistory,
  FaHome,
  FaList,
  FaPhone,
  FaShoppingCart,
  FaStar,
  FaThList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <>
      <div className="flex">
        {/* Dashboard side bar */}
        <div className="w-64 min-h-screen  text-black mx-auto">
          <ul className="menu p-4">
            <li className="mt-40">
              <NavLink to="/">
                <FaHome className="text-orange-600" /> Home
              </NavLink>
            </li>
            <div className="divider"></div>
            {isAdmin ? (
              <>
                {/* <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink>
                                </li> */}

                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers className="text-blue-500" /> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils className="text-yellow-700" /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitems">
                    <FaThList className="text-fuchsia-800" /> Manage Items
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaHistory /> Payment History
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart /> My Cart ({cart.length})
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Dashboard content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
