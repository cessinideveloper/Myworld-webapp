import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  button:
    'bg-black hover:bg-gray-700 text-white font-semibold py-1 px-6 text-sm rounded-full',
  disabled: 'bg-gray-500 text-white font-bold py-2 px-4 rounded-full',
  primary:
    'bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  secondary:
    'bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full',
  success:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  danger:
    'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full',
  warning:
    'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full',
  info: 'bg-black hover:bg-gray-700 text-white font-bold py-1 px-6 rounded-full',
  follow:
    'bg-black hover:bg-gray-900 text-white font-semibold px-3 py-1 rounded-full',
};
const Button = ({ label, disabled, style }) => {
  const buttonClasses = `${styleClassess[style]}`;
  return (
    <div>
      <button disabled={disabled} className={buttonClasses}>
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.oneOf([
    'button',
    'disabled',
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
