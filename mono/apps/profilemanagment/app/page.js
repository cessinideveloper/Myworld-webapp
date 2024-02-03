import TabLayout from 'shared/components/Organism/TabLayout';
import Input from 'shared/components/atoms/Input';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Dropdown from 'shared/components/atoms/dropdown';
import { profileTabsData, profileTabContent } from 'shared/model/TabLayoutData';
import AccountSettings from 'shared/components/molecules/AccountSettings';
export default async function Index() {
  return (
    <div>
      <Text style="dropdown-text" label="Profile Managment" />
      <div className="w-[60%] py-10">
        <TabLayout
          tabs={profileTabsData}
          tabContent={profileTabContent}
          flexStyle={'flex-row gap-20'}
          flexStyle1={'flex-col'}
        />
      </div>
    </div>
  );
}
