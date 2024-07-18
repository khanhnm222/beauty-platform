import SidebarOption from "@/components/features/sidebar-option/sidebar-options";

const Categories = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SidebarOption title="Categories" contentHeading="List">
        <div>This is my categories page</div>
      </SidebarOption>
    </main>
  );
};

export default Categories;