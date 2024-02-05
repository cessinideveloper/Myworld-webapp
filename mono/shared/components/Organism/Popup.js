'use client';
import React, { useState } from 'react';
import Text from 'shared/components/atoms/Text';
import Button from 'shared/components/atoms/Button';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import FollowSuggestion from '../molecules/FollowSuggestion';
import Chiplanguage from 'shared/components/atoms/chiplanguage';
const Popup = () => {
  const technologyarr = [
    'Artificial intelligence & machine learning',
    'Chatgpt',
    'Cloud Computing (AWS)',
    'Agile mage',
    'Web Devlopment',
    'Android Development',
    'AR/VR Reality',
    'Project Google',
  ];

  const healtharr = [
    'Fitness Care Food',
    'Spinal lance care',
    'Face pimple care',
    'Cancer treatment',
    'blood Purification',
    'Hair fall',
  ];

  const row1 = technologyarr.filter(
    (_, idx) => idx < (technologyarr.length - 1) / 2
  );
  const row2 = technologyarr.filter(
    (_, idx) => idx >= (technologyarr.length - 1) / 2
  );
  const row1health = healtharr.filter(
    (_, idx) => idx < (technologyarr.length - 1) / 2
  );
  const row2health = healtharr.filter(
    (_, idx) => idx >= (technologyarr.length - 1) / 2
  );

  const [popup1, setPopup1] = useState(true);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);
  const [currentPopup, setCurrentPopup] = useState('popup1');
  const [Modal, setModal] = useState(true);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedTechCount, setSelectedTechCount] = useState(0);
  const [selectedHealthCount, setSelectedHealthCount] = useState(0);
  const [selectedHealth, setSelectedHealth] = useState([]);
  const handleSelectTech = (item, isChecked) => {
    if (isChecked) {
      setSelectedTech([...selectedTech, item]);
      setSelectedTechCount((prevCount) => prevCount + 1);
    } else {
      setSelectedTech(selectedTech.filter((i) => i !== item));
      setSelectedTechCount((prevCount) => prevCount - 1);
    }
    console.log('Selected Tech Count:', selectedTechCount);
  };
  const handleSelectHealth = (item, isChecked) => {
    if (isChecked) {
      setSelectedHealth([...selectedHealth, item]);
      setSelectedHealthCount((prevCount) => prevCount + 1);
    } else {
      setSelectedHealth(selectedHealth.filter((i) => i !== item));
      setSelectedHealthCount((prevCount) => prevCount - 1);
    }
    console.log('Selected Health Count:', selectedHealthCount);
  };
  console.log('total items selected', selectedTechCount + selectedHealthCount);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const Languages = ['Hindi', 'English', 'Bengali'];

  const handleClick = () => {
    if (popup1) {
      setPopup1(false);
      setPopup2(true);
      setCurrentPopup('popup2');
    } else if (popup2) {
      setPopup2(false);
      setPopup3(true);
      setCurrentPopup('popup3');
    } else if (popup3) {
      setPopup1(false);
      setPopup2(false);
      setPopup3(false);
      setModal(false);
    }
  };
  return (
    <>
      {Modal && (
        <div className=" bg-gray-900 bg-opacity-30  fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="  w-1/2 h-5/6  flex flex-col justify-between  gap-4 bg-white rounded-3xl p-7 z-50">
            {popup1 && (
              <div className="flex flex-col gap-2">
                <Text style="room-text" label="What are you into these day's" />
                <div>
                  <Text
                    style="follow-text2"
                    label="Get your personalized liveroom conversation with best experts,playlist,"
                  />
                  <Text
                    style="follow-text2"
                    label="Please select at least five category"
                  />
                </div>
                {/* chips */}
                {/* Technology */}
                <h3 className="mt-5 text-xl font-bold">Technology</h3>
                <div className="flex flex-col items-start justify-start gap-5 pb-2 mt-3 scroll-x">
                  <div className="flex whitespace-nowrap gap-x-3 gap-y-4">
                    {row1.map((item, index) => (
                      <div
                        onClick={() =>
                          handleSelectTech(item, !selectedTech.includes(item))
                        }
                        key={index}
                      >
                        <PopupCategory category={item} key={index} />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-start whitespace-nowrap gap-x-3 gap-y-4">
                    {row2.map((item, index) => (
                      <div
                        onClick={() =>
                          handleSelectTech(item, !selectedTech.includes(item))
                        }
                        key={index}
                      >
                        <PopupCategory category={item} key={index} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* health */}
                <h3 className="mt-5 text-xl font-bold">Health</h3>
                <div className="flex flex-col items-start justify-start gap-5 pb-2 mt-3 scroll-x">
                  <div className="flex whitespace-nowrap gap-x-3 gap-y-4">
                    {row1health.map((item, index) => (
                      <div
                        onClick={() =>
                          handleSelectHealth(
                            item,
                            !selectedHealth.includes(item)
                          )
                        }
                        key={index}
                      >
                        <PopupCategory category={item} key={index} />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-start whitespace-nowrap gap-x-3 gap-y-4">
                    {row2health.map((item, index) => (
                      <div
                        onClick={() =>
                          handleSelectHealth(
                            item,
                            !selectedHealth.includes(item)
                          )
                        }
                      >
                        <PopupCategory category={item} key={index} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {popup2 && (
              <div className="flex flex-col gap-2">
                <Text style="room-text" label="Choose languages ?" />
                <div>
                  <Text
                    style="follow-text2"
                    label="You will be able to see Room conference call ,People, and trends "
                  />
                  <Text
                    style="follow-text2"
                    label="in any language you choose"
                  />
                </div>
                <Text style="slider-props" label="Technology" />
                <div className="flex gap-4">
                  {Languages.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectCategory(category)}
                    >
                      <Chiplanguage
                        category={category}
                        isSelected={category === selectedCategory}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup3 && (
              <div className="flex flex-col gap-2">
                <Text
                  style="room-text"
                  label="Chose your expertise love to talk?"
                />
                <div>
                  <Text
                    style="follow-text2"
                    label="You\'ll be able to see Room conference call, people, and trends"
                  />
                  <Text
                    style="follow-text2"
                    label="in any language you choose"
                  />
                </div>
                <div className="overflow-y-auto scrollbar h-1/3">
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                </div>
              </div>
            )}

            <Button
              label="Next"
              className="w-full"
              onClick={handleClick}
              disabled={
                (currentPopup === 'popup1' &&
                  selectedTechCount + selectedHealthCount < 5) ||
                (currentPopup === 'popup2' && selectedCategory === null)
              }
              style={
                (currentPopup === 'popup1' &&
                  selectedTechCount + selectedHealthCount < 5) ||
                (currentPopup === 'popup2' && selectedCategory === null)
                  ? 'btnInactive'
                  : 'btnActive'
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
