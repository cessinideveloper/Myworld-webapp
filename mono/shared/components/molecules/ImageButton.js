import React from 'react';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
import Google from 'shared/myworld-image/google.png';
import PropTypes from 'prop-types';
const ImageButton = ({ img }) => {
  return (
    <div>
      <button className="flex items-center p-2 gap-3 border border-gray-300 rounded-full">
        <img src={img} alt="google" className="w-10 h-10" />

        <Text label={'Login with Google'} style={'sign up with google'} />
      </button>
    </div>
  );
};
ImageButton.defaultProps = { img: Google };
ImageButton.propTypes = {
  img: PropTypes.string,
};

export default ImageButton;
