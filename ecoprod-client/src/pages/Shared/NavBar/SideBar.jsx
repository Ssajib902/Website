import { useState } from "react";
import { ChevronDown, ChevronUp, X, FastForward } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 mt-16">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div>
          {/* Vegetables Category */}
          <div>
            <div
              onClick={() => toggleCategory(0)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-500"
            >
              <span>Vegetables</span>
              {expandedCategory === 0 ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {expandedCategory === 0 && (
              <div className="bg-gray-400 bg-opacity-50 pl-6">
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  <Link to="/order/vegetables">Leafy Vegetables</Link>
                </p>

                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Root Vegetables
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Fruit Vegetables
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Cruciferous Vegetables
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Leguminous Vegetables
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Spices and Aromatic Vegetables
                </p>
              </div>
            )}
          </div>

          {/* Meats Category */}
          <div>
            <div
              onClick={() => toggleCategory(1)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-500"
            >
              <span>Meats</span>
              {expandedCategory === 1 ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {expandedCategory === 1 && (
              <div className="bg-gray-400 bg-opacity-50 pl-6">
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Red Meat
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Poultry
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Seafood (Fish and Shellfish)
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  White Meat (Other than Poultry)
                </p>
              </div>
            )}
          </div>

          {/* Clothes Category */}
          <div>
            <div
              onClick={() => toggleCategory(2)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-500"
            >
              <span>Clothes</span>
              {expandedCategory === 2 ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {expandedCategory === 2 && (
              <div className="bg-gray-400 bg-opacity-50 pl-6">
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Mens Clothing
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Womens Clothing
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Childrens Clothing
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Winter Wear
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Ethnic & Festive Wear
                </p>
              </div>
            )}
          </div>

          {/* Bamboo Category */}
          <div>
            <div
              onClick={() => toggleCategory(3)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-500"
            >
              <span>Bamboo</span>
              {expandedCategory === 3 ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {expandedCategory === 3 && (
              <div className="bg-gray-400 bg-opacity-50 pl-6">
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Household Items
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Furniture
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Construction Materials
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Handicrafts & Decorative Items
                </p>
                <p className="py-2 p-4 hover:bg-gray-400 rounded-md cursor-pointer">
                  Agricultural Tools
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed mt-16 top-0 left-4 z-50 text-black top-4 text-center rounded p-1 border border-black"
        >
          <FastForward size={24} />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 border-white bg-black opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default SideBar;
