import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
// import featuredImg from '../../../assets/home/featured.jpg'
import './featuredItems.css';

const Featured = () => {
  return (
    <>
      <div className='featured-items text-white pt-8 my-20 bg-fixed'>
        <SectionTitle subHeading="check it out" heading="Featured Items" />
        <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className='md:ml-10'>
            <p>Jan 24, 2025</p>
            <p className='uppercase'>Where can I get  some..?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus iusto doloribus, quas sapiente rem esse corporis possimus deleniti nobis tenetur iure non sed beatae enim iste est velit commodi optio assumenda</p>
            <button className='btn bg-orange-600 btn-outline bg-opacity-5 border-0 border-b-4'>Order Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured