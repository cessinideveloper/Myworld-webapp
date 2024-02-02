import React from 'react';
import StreamFollowCard from '../molecules/StreamFollowCard';
import Tag from '../atoms/Tag';
import Text from '../atoms/Text';
import Image from 'next/image';
import Button from '../atoms/Button';

const Livestream = () => {
  return (
    <div className="flex flex-col gap-3  w-full h-full">
      <StreamFollowCard name={'Rajat Kumar'} />
      <Text label="Room conversation title" style="create1 room" />
      <div className="flex gap-2">
        <Tag label="Follow" />
        <Tag label="Follow" />
      </div>
      <div className="px-5 relative flex justify-center">
        <Image
          src={''}
          width={600}
          height={350}
          alt="hub room"
          className="bg-rose-300 rounded-3xl w-[700px]"
        />
        <div className=" absolute bottom-3">
          <Button style={'primary'} label="Join MySpace" />
        </div>
      </div>
    </div>
  );
};

export default Livestream;
