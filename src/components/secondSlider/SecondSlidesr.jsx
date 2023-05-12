import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/data/slider';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './secondSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function SecondSlider() {
/*   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }; */
  return (
    <>
      <Swiper
      style={{"--swiper-navigation-color": "#fd562a", "--swiper-pagination-color": "#fd562a"}}
      swiper-button-white
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        className="mySwiper swiper-button-white"
      >
      
        <SwiperSlide><div className="sliderImag"><img src={img.img1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img4} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img5} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img6} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img7} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="sliderImag"><img src={img.img8} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  );
}
