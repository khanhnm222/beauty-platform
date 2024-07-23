import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import { categoryFilters, subCategoriesItems } from "@/constants";

const Categories = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SidebarOption
        title="Categories"
        contentHeading="List"
        filterInfo={{
          subCategories: subCategoriesItems,
          filterList: categoryFilters
        }}
      >
        <div>This is my categories page</div>
      </SidebarOption>
    </main>
  );
};

export default Categories;