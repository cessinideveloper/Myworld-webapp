import React from 'react';
import Text from 'shared/components/atoms/Text';
import FollowSuggestion from 'shared/components/molecules/FollowSuggestion';
import HubSuggetion from 'shared/components/molecules/HubSuggetion';
const Suggestion = () => {
  return (
    <div className=" border w-1/4 p-2 rounded-xl">
      <Text label="Voice You may follow" style="signup heading" />
      <FollowSuggestion />
      <FollowSuggestion />
      <FollowSuggestion />
      <HubSuggetion />
    </div>
  );
};

export default Suggestion;
