import React, { useRef, useState } from "react";
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
          <div className="swiper-img"></div>
          
          </SwiperSlide>
        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img"></div>
        </SwiperSlide>
        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img"></div>
        </SwiperSlide>
        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img"></div>
        </SwiperSlide>
        <SwiperSlide>
        <h1 className="swiper-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorum beatae.
          </h1> 
          <div className="swiper-img"></div>
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


