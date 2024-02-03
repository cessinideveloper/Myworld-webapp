'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
const TabLayout = ({ tabs = [], tabContent = [], flexStyle, flexStyle1 }) => {
  const [selected, setSelected] = useState(1);
  const tabShown = tabContent.filter(content=>content.id===selected);
  return (
    <div className={`flex  ${flexStyle} `}>
      <div className={`flex ${flexStyle1}`}>
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className="p-4 m-2 cursor-pointer whitespace-nowrap font-semibold"
              onClick={() => setSelected(tab.id)}
            >
              {tab.data}
            </div>
          );
        })}
      </div>
      {tabShown.map((data) => {
        return <div className="h-[500px] w-full">{data.content}</div>;
      })}
    </div>
  );
};

TabLayout.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabContent: PropTypes.array.isRequired,
  flexStyle: PropTypes.string,
  flexStyle1: PropTypes.string,
};
TabLayout.defaultprops = {
  flexStyle: 'flex-col',
  flexStyle1: 'flex-row',
};
export default TabLayout;
