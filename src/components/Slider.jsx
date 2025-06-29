import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.scss';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/22.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="21.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/23.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="24.png" a href="/productlist" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}