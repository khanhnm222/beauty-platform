import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import LiveCard from "@/components/features/live-card/live-card";
import { liveFilters, subLiveItems } from '@/constants';

const Live = () => {
  const liveList = [
    {
      name: 'Cuisine',
      avatar: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      memberCount: '55',
      onlineCount: '22',
    },
    {
      name: 'Art',
      avatar: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
      memberCount: '135',
      onlineCount: '50',
    },
    {
      name: 'Doctor An',
      avatar: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      memberCount: '30',
      onlineCount: '22',
    },
    {
      name: 'Ms Kim',
      avatar: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      name: 'Hoang Minh Hung',
      avatar: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      memberCount: '2',
      onlineCount: '1',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SidebarOption
        title="Live"
        contentHeading="List"
        filterInfo={{
          subCategories: subLiveItems,
          filterList: liveFilters
        }}
      >
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {liveList.map((live, index) => (
              <LiveCard key={index} name={live.name} avatar={live.avatar} memberCount={live.memberCount} onlineCount={live.onlineCount} />
            )
          )}
        </div>
      </SidebarOption>
    </main>
  );
};

export default Live;