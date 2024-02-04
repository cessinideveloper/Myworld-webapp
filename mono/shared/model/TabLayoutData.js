import AccountSettings from 'shared/components/molecules/AccountSettings';
import ManageProfile from 'shared/components/molecules/ManageProfile';
import UserProfile from 'shared/components/molecules/UserProfile';
import HubCard from 'shared/components/molecules/HubCard';
export const tabsData = [
  {
    id: 1,
    data: 'tab1',
  },
  {
    id: 2,
    data: 'tab2',
  },
  {
    id: 3,
    data: 'tab3',
  },
];

export const tabsContent = [
  {
    id: 1,
    content: [<HubCard thumbnail={'/man.jpg'} />],
  },
  {
    id: 2,
    content: [<HubCard thumbnail={'/woman.jpg'} />],
  },
  {
    id: 3,
    content: [<HubCard thumbnail={'/logo.jpg'} />],
  },
];

export const profileTabsData = [
  {
    id: 1,
    data: 'Edit profile',
  },
  {
    id: 2,
    data: 'Account Settings',
  },
  {
    id: 3,
    data: 'Notification',
  },
  {
    id: 4,
    data: 'Security and Logins',
  },
];
export const profileTabContent = [
  {
    id: 1,
    content: [<ManageProfile />],
  },
  {
    id: 2,
    content: [<AccountSettings />],
  },
  {
    id: 3,
    content: ['nothing is here'],
  },
  {
    id: 4,
    content: ['nothing is here'],
  },
];

export const searchTabData = [
  {
    id: 1,
    data: 'Room',
  },
  {
    id: 2,
    data: 'Video',
  },
  {
    id: 3,
    data: 'Creator',
  },
];
export const searchTabContent = [
  {
    id: 1,
    content: [
      <UserProfile key={1} label1={'rahul rj'} label2={'Rahul RJ'} />,
      <UserProfile key={2} label1={'tarun kumar'} label2={'Tarun Kumar'} />,
      <UserProfile key={3} label1={'riya roy'} label2={'Roiya Roy'} />,
    ],
  },
  {
    id: 2,
    content: [
      <UserProfile key={1} label1={'user1'} label2={'User 1'} />,
      <UserProfile key={2} label1={'user2'} label2={'User 2'} />,
      <UserProfile key={3} label1={'user3'} label2={'User 3'} />,
    ],
  },
  {
    id: 3,
    content: [
      <UserProfile key={1} label1={'profile1'} label2={'Profile 1'} />,
      <UserProfile key={2} label1={'profile2'} label2={'Profile 2'} />,
      <UserProfile key={3} label1={'profile3'} label2={'Profile 3'} />,
    ],
  },
];
