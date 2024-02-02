import Button from 'shared/components/atoms/Button';
import Input from 'shared/components/atoms/Input';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import ToggleButton from 'shared/components/atoms/ToggleButton';
import Tag from 'shared/components/atoms/Tag';
import Toast from 'shared/components/atoms/Toast';
import Text from 'shared/components/atoms/Text';
import ImageButton from 'shared/components/molecules/ImageButton';
import HubSuggestion from 'shared/components/molecules/HubSuggetion';
import Sectiontag from 'shared/components/molecules/Sectiontag';
import MyspaceCard from 'shared/components/molecules/MyspaceCard';
import RecommendedCard from 'shared/components/molecules/RecommendedCard';
import EnableDiscovery from 'shared/components/molecules/EnableDiscovery';
import { toast } from 'react-toastify';
import FollowSuggestion from 'shared/components/molecules/FollowSuggestion';
import StreamFollowCard from 'shared/components/molecules/StreamFollowCard';
import TopicContentCard from 'shared/components/molecules/TopicContentCard';
import ExpertCard from 'shared/components/molecules/ExpertCard';
import HubCard from 'shared/components/molecules/HubCard';
import ToggleCreateOption from 'shared/components/molecules/ToggleCreateOption';
import CardCarousel from 'shared/components/Organism/CardCarousel'
export default async function Index() {
  const handleClick = () => {
    console.log('clicked');
    toast.success('Successfully clicked');
  };
  return (
    <div>
      <h1 className="text-3xl">This is Homepage</h1>
      {/* <Button /> */}
      <Button label="Follow" style={'primary'} />
      <Input hint="Enter you text" style={'default'} />
      <PopupCategory category="web development" />
      <ToggleButton />
      <Tag label="Follow" />
      <Toast onClick={handleClick} label={'Howdy Modi'} />
      <Text label={'Schedule Hub'} style={'create-text3'} />
      <ImageButton img={'/google.png'} style={'text-black'} />
      <HubSuggestion />
      <Sectiontag />
      <MyspaceCard img1={'/man.jpg'} img2={'/man.jpg'} img3={'/man.jpg'} />
      <RecommendedCard img={'/s1.avif'} img1={'/man.jpg'} />
      <EnableDiscovery />
      <FollowSuggestion />
      <StreamFollowCard name={'Rajat Kumar'} />
      <TopicContentCard />
      <ExpertCard />
      <HubCard />
      <ToggleCreateOption
        optionTitle={'Everyone'}
        optionDesc={'Anyone can send you Hub join request'}
      />
      <CardCarousel child={<TopicContentCard/>}/>
    </div>
  );
}
