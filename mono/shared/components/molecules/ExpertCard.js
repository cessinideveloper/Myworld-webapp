import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const ExpertCard = () => {
  return (
    <div className="bg-rose-700 w-fit h-fit p-6 flex flex-col items-center gap-3">
      <div className="bg-rose-400 w-fit h-fit rounded-full">
        <Image src={''} width={150} height={150} alt="expert" />
      </div>
      <Text label="Rokey Mortin" style="slider-props" />
      <Text label="@django @python" />
      <Button label="Follow" />
    </div>
  );
};

export default ExpertCard;
