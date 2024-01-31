import Button from 'shared/components/atoms/Button';
import Tag from 'shared/components/atoms/Tag';
import Toast from 'shared/components/atoms/Toast';
import Text from 'shared/components/atoms/Text';
import { toast } from 'react-toastify';

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
      <Tag label="Follow" />
      <Toast onClick={handleClick} label={'Howdy Modi'} />

      <Text label={'Schedule Hub'} style={'create-text3'} />
    </div>
  );
}
