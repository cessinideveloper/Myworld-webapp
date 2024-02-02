'use client';
import React, { useEffect, useRef } from 'react';
import { sliderData } from 'shared/model/MainSliderDummyData';
import backarrowright from 'shared/assets/backarrowright.svg';
import Image from 'next/image';

const MainSlider = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 300,
        behavior: 'smooth',
      });
    }
  }, []);
  const scrollToSlide = (scrollValue) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollValue;
    }
  };
  return (
    <div className="h-full w-full flex items-center justify-between">
      <button
        onClick={() => scrollToSlide(-600)}
        className="z-10 bg-gray-300 p-4 rounded-full translate-x-[19vw] rotate-180"
      >
        <Image src={backarrowright} width={20} height={20} alt="previous" />
      </button>
        <div
          ref={sliderRef}
          className="w-full h-auto flex justify-start items-center overflow-hidden relative scroll-smooth"
        >
          {sliderData.map((data) => {
            return (
              <div key={data.id} className="border-[12px] border-white rounded-[75px] min-w-[600px] h-[400px] overflow-hidden">
                <Image src={data.imgSrc} width={600} height={400} alt='slider image'/>
              </div>
            );
          })}
        </div>
      <button
        onClick={() => scrollToSlide(600)}
        className="z-10 bg-gray-300 p-4 rounded-full -translate-x-[23vw]"
      >
        <Image src={backarrowright} width={20} height={20} alt="previous" />
      </button>
    </div>
  );
};

export default MainSlider;
