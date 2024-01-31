import React from 'react';
import Image from 'next/image';
const Sidebar = ({ img, img1, img2, img3, img4, img5, img6, img7, img8 }) => {
  return (
    <div className="flex flex-col gap-12 w-[7vw] items-center border pt-7">
      <div>
        <Image
          src={img}
          alt="Image"
          width={100}
          height={200}
          className="rounded-lg w-8 h-8"
        />
      </div>
      <div className='flex flex-col gap-6'>
        <Image
          src={img1}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />
        <Image
          src={img6}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />

        <Image
          src={img4}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />
        <Image
          src={img3}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />
        <Image
          src={img5}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />
        <Image
          src={img7}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
        />
      </div>
      <div>
        {' '}
        <Image
          src={img2}
          alt="Image"
          width={100}
          height={200}
          className="rounded-full w-12 h-12 mt-4"
        />{' '}
      </div>
    </div>
  );
};

export default Sidebar;
