import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg' 

const ExpertCard = ({imgSrc}) => {
  return (
    <div className="bg-rose-700 w-fit h-fit p-6 flex flex-col items-center gap-3">
      <div className="bg-rose-400 w-fit h-fit rounded-full">
        <Image src={imgSrc} width={150} height={150} alt="expert" />
      </div>
      <Text label="Rokey Mortin" style="slider-props" />
      <Text label="@django @python" />
      <Button label="Follow" />
    </div>
  );
};

ExpertCard.propTypes = {
  imgSrc : PropTypes.string
}

ExpertCard.defaultProps = {
  imgSrc: ic_user_defolt_avator
}

export default ExpertCard;
