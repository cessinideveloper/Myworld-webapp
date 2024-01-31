'use client'
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { swiperimage } from './data';
function Caresoul() {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      //   style={{ marginLeft: "-280px" }}
    >
      {swiperimage.map((slide) => (
        <SwiperSlide key={slide.img}>
          <img
            src={slide.img}
            alt={slide.id}
            // style={{ width: "500px", height: "200px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Caresoul;
