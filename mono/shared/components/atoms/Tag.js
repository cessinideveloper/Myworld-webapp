import React from 'react';
import PropTypes from 'prop-types';
const styleClassess = {
  primary: 'bg-gray-200 text-black text-[6px] py-1 px-2 rounded-full inline-flex w-fit',
};
const Tag = ({ label, style }) => {
  const TagClasses = `${styleClassess[style]}`;
  return <div className={TagClasses}>{label}</div>;
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['primary']),
};

Tag.defaultProps = {
  style: 'primary',
};

export default Tag;
