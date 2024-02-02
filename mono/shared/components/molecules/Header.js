'use client';
import React, { useState } from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Share from 'shared/components/molecules/Share';

const Header = ({ img1, img2, img11, img12, img13, style }) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <div className={`flex ${style} `}>
      <Text style="signup heading" label="Home" />
      <div className="flex gap-5 relative">
        {img1 && (
          <Image src={img1} width={30} height={30} onClick={handleClick} />
        )}
        {img2 && <Image src={img2} width={30} height={30} />}
        {modal && (
          <div className=" absolute top-9 right-5">
            <Share img11={img11} img12={img12} img13={img13} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
