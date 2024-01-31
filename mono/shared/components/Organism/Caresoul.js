'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Caresoul({ child }) {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation, Pagination]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((slide) => (
        <SwiperSlide key={slide.img}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Caresoul;
