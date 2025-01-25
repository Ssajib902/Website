import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.JPG";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.JPG";
import slide4 from "../../../assets/home/slide4.JPG";
import slide5 from "../../../assets/home/slide5.JPG";
import slide6 from "../../../assets/home/slide6.JPG";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";

const Category = () => {

  return (
    <>
      <section>

        <div className="swiper-container flex flex-col mt-10">
          {/* Swiper Slides */}
          <div className="swiper-slides">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwipe mb-10"
              slideActiveClass="scale-up"
            >
              <SwiperSlide>
                <img src={slide6} alt="" />
                  <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                    Vegetables
                  </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
                <Link to="/order/fishes">
                  <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                    Fishes
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                  Meats
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                  Cotton
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                  Wooden
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className="text-xl p-2 font-serif uppercase text-center bg-yellow-400 text-red-500 font-extrabold">
                  Bamboo
                </h3>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex items-center justify-center mb-10">
            <button className="btn btn-ghost w-48 bg-yellow-400 text-xl font-bold text-orange-600 font-serif">
            <Link to="/order/salad">
              Go To Order
              </Link>
            </button>
          </div>
        </div>


        
      </section>
    </>
  );
};

export default Category;
