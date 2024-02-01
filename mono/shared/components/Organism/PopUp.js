import PopupCategory from '../atoms/PopupCategory';
const PopUp = () => {
  const technologyarr = [
    'Artificial intelligence & machine learning',
    'Chatgpt',
    'Cloud Computing (AWS)',
    'Agile mage',
    'Web Devlopment',
    'Android Development',
    'AR/VR Reality',
    'Project Google',
  ];

  const healtharr = [
    'Fitness Care Food',
    'Spinal lance care',
    'Face pimple care',
    'Cancer treatment',
    'blood Purification',
    'Hair fall',
  ];

  const row1 = technologyarr.filter(
    (_, idx) => idx < (technologyarr.length - 1) / 2
  );
  const row2 = technologyarr.filter(
    (_, idx) => idx >= (technologyarr.length - 1) / 2
  );
  const row1health = healtharr.filter(
    (_, idx) => idx < (technologyarr.length - 1) / 2
  );
  const row2health = healtharr.filter(
    (_, idx) => idx >= (technologyarr.length - 1) / 2
  );

  return (
    <>
      <div className=" w-[500px] py-6 px-5 rounded-3xl shadow-xl ">
        <h1 className="my-4 text-3xl font-bold">
          What are you into these days?
        </h1>
        <p className="font-medium ">
          Get your personalized live room conversations, experts, <br />
          playlist, please select at least 5 category.
        </p>
        <h3 className="mt-5 text-xl font-bold">Technology</h3>
        <div className="flex flex-col items-start justify-start gap-5 pb-2 mt-3 scroll-x">
          <div className="flex whitespace-nowrap gap-x-3 gap-y-4">
            {row1.map((item, index) => (
              <PopupCategory category={item} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-start whitespace-nowrap gap-x-3 gap-y-4">
            {row2.map((item, index) => (
              <PopupCategory category={item} key={index} />
            ))}
          </div>
        </div>
        {/* health */}
        <h3 className="mt-5 text-xl font-bold">Health</h3>
        <div className="flex flex-col items-start justify-start gap-5 pb-2 mt-3 scroll-x">
          <div className="flex whitespace-nowrap gap-x-3 gap-y-4">
            {row1health.map((item, index) => (
              <PopupCategory category={item} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-start whitespace-nowrap gap-x-3 gap-y-4">
            {row2health.map((item, index) => (
              <PopupCategory category={item} key={index} />
            ))}
          </div>
        </div>
        <hr className="my-3 bg-gray-300" />
        <button className="w-full py-4 my-3 font-bold text-gray-400 border-gray-300 rounded-full bg-slate-100 boder-2">
          Next
        </button>
      </div>
    </>
  );
};
export default PopUp;
