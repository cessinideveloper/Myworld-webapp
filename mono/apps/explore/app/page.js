import Header from 'shared/components/molecules/Header';
import Input from 'shared/components/atoms/Input';
import MainSlider from 'shared/components/Organism/MainSlider';
import CardCarousel from 'shared/components/Organism/CardCarousel';
import DoubleCard from 'shared/components/molecules/DoubleCard';
import SectionTag from 'shared/components/molecules/Sectiontag';
import TopicContentCard from 'shared/components/molecules/TopicContentCard';
import MyspaceCard from 'shared/components/molecules/MyspaceCard';
import ExpertCard from 'shared/components/molecules/ExpertCard';
import RecommendedCard from 'shared/components/molecules/RecommendedCard';
import Sidebar from 'shared/components/Organism/Sidebar';
import pic1 from 'shared/assets/ExploreDummyData/profilepic.jpg';
import pic2 from 'shared/assets/ExploreDummyData/profilepic2.jpg';
import reel1 from 'shared/assets/ExploreDummyData/reel1.jpg';

export default async function Index() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex flex-col w-[90vw] ml-[10vw] overflow-y-hidden gap-10 mb-10">
        <div className="flex w-full px-5 py-5">
          <div className="w-[10%]">
            <Header styleName={'signup heading'} headerName={'Explore'} />
          </div>
          <div className="w-[80%]">
            <Input style={'explore'} hint="Search Rooms, Experts..." />
          </div>
          <div className="w-[10%]">For Icons</div>
        </div>
        <div>
          <MainSlider />
        </div>
        <div className="px-20 w-full space-y-9">
          <div>
            <CardCarousel child={<DoubleCard img1={pic1} img2={pic2}/>} />
          </div>
          <div className='space-y-5'>
            <SectionTag tagTitle={'Holo_Layla'} num={223} numType={'view'}/>
            <CardCarousel child={<TopicContentCard img={reel1}/>} />
          </div>
          <div className='space-y-5'>
            <SectionTag tagTitle={'Upcoming mySpace'} num={123} numType={'follow'}/>
            <CardCarousel child={<MyspaceCard img1={pic1} img2={pic2} img3={pic1}/>} />
          </div>
          <div className='space-y-5'>
            <SectionTag tagTitle={'Top Experts'} num={123} numType={'follow'}/>
            <CardCarousel child={<ExpertCard imgSrc={pic1}/>} />
          </div>
          <div className='space-y-5'>
            <SectionTag tagTitle={'Made for you'} num={123} numType={'video'}/>
            <CardCarousel child={<RecommendedCard img={reel1} img1={pic1}/>} />
          </div>
        </div>
      </div>
    </div>
  );
}
