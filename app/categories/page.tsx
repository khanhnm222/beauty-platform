import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import { categoryFilters, subCategoriesItems } from "@/constants";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Makeup',
    type: 'makeup',
    imageSrc: '/makup-1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: 'Skincare',
    type: 'skincare',
    imageSrc: '/skincare.webp',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Yoga',
    type: 'yoga',
    imageSrc: '/yoga.webp',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: 'Cardio',
    type: 'cardio',
    imageSrc: '/cardio.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    name: 'Tattoo',
    type: 'tattoo',
    imageSrc: '/tattoo.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 6,
    name: 'Personal Color',
    type: 'personalcolor',
    imageSrc: '/personal_color.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
]
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
        affiliateType={2}
      >
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 max-h-80">
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      width={150}
                      height={256}
                      className="w-full object-cover object-center lg:h-full lg:w-full md:h-[400px] sm:h-[400px]"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 hover:text-primary uppercase items-center bold">
                        <button>
                          <span aria-hidden="true" className="absolute inset-0 uppercase" />
                          {product.name}
                        </button>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarOption>
    </main>
  );
};

export default Categories;