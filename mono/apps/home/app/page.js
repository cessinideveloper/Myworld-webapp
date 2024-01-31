import Button from 'shared/components/atoms/Button';
import Input from 'shared/components/atoms/Input';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import ToggleButton from 'shared/components/atoms/ToggleButton';
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <h1 className="text-3xl">This is Homepage</h1>
      {/* <Button /> */}
      <Button label="Follow" style={'primary'} />
      <Input hint='Enter you text' style={'default'}/>
      <PopupCategory category='web development'/>
      <ToggleButton/>
    </div>
  );
}
