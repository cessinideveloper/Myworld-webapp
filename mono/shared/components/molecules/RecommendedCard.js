import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';
const RecommendedCard = ({ img, img1 }) => {
  return (
    <div className='relative'>
      <Image
        src={img}
        width={200}
        height={400}
        alt="img"
        className=" w-[200px] h-[250px] rounded-lg"
      />
      <div className="flex gap-1 absolute left-3 bottom-10 z-10">
        <Image
          src={img1}
          width={36}
          height={36}
          className="w-7 h-7 outline border border-black rounded-full"
        />
        <Text style="expert-tag" label="Rondy Ros" className="text-white" />
      </div>
    </div>
  );
};

RecommendedCard.PropTypes = {
  img: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
};
export default RecommendedCard;
