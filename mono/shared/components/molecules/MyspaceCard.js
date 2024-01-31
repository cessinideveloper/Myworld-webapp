import React from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from 'shared/components/atoms/Button';
const MyspaceCard = ({ img1, img2, img3 }) => {
  return (
    <div className=" flex flex-col justify-center items-center border rounded-xl border-gray-300 p-2 w-[15vw]">
      <div className="text-left">
        <Text
          style="slider-props"
          label="Digital Marketing for Beginners 2022"
        />
        <Text style="slider-props2" label="#Career #Courses #Salary" />
        <Text style="follow-text1" label="@Rockey Martin" />
        <Text style="myspace-time" label="May, 4:30pm" />
      </div>

      <div className="flex flex-row justify-center items-center mb-4">
        <Image
          src={img1}
          width={50}
          height={50}
          alt="img1"
          className=" rounded-full -mr-3"
        />
        <Image
          src={img2}
          width={60}
          height={60}
          alt="img2"
          className="outline border outline-offset-2 bg-white rounded-full z-10 p-1"
        />
        <Image
          src={img3}
          width={50}
          height={50}
          alt="img3"
          className=" rounded-full -ml-3"
        />
      </div>
      <Button style={'button'} label="Join" />
    </div>
  );
};
MyspaceCard.PropTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
};

export default MyspaceCard;
