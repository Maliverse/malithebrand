import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipe.css";

// import required modules
import { EffectCards } from "swiper";

export default function Swipe() {
  return (
    <div className="swipe-container">
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>

         <h1 className="swiper-text">
         A creative mind set to do great things.
          </h1> 
    
          <div className="swiper-img a"></div>
          <h2>Dr. Karis E.</h2>
          <h3>President - Gloryzone Global</h3>
          </SwiperSlide>

        <SwiperSlide>

        <h1 className="swiper-text">
        Working with Mali is amazing! Pun intended. He executes every idea to perfection. He takes his time and he knows when something can be better. A great mind.
          </h1> 
          <div className="swiper-img b"></div>
          <h2>Sesmo</h2>
          <h3>Creative Director</h3>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         Akwunte is definitely someone you would want to handle your projects. He delivers excellently.
          </h1> 
          <div className="swiper-img c"></div>
          <h2>Emmanuel</h2>
          <h3>Data Analyst</h3>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         He never compromises on his standards, work ethic and in his character, and always strives to take giant strides in his career.
          </h1> 
          <div className="swiper-img d"></div>
          <h2>Ramatu</h2>
          <h3>Lawyer</h3>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
        An excellent creative.
          </h1> 
          <div className="swiper-img e"></div>
          <h2>Ebenezer</h2>
          <h3>Fashion Designer</h3>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}

      </Swiper>
    </>

    </div>
  );
}


