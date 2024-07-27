import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import { advisoryFilters, subAdvisoryItems } from "@/constants";
const products = [
  {
    id: 1,
    name: 'Dr. Phan Van Chi',
    type: 'doctor',
    imageSrc: '/41.-Phan-Văn-Chí-scaled.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: 'Dr. Vo Trieu Dat',
    type: 'doctor',
    imageSrc: '/dr-vo-trieu-dat.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nguyen Thanh Nam',
    type: 'doctor',
    imageSrc: '/BS_Nguyen_Thanh_Nam.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: 'Dr. Hong Gam',
    type: 'doctor',
    imageSrc: '/bs-hong-gam.png',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: 'Giang oi',
    href: 'blogger',
    imageSrc: '/Giang-Oi.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
]
const Advisory = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SidebarOption
        title="Advisory"
        contentHeading="List"
        filterInfo={{
          subCategories: subAdvisoryItems,
          filterList: advisoryFilters
        }}
      >
         <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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

export default Advisory;