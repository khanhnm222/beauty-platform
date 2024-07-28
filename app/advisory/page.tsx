import SidebarOption from "@/components/features/sidebar-option/sidebar-options";
import { advisoryFilters, subAdvisoryItems } from "@/constants";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Hannah Olala',
    type: 'beautyblogger',
    imageSrc: '/hana_olala.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: 'Dr. Phan Van Chi',
    type: 'doctor',
    imageSrc: '/41.-Phan-Văn-Chí-scaled.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Suppermodel Bui Quynh Hoa',
    type: 'model',
    imageSrc: '/vietnamese-model.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: 'Dr. Vo Trieu Dat',
    type: 'doctor',
    imageSrc: '/dr-vo-trieu-dat.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    name: 'Nguyen Thanh Nam',
    type: 'doctor',
    imageSrc: '/BS_Nguyen_Thanh_Nam.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 6,
    name: 'Dr. Hong Gam',
    type: 'doctor',
    imageSrc: '/bs-hong-gam.png',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 7,
    name: 'Giang oi',
    type: 'blogger',
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
        affiliateType={3}
      >
         <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      width={150}
                      height={256}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 hover:text-primary uppercase items-center font-bold">
                        <button>
                          <span aria-hidden="true" className="absolute inset-0 font-bold uppercase" />
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