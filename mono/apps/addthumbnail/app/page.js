import Image from 'next/image';
import Input from 'shared/components/atoms/Input';
import Text from 'shared/components/atoms/Text';
import Sidebar from 'shared/components/Organism/Sidebar';
import EnableDiscovery from 'shared/components/molecules/EnableDiscovery';
import ImageButton from 'shared/components/molecules/ImageButton';
export default async function Index() {
  return (
    <div className="relative pb-10">
      <div className=" fixed left-0 top-0 h-full z-[-1] w-[7vw]">
        <Sidebar />
      </div>
      <div className="w-[93vw] absolute right-0 top-0 flex flex-col gap-10">
        {/* header */}
        <div className=" flex gap-10 items-center px-10 pt-5">
          <Input hint="search" style={'addthumbnail'} />
          <Image
            src={'/plus.svg'}
            alt="plus"
            width={20}
            height={20}
            className=" w-7 h-7 border border-gray-300 rounded-full"
          />
          <Image
            src={'/ic_user_defolt_avator.svg'}
            alt="plus"
            width={20}
            height={20}
            className="w-7 h-7"
          />
        </div>
        {/* body */}
        <div className=" w-[80%] border-r pl-10 flex items-center justify-center gap-10">
          <div className=" bg-gray-100 h-[70vh] rounded-3xl p-5 flex justify-center items-center text-center w-[40%]">
            <Text label="Drag and drop or click to upload" />
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            {/* <Text label='' style='create1 room'/> */}
            <Input style={'thumbnail-text'} hint="Add Title" />
            <Input style={'thumbnail-text'} hint="Add Title" />
            <Input style={'thumbnail-text'} hint="Add Title" />
            <EnableDiscovery />
          </div>
        </div>
        {/* footer */}
        <div className="w-[80%] pl-16">
          <ImageButton text={'Add your own thumbnail'} />
        </div>
      </div>
    </div>
  );
}
