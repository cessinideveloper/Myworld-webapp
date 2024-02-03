import Sidebar from 'shared/components/Organism/Sidebar';
import Input from 'shared/components/atoms/Input';
import Header from 'shared/components/molecules/Header';
import threedots from 'shared/assets/three-dots.svg';
import Image from 'next/image';
export default async function Index() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[7vw] flex w-[93vw]">
        <div className="bg-rose-300 w-[35%] h-screen flex flex-col">
          {/* <div>header</div> */}
          <div className='flex justify-between px-5 py-3'>
            <Header headerName={'Messages'} styleName={'room-text'}/>
            <div>
              <Image src={threedots} width={20} height={20} alt='more' className='rotate-90'/>
            </div>
          </div>
          <div className="px-5 py-3">
            <Input hint="Search mentor" />
          </div>
          <div className="bg-blue-300 h-screen">
            Chat List organism will show here
          </div>
        </div>
        <div className="bg-rose-500 w-[65%] h-screen">
          <div className='h-[10%] bg-blue-500 flex justify-between px-5 py-3'>
            <div>image and username</div>
            <div>info icon</div>
          </div>
          <div className='h-[80%] bg-slate-500'>chat area</div>
          <div className='h-[10%] bg-pink-300 flex px-5 py-3'>
            <div>record icon</div>
            <div>video icon</div>
            <Input hint='Say hello...' style={'message'}/>
            <div>Like icon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
