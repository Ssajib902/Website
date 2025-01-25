import React, { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./OrderTabStyle.css";
import DiscountSideBar from "../../Shared/NavBar/DiscountSideBar";

export const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (swiper) => {
    setCurrentPage(swiper.activeIndex);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
    <DiscountSideBar />
      <div className="order-tab-container">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          onSlideChange={handlePageChange}
          className="mySwiper"
        >
          {[...Array(totalPages)].map((_, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
                {currentItems.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination-container">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};
