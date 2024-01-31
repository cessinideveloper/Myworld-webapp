import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const styleClassess = {
  button:
    'bg-black hover:bg-gray-700 text-white font-semibold px-4 py-2 text-sm rounded-full',
  nothing:
    'bg-white text-white font-bold py-2 px-4 rounded-full flex gap-3 items-center border border-gray-100 text-b;ack',
  primary:
    'bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  secondary:
    'bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full',
  success:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  info: 'bg-black hover:bg-gray-700 text-white font-bold py-1 px-6 rounded-full',
  follow:
    'bg-black hover:bg-gray-900 text-white font-semibold px-3 py-1 rounded-full',
};

const Button = ({ label, disabled, style, imgSrc }) => {
  return (
    <>
      <button disabled={disabled} className={`${styleClassess[style]}`}>
        {imgSrc && <Image src={imgSrc} alt={''} width={20} height={20} />}
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  imgSrc: PropTypes.string,
  style: PropTypes.oneOf([
    'button',
    'nothing',
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'follow',
    'danger',
  ]),
};

Button.defaultProps = {
  style: 'button',
};

export default Button;
