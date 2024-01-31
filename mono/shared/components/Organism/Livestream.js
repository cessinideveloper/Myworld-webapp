import React from 'react';
import StreamFollowCard from '../molecules/StreamFollowCard';
import Tag from '../atoms/Tag';
import Text from '../atoms/Text';
import Image from 'next/image';

const Livestream = () => {
  return (
    <div className="flex flex-col gap-3 bg-gray-500 w-fit h-fit">
      <StreamFollowCard name={'Rajat Kumar'} />
      <Text label="Room conversation title" style="create1 room" />
      <Tag label="Follow" />
      <div className="px-5">
        <Image
          src={''}
          width={600}
          height={350}
          alt="hub room"
          className="bg-rose-300 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Livestream;
