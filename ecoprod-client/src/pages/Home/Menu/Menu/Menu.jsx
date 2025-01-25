import React from "react";
import { Helmet } from "react-helmet-async";

import vegetableCover from "/src/assets/menu/vegetable-cover.jpg";
import fishCover from "/src/assets/menu/fishes-cover.jpg";
import meatsCover from "/src/assets/menu/meats.jpg";
import woodenCover from "/src/assets/menu/wooden-cover.jpg";
import clothesCover from "/src/assets/menu/clothes--cover.jpg";
import bambooCover from "/src/assets/menu/bamboo-cover.jpg";
import medicineCover from "/src/assets/menu/Medicines.jpg";

import useMenu from "../../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SideBar from "../../../Shared/NavBar/SideBar";
import DiscountSideBar from "../../../Shared/NavBar/DiscountSideBar";
// import HomeImageSlider from "../../Home/HomeImageSlider";
import Banner from "../../Banner/Banner";

const Menu = () => {
  const [menu] = useMenu();
  // const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const vegetables = menu.filter((item) => item.category === "vegetables");
  const fishes = menu.filter((item) => item.category === "fishes");
  const meats = menu.filter((item) => item.category === "meats");
  const wooden = menu.filter((item) => item.category === "wooden");
  const clothes = menu.filter((item) => item.category === "clothes");
  const bamboo = menu.filter((item) => item.category === "bamboo");
  const medicine = menu.filter((item) => item.category === "medicine");
  return (
    <>
      <SideBar />
      <DiscountSideBar />
      <div className="mb-10">
        <Helmet>
          <title>Eco Prod | Menu</title>
        </Helmet>

        <Banner />

        <MenuCategory
          items={vegetables}
          title="vegetables"
          img={vegetableCover}
        ></MenuCategory>

        <MenuCategory
          items={fishes}
          title="fishes"
          img={fishCover}
        ></MenuCategory>

        <MenuCategory
          items={meats}
          title="meats"
          img={meatsCover}
        ></MenuCategory>

        <MenuCategory
          items={wooden}
          title="wooden"
          img={woodenCover}
        ></MenuCategory>

        <MenuCategory
          items={clothes}
          title="clothes"
          img={clothesCover}
        ></MenuCategory>

        <MenuCategory
          items={bamboo}
          title="bamboo"
          img={bambooCover}
        ></MenuCategory>
        
        <MenuCategory
          items={medicine}
          title="Medicine"
          img={medicineCover}
        ></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
