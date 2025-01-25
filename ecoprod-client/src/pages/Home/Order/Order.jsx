import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../Hooks/useMenu";
import { OrderTab } from "./OrderTab";
import { Helmet } from "react-helmet-async";
import ChatWithAI from "../Home/ChatWithAI";

const Order = () => {
  const categories = [
    { name: "Vegetables", key: "vegetables" },
    { name: "Fishes", key: "fishes" },
    { name: "Meats", key: "meats" },
    { name: "Clothes", key: "clothes" },
    { name: "Wooden", key: "wooden" },
    { name: "Medicines", key: "medicine" },
  ];

  const priceRanges = [
    { label: "BDT 0-300", value: "0-300" },
    { label: "BDT 301-600", value: "301-600" },
    { label: "BDT 601-900", value: "601-900" },
    { label: "BDT 901-1000", value: "901-1000" },
    { label: "BDT 1001-1400", value: "1001-1400" },
    { label: "BDT 1401-2000", value: "1401-2000" },
    { label: "BDT 2001-3000", value: "2001-3000" },
    { label: "BDT 3001-5000", value: "3001-5000" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [menu] = useMenu();

  // Filter menu items based on filters
  const filteredMenu = menu.filter((item) => {
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;

    const matchesSearch =
      !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = (() => {
      if (!selectedPriceRange) return true;
      const [min, max] = selectedPriceRange.split("-").map(Number);
      return item.price >= min && item.price <= max;
    })();

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <>
      <Helmet>
        <title>Eco Prod | Order Products</title>
      </Helmet>
      <ChatWithAI />
      <div className="relative">
        {/* Sidebar (Filter Options) */}
        <div className="fixed top-0 left-0 h-full w-64 p-4 bg-gray-100 border-r shadow-lg">
          <h2 className="text-lg font-bold mb-4">Filter Options</h2>
          
          {/* Category Filter */}
          <div className="mt-10 mb-6">
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <ul className="space-y-2">
              <li>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={selectedCategory === ""}
                    onChange={() => setSelectedCategory("")}
                  />{" "}
                  All Categories
                </label>
              </li>
              {categories.map((category) => (
                <li key={category.key}>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value={category.key}
                      checked={selectedCategory === category.key}
                      onChange={() => setSelectedCategory(category.key)}
                    />{" "}
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <ul className="space-y-2">
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    value=""
                    checked={selectedPriceRange === ""}
                    onChange={() => setSelectedPriceRange("")}
                  />{" "}
                  All Prices
                </label>
              </li>
              {priceRanges.map((priceRange) => (
                <li key={priceRange.value}>
                  <label>
                    <input
                      type="radio"
                      name="priceRange"
                      value={priceRange.value}
                      checked={selectedPriceRange === priceRange.value}
                      onChange={() => setSelectedPriceRange(priceRange.value)}
                    />{" "}
                    {priceRange.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          {/* Search Bar */}
          <form
            className="flex items-center max-w-xl mx-auto mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="flex-grow border rounded p-2"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 bg-orange-400 text-white rounded ml-2"
            >
              Search
            </button>
          </form>

          {/* Tabs for Categories */}
          <Tabs className="">
            <TabList className="flex justify-center mb-6">
              {categories.map((category) => (
                <Tab
                  key={category.key}
                  className="mx-2 px-4 py-2 border rounded cursor-pointer active:bg-amber-200"
                >
                  {category.name}
                </Tab>
              ))}
            </TabList>
            {categories.map((category) => (
              <TabPanel key={category.key}>
                <OrderTab
                  items={filteredMenu.filter(
                    (item) => item.category === category.key
                  )}
                />
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Order;
