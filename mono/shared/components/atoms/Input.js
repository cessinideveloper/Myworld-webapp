import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  default: 'bg-gray-200 w-1/3 px-4 py-3 rounded-full',
};

const Input = ({ hint, style }) => {
  return (
    <>
      <input placeholder={hint} className={`${styleClassess[style]}`} />
    </>
  );
};

Input.propTypes = {
  hint: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['default']),
};

Input.defaultProps = {
  style: 'default',
};

export default Input;
