import Input from 'shared/components/atoms/Input';
import Livestream from 'shared/components/Organism/Livestream';

import Sidebar from 'shared/components/Organism/Sidebar';
import Suggestion from 'shared/components/Organism/Suggestion';
import SignUp from 'shared/components/Organism/SignUp';
import Header from 'shared/components/molecules/Header';

export default async function Index() {
  return (
    <div className="relative">
      <div className=" fixed left-0 top-0 h-full ">
        <Sidebar
          img={'/logo.jpg'}
          img1={'/Homeactive.svg'}
          img1Alt={'/Homeinactive.svg'}
          img2={'/ic_create.svg'}
          img3={'/inactive_explore.svg'}
          img3Alt={'/ic_active_explore.svg'}
          img4={'/ic_inactivechat.svg'}
          img4Alt={'/ic_activechat.svg'}
          img5={'/ic_user_defolt_avator.svg'}
          img6={'/inactive_explore.svg'}
          img6Alt={'/ic_active_explore.svg'}
          img7={'/ic_more_option.svg'}
        />
      </div>
      <div className=" absolute left-[7vw] top-0 p-4">
        <Header headerName={'Home'} styleName={'signup heading'}/>
        <Livestream />
      </div>
      <div
        className=" absolute right-0 top-3 w-[25vw] flex flex-wrap gap-6 border-l mr-3 pl-3
      "
      >
        <Input hint="Enter you text" style={'home'} />
        <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
        <Suggestion name={'Rajat Kumar'} imgSrc={'/i2.jpg'} />
      </div>
    </div>
  );
}
