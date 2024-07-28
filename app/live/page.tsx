import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import LiveCard from "@/components/features/live-card/live-card";
import { liveFilters, subLiveItems } from '@/constants';

const Live = () => {
  const liveList = [
    {
      id: 'skinacre_dr_gam',
      name: 'Skincare: Dr. Gam',
      avatar: './bs-hong-gam.png',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      id: 'makeup_giang_oi',
      name: 'Makeup',
      avatar: 'Giang-Oi.jpg',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      id: 'suppermodel_bui_quynh_hoa',
      name: 'Bui Quynh Hoa',
      avatar: 'vietnamese-model.jpg',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      id: 'doctor_dat',
      name: 'Ms Dat',
      avatar: 'dr-vo-trieu-dat.jpg',
      memberCount: '1',
      onlineCount: '1',
    },
    {
      id: 'doctor_pahn_van_chi',
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
        affiliateType={1}
      >
        <div className="mb-10 sm:mb-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {liveList.map((live, index) => (
              <LiveCard
                key={index}
                id={live.id}
                name={live.name}
                avatar={live.avatar}
                memberCount={live.memberCount}
                onlineCount={live.onlineCount}
              />
            )
          )}
        </div>
      </SidebarOption>
    </main>
  );
};

export default Live;