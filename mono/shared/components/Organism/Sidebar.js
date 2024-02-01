'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';
const Sidebar = ({
  img,
  img1,
  img1Alt,
  img2,
  img3,
  img3Alt,
  img4,
  img4Alt,
  img5,
  img5Alt,
  img6,
  img6Alt,
  img7,
  img7Alt,
}) => {
  const [imageState, setImageState] = useState({
    img1: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
  });

  // const handleImageClick = (imgKey) => {
  //   setImageState((prevState) => ({
  //     ...Object.keys(prevState),
  //     [imgKey]: !prevState[imgKey],
  //   }));
  // };
  const handleImageClick = (imgKey) => {
    setImageState((prevState) => ({
      ...Object.keys(prevState).reduce(
        (obj, key) => ({ ...obj, [key]: false }),
        {}
      ),
      [imgKey]: true,
    }));
  };

  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex flex-col gap-12 w-[7vw] items-center border py-7 relative">
      <div>
        <Image
          src={img}
          alt="Image"
          width={100}
          height={200}
          className="rounded-lg w-8 h-8"
        />
      </div>
      <div className="flex flex-col gap-6 ">
        <Image
          src={imageState.img1 ? img1 : img1Alt}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img1')}
        />
        <Image
          src={imageState.img6 ? img6Alt : img6}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img6')}
        />

        <Image
          src={imageState.img4 ? img4Alt : img4}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img4')}
        />
        <Image
          src={imageState.img3 ? img3Alt : img3}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img3')}
        />
        <Image
          src={imageState.img5 ? img5Alt : img5}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img5')}
        />
        <Image
          src={imageState.img7 ? img7Alt : img7}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => handleImageClick('img7')}
        />
      </div>
      <div>
        <Image
          src={img2}
          alt="Image"
          width={100}
          height={200}
          className="rounded-full w-12 h-12 mt-4"
          onClick={handleClick}
        />
        {menu && (
          <div className="bg-white rounded-xl w-[15vw] flex flex-col gap-2 justify-center  p-2 border border-gray-400 absolute bottom-12 left-24">
            <Text style="slider-props" label="Download App" />
            <Text style="slider-props" label="About Myworld" />
            <Text style="slider-props" label="Manage Your Hub" />
            <Text style="slider-props" label="Send Feedback" />
            <Text style="slider-props" label="Settings" />
            <Text style="slider-props" label="Terms & Conditions" />
            <Text style="slider-props" label="Privacy & Policy" />
            <Text style="slider-props" label="Logout" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
