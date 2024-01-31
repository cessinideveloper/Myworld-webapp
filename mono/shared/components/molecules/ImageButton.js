import React from 'react';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
// import Google from 'shared/myworld-image/google.png';
import PropTypes from 'prop-types';
const ImageButton = ({ img }) => {
  return (
    <div>
      <button className="flex items-center py-2 px-8 gap-3 border border-gray-100 rounded-full">
        <img src={img} alt="google" className="w-7 h-7" />

        <Text label={'Login with Google'} style={'sign up with google'} />
      </button>
      {/* <Button label={'google'} imgSrc={img} style={'disabled'} /> */}
    </div>
  );
};

ImageButton.propTypes = {
  img: PropTypes.string,
};

export default ImageButton;
