import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';
import Tag from 'shared/components/atoms/Tag';
import Button from 'shared/components/atoms/Button';
const HubSuggetion = () => {
  return (
    <div className='w-1/3'>
      <Text label={'Hub you may like'} style={'signup heading'} />
      <div className="flex gap-2">
        <div className="flex flex-col gap-0">
          <Image
            src={'/man.jpg'}
            width={70}
            height={100}
            className=" rounded-t"
          />
          <Image
            src={'/man.jpg'}
            width={70}
            height={100}
            className=" rounded-b"
          />
        </div>
        <div>
          <Text
            style="follow-text1"
            label="Foundation of Youth Ending Explained | 7 Guardians of the Tomb 2020 Explained in hindi"
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Text style="follow-text1" label="Rajat Sing" />
              {/* <Tag label="Host" style={'primary'} /> */}
              <Tag label="Follow" />
            </div>
            <Button label="Follow" style={'primary'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubSuggetion;
