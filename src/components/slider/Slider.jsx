import React, { useState } from "react"
import { Link } from "react-router-dom";
// import  { Autoplay } from "swiper";
// import {Swiper,SwiperSlide} from "swiper/react"
import { Autoplay } from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import item from '../../assets/data/item'
import SecondSlider from "../secondSlider/SecondSlidesr";
const Slider = () => {
const [datatext] = useState({
    subtitle:"We are Futcoin FC",
    title:"Collect Your Futcoin Today",
    desc:"Futcoin is a Professional Gaming Service provider with a goal to improve the gaming experience for our customers"
})

    return (
        <section className="tf-section hero-slider">
            <div className="container">
            
                <div className="row">
                    <div className="col-xl-5 col-md-6 col-12">
                        <div className="block-text pt-24">
                         <h6 className="sub-title mb-6" data-aos="fade-up">{datatext.subtitle}</h6>
                         <h2 className="title mb-26" data-aos="fade-up">{datatext.title} </h2>
                         <p className="desc mb-43">{datatext.desc}</p>
                         <Link 
                         to="/"
                         className="btn-action style-2"
                        data-aos="fade-up" data-aos-duration="1200"
                         >Get Connected</Link>
                        </div>
                    </div>
                    <div className="col-xl-7  col-12 FirstSlider">
                    <div className="content-right d-flex">
                      {/* <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop
                      autoplay={{
                        delay:1,
                 
                        disableOnInteraction:false,
                        pauseOnMouseEnter:true,
                      }}
                      >
                      <SwiperSlide><div className="item bg-1"> <img src={item.item1} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-2"> <img src={item.item2} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-1"> <img src={item.item1} alt="" /> </div></SwiperSlide> 
                      <SwiperSlide><div className="item bg-2"> <img src={item.item2} alt="" /> </div></SwiperSlide> 
                      </Swiper>


                      <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop
                      autoplay={{
                        delay:1,
                       
                        disableOnInterAction:false,
                        pauseOnMouseEnter:true,
                      }}
                      >
                      <SwiperSlide><div className="item bg-2"> <img src={item.item3} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-1"> <img src={item.item4} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-2"> <img src={item.item5} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-1"> <img src={item.item3} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-2"> <img src={item.item4} alt="" /> </div></SwiperSlide>
                      </Swiper>

                      <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop
                      autoplay={{
                        delay:1,
                    
                        disableOnInterAction:false,
                        pauseOnMouseEnter:true,
                      }}
                      >
                      <SwiperSlide><div className="item bg-2"> <img src={item.item6} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-1"> <img src={item.item7} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-2"> <img src={item.item4} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-1"> <img src={item.item6} alt="" /> </div></SwiperSlide>
                      <SwiperSlide><div className="item bg-2"> <img src={item.item7} alt="" /> </div></SwiperSlide>
                      </Swiper> */}

                      <SecondSlider/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;