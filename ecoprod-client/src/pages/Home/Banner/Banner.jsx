import React, { useState, useEffect } from "react";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.jpg";
import img6 from "../../../assets/home/04.jpg";
import img4 from "../../../assets/home/05.jpg";
import img5 from "../../../assets/home/06.jpg";
import img7 from "../../../assets/home/07.jpg";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Centered Text */}
      <h1
        className="text-3xl font-serif uppercase font-bold"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          zIndex: 10,
          fontSize: "100px"
        }}
      >
        All Our <br /> <br /> <br /> Products
      </h1>

      {/* Slider container */}
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ minWidth: "100%" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          color: "white",
          height: "100%",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          height: "100%",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Banner;


// import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../assets/home/01.jpg';
// import img2 from '../../../assets/home/02.jpg';
// import img3 from '../../../assets/home/03.jpg';
// import img6 from '../../../assets/home/04.jpg';
// import img4 from '../../../assets/home/05.jpg';
// import img5 from '../../../assets/home/06.jpg';
// import img7 from '../../../assets/home/07.jpg';

// const Banner = () => {
//     return (
//         <>
//             <Carousel>
//                 <div>
//                     <img src={img1} />
//                 </div>
//                 <div>
//                     <img src={img2} />
//                 </div>
//                 <div>
//                     <img src={img3} />
//                 </div>
//                 <div>
//                     <img src={img4} />
//                 </div>
//                 <div>
//                     <img src={img5} />
//                 </div>
//                 <div>
//                     <img src={img6} />
//                 </div>
//                 <div>
//                     <img src={img7} />
//                 </div>
//             </Carousel>
//         </>
//     )
// }

// export default Banner;
