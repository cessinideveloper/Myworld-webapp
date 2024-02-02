'use client';
import React, { useEffect, useRef } from 'react';
import {sliderData} from 'shared/model/MainSliderData'

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
    <div className="flex items-center justify-center h-[100vh] w-full bg-black">
      <div className="w-[90vw] bg-slate-400 h-full flex items-center justify-between">
        <button
          onClick={() => scrollToSlide(-600)}
          className="z-10 bg-blue-800"
        >
          previous
        </button>
        <div className="relative w-[90%] border-[10px]">
          <div
            ref={sliderRef}
            className="w-full h-auto flex justify-start items-center overflow-hidden relative scroll-smooth"
          >
            {sliderData.map((data) => {
              return (
                <div className="bg-blue-500 min-w-[600px] h-[500px] border overflow-hidden slide">
                  {data}
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={() => scrollToSlide(600)} className="z-10 bg-blue-800">
          next
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
