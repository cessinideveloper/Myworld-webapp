import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';

const TopicContentCard = () => {
  return (
    <div className='w-fit h-fit bg-slate-600'>
      <div className="bg-rose-400 w-fit h-fit rounded-xl">
        <Image src={''} width={200} height={350} alt="short video" />
      </div>
      <div>
        <Text label="Rondy Ros" style="follow-text2" />
        <Text label="The Ottoman Empire Season" style="follow-text2" />
        <Text label="22k views" style="follow-text2" />
      </div>
    </div>
  );
};

export default TopicContentCard;
