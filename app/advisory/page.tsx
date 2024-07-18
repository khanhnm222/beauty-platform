import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import { filters, subCategories } from "@/constants";

const Advisory = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SidebarOption
        title="Advisory"
        contentHeading="List"
        filterInfo={{
          subCategories: subCategories,
          filterList: filters
        }}
      >
        This is a advisory page
      </SidebarOption>
    </main>
  );
};

export default Advisory;