'use client';
import React, { useState } from 'react';

const TabLayout = ({ tabs, tabContent }) => {
  const [selected, setSelected] = useState(1);
  const tabShown = tabContent.filter(content=>content.id===selected);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className="p-4 bg-gray-400 m-2 cursor-pointer"
              onClick={() => setSelected(tab.id)}
            >
              {tab.data}
            </div>
          );
        })}
      </div>
      {tabShown.map((data)=>{
        return (
          <div className='bg-gray-300 h-[500px] w-full'>{data.content}</div>
        )
      })}
    </div>
  );
};

export default TabLayout;
