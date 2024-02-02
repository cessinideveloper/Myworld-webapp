"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import backarrowright from 'shared/assets/backarrowright.svg' 
import 'globals.css';

const SliderComponent = ({child}) => {
  const containerRef = useRef(null);

  const handleRightButtonClick = () => {
    const container = containerRef.current;
    const scrollAmount = 228;
    container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
  };

  return (
    <>
    <div className='relative'>
      <div className='contain flex mt-5 overflow-x-auto relative' ref={containerRef}>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((slide) => (
        <div key={slide.img} className='mr-8'>{child}</div>
      ))}
      </div>
      <Image src={backarrowright} height={30} width={30} onClick={handleRightButtonClick} alt='Next arrow' className='absolute top-1/2 right-0 z-10 cursor-pointer'/>
    </div>
    </>
  );
};

export default SliderComponent;
