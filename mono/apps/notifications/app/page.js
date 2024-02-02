import Sidebar from 'shared/components/Organism/Sidebar';
export default async function Index() {
  return (
    <div>
      {/* <p>This is from practice page</p>
      <EnterConversation /> */}
      <div className=" fixed left-0 top-0 h-full z-[-1]">
        <Sidebar />
      </div>
    </div>
  );
}
