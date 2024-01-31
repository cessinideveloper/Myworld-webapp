import Image from 'next/image';
import React from 'react';
import Text from '../atoms/Text';

const HubCard = () => {
  return (
    <div className="bg-black flex gap-5">
      <div className="bg-rose-500 rounded-xl">
        <Image src={''} width={250} height={150} alt="hub video" />
      </div>
      <div className="bg-rose-300 space-y-1">
        <div className='flex gap-3 items-center'>
          <Image src={''} width={10} height={10} alt='profile'/>
          <Text label="Rondy Ros" style="myspace-name" />
        </div>
        <Text label="The Ottoman Empire Season" />
        <Text label="22k views" style="follow-text1" />
      </div>
    </div>
  );
};

export default HubCard;
