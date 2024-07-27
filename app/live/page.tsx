import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import LiveCard from "@/components/features/live-card/live-card";
import { liveFilters, subLiveItems } from '@/constants';

const Live = () => {
  const liveList = [
    {
      name: 'Skincare: Dr. Gam',
      avatar: './bs-hong-gam.png',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      name: 'Makeup',
      avatar: 'Giang-Oi.jpg',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      name: 'Doctor An',
      avatar: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      name: 'Ms Dat',
      avatar: 'dr-vo-trieu-dat.jpg',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      name: 'Phan Van Chi',
      avatar: '41.-Phan-Văn-Chí-scaled.jpg',
      memberCount: '1',
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
        <div className="mb-10 sm:mb-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
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