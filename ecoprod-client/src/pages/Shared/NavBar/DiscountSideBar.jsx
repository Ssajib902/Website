import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const DiscountSideBar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chatbox

  // Toggle chatbox visibility
  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating SMS Button */}
      <div
        className="fixed mt-80 right-0 text-white transform text-center p-3 cursor-pointer z-50 border rounded-full bg-orange-600 hover:bg-orange-700 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
        onClick={handleToggleChat}
      >
        <h3 className="text-sm font-bold">
          Get 50 tk <br />
          OFF
        </h3>
      </div>

      {/* Chatbox */}
      {isChatOpen && (
        <div className="fixed top-60 right-4 w-60 bg-white shadow-lg border rounded-lg z-50">
          {/* Chatbox Header */}
          <div className="bg-black text-white rounded-t-lg relative p-3">
            <h3 className="font-bold">
              Use this Coupon Code <br />
              to get 50 tk OFF
            </h3>
            <button
              className="absolute top-2 right-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
              onClick={handleToggleChat}
            >
              <FaXmark className="text-lg" />
            </button>
          </div>

          {/* Chatbox Content */}
          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="font-extrabold text-center text-2xl">EP-50</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountSideBar;
