import React from 'react';
import PropTypes from 'prop-types';
const styleClassess = {
  default: 'text-base font-normal',
  heading: 'text-xl font-bold',
  'room-text': 'text-lg font-semibold',
  'dropdown-text': 'text-[17px] font-bold',
  'sign up with google': 'text-[20px] font-bold',
  'signup text': 'text-[12px] font-semibold text-gray-400',
  'signup heading': 'text-[20px] font-bold',
  'follow-text1': 'text-[12px] font-bold',
  'follow-text1': 'text-[12px] font-semibold',
  'hub-time': 'text-[10px] font-bold',
  'slider-props': 'text-[15px] font-bold',
  'slider-props2': 'text-[15px] font-bold text-blue-500',
  'myspace-name': 'text-[14px] font-bold',
  'myspace-time': 'text-[10px] font-bold text-gray-400',
  'expert-tag': 'text-[11px] font-semibold text-gray-400',
  'chat-head': 'text-3xl font-bold',
  'create1 room': 'text-[37px] font-bold text-gray-400',
  'create2-text': 'text-[16px] font-semibold text-gray-200',
  'button-text': 'text-xl font-bold',
  'button-text2': 'text-xl font-bold text-white',
  'create-text3': 'text-xl font-bold text-blue-400',
};
const Text = ({ label, style }) => {
  const textClasses = `${styleClassess[style]}`;
  return <div className={textClasses}>{label}</div>;
};
Text.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Text;
