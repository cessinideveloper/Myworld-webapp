import Input from 'shared/components/atoms/Input';
import Livestream from 'shared/components/Organism/Livestream';
import Sidebar from 'shared/components/Organism/Sidebar';
import Suggestion from 'shared/components/Organism/Suggestion';
import SignUp from 'shared/components/Organism/SignUp';
import Header from 'shared/components/molecules/Header';
import PopUp from 'shared/components/Organism/PopUp';
export default async function Index() {
  return (
    <div className="relative">
      {/* <h1 className="text-3xl">This is Homepage</h1>
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
      <FollowSuggestion label1={'User'} label2={'User Profession'} gap={"gap-5"} />
      <StreamFollowCard name={'Rajat Kumar'} />
      <TopicContentCard />
      <ExpertCard />
      <HubCard />
      <ToggleCreateOption
        optionTitle={'Everyone'}
        optionDesc={'Anyone can send you Hub join request'}
      />

      <Caresoul child={<TopicContentCard />} />
      <Livestream /> */}
      <div className="z-[100]">
        <PopUp />
      </div>
      <div className=" fixed left-0 top-0 h-full z-[-1]">
        <Sidebar />
      </div>
      <div className=" absolute left-[7vw] top-0 p-4  z-[-1]">
        <Header headerName={'Home'} styleName={'signup heading'} />
        <Livestream />
      </div>
      <div
        className=" absolute right-0 top-3 w-[25vw] flex flex-wrap gap-6 border-l mr-3 pl-3  z-[-1]
      "
      >
        <Input hint="Enter you text" style={'home'} />
        <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
        <Suggestion name={'Rajat Kumar'} imgSrc={'/i2.jpg'} />
      </div>
    </div>
  );
}
