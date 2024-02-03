import UserProfile from 'shared/components/molecules/UserProfile';
export const tabsData = [
    {
        id: 1,
        data: "tab1"
    },
    {
        id: 2,
        data: "tab2"
    },
    {
        id: 3,
        data: "tab3"
    }
]

export const tabsContent = [
    {
        id: 1,
        content: "This is tab 1"
    },
    {
        id: 2,
        content: "You clicked on tab 2"
    },
    {
        id: 3,
        content: "welcome to tab 3 content"
    },
]

export const searchTabData = [
    {
        id: 1,
        data: "Room"
    },
    {
        id: 2,
        data: "Video"
    },
    {
        id: 3,
        data: "Creator"
    }
]
export const searchTabContent = [
    {
        id: 1,
        content: [
            <UserProfile key={1} label1={'rahul rj'} label2={'Rahul RJ'} />,
            <UserProfile key={2} label1={'tarun kumar'} label2={'Tarun Kumar'} />,
            <UserProfile key={3} label1={'riya roy'} label2={'Roiya Roy'} />
        ]  
      },
    {
        id: 2,
        content: [
            <UserProfile key={1} label1={'user1'} label2={'User 1'} />,
            <UserProfile key={2} label1={'user2'} label2={'User 2'} />,
            <UserProfile key={3} label1={'user3'} label2={'User 3'} />
        ]     },
    {
        id: 3,
        content: [
            <UserProfile key={1} label1={'profile1'} label2={'Profile 1'} />,
            <UserProfile key={2} label1={'profile2'} label2={'Profile 2'} />,
            <UserProfile key={3} label1={'profile3'} label2={'Profile 3'} />
        ]     },
]