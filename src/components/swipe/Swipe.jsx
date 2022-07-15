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
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
    
          <div className="swiper-img a"></div>
          <h2>Dr. Karis E. Ameh-Wealth</h2>
          </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img b"></div>
          <h2>Sesmo</h2>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img c"></div>
          <h2>Emmanuel Werna</h2>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img d"></div>
          <h2>Dooyum Abaa</h2>
        </SwiperSlide>

        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img"></div>
          <h2>Ebenezer Adedayor</h2>
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


