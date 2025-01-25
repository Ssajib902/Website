import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/order/vegetables">Order Items</Link>
      </li>
      <li>
        <Link to="/menu">Our Products</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      {/* <li>
        <Link to="/secret">Profile</Link>
      </li> */}
      <li>
        <Link to="/dashboard/cart">
          <button className="flex gap-1 items-center badge p-3">
            <FaShoppingCart />
            <div>+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <button onClick={handleLogOut} className="btn btn-ghost">
          Logout
        </button>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="bg-gray-600 fixed top-0 left-0 w-full z-50 shadow-md">
        {/* Navbar container with centered content */}
        <div className="navbar max-w-7xl mx-auto text-white font-semibold px-4 py-2">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content mt-3 z-[1] shadow w-52 bg-gray-600"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/" className="text-xl font-bold whitespace-nowrap">
              Eco Prod
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-transparent">
              {navOptions}
            </ul>
          </div>

          <div className="navbar-end">
            <Link to="/order/vegetables">
              <button className="p-2 rounded-md font-bold border border-black text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-20"></div> {/* Spacer to prevent content from being hidden under fixed navbar */}
    </div>
  );
};

export default Navbar;
