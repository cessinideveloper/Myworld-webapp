import AccountSettings from 'shared/components/molecules/AccountSettings';
import ManageProfile from 'shared/components/molecules/ManageProfile';
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
    content: 'This is tab content 1',
  },
  {
    id: 2,
    content: 'You clicked on tab 2',
  },
  {
    id: 3,
    content: 'welcome to tab 3 content',
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
