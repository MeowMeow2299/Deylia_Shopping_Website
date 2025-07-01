import './ProductList.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import useScrollReveal from "../hooks/useScrollReveal";
const ProductList = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "show" : ""}`}
    >
    <div className="product-list-page">
      <img src={`${process.env.PUBLIC_URL}/6.png`} />
      <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img src={`${process.env.PUBLIC_URL}/7.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/8.png`} />
        </SwiperSlide>
        </Swiper>
    </div>

    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/13.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/14.png`} />
        </SwiperSlide>
        </Swiper>
    </div>

    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img src={`${process.env.PUBLIC_URL}/11.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/12.png`} />
        </SwiperSlide>
        </Swiper>
    </div>

     <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/15.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/16.png`} />
        </SwiperSlide>
        </Swiper>
    </div>

     <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/17.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/18.png`} />
        </SwiperSlide>
        </Swiper>
    </div>

     <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/19.png`} />
        </SwiperSlide>
        <SwiperSlide>
         <img src={`${process.env.PUBLIC_URL}/20.png`} />
        </SwiperSlide>
        </Swiper>
    </div>
    </div>
    </div>
  );
};

export default ProductList;