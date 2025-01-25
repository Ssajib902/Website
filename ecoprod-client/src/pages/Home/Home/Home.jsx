import React from 'react'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from '../Testimonials/Testimonial'
import { Helmet } from 'react-helmet-async'
import SubHeroSection from './SubHeroSection'
import Highlights from '../Featured/Highlights'
import DeliveryLocations from '../Featured/DeliveryLocations'
import PopularCategories from '../PopularMenu/PopularCategories'
import HomeCategory from './HomeCategory'
import HomeImageSlider from './HomeImageSlider'
import DiscountSideBar from '../../Shared/NavBar/DiscountSideBar'
import ChatWithAI from './ChatWithAI'
import Advertise from './Advertise'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Eco Prod | Home</title>
      </Helmet>
      <DiscountSideBar />
      <Category />
      <HomeImageSlider />
      <HomeCategory />
      <Advertise />
      {/* <Banner /> */}
      <SubHeroSection />
      <Highlights />
      <PopularCategories />
      <PopularMenu />
      {/* <CallUs /> */}
      {/* <Products /> */}
      {/* <Featured /> */}
      <DeliveryLocations />
      <Testimonial />
      <ChatWithAI />
    </>
  )
}

export default Home