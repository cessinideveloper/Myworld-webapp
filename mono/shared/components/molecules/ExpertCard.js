import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg';

const ExpertCard = ({ imgSrc, expertName }) => {
  return (
    <div className="w-[200px] h-fit py-5 flex flex-col items-center gap-3">
      <div className="rounded-full">
        <Image src={imgSrc} width={150} height={150} alt="expert" />
      </div>
      <div>
        <Text label={expertName} style="slider-props" />
      </div>
      <Text label="@django @python" />
      <Button label="Follow" />
    </div>
  );
};

ExpertCard.propTypes = {
  imgSrc: PropTypes.string,
  expertName: PropTypes.string
};

ExpertCard.defaultProps = {
  imgSrc: ic_user_defolt_avator,
  expertName: 'Expert Name'
};

export default ExpertCard;
