'use client';
import React, { useState } from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  default:
    'bg-gray-100 border-[1px] border-gray-500 px-3 py-2 rounded-full cursor-pointer w-fit text-gray-500',
  select:
    'bg-blue-300 border-[1px] border-blue-600 px-3 py-2 rounded-full cursor-pointer w-fit text-blue-800',
};

const PopupCategory = ({ category }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={
        selected ? `${styleClassess['select']}` : `${styleClassess['default']}`
      }
    >
      {category}
    </div>
  );
};

PopupCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

PopupCategory.defaultProps = {
  category: 'category name',
};

export default PopupCategory;
