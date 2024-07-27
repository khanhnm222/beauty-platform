'use client';

import { useState } from 'react'
import FilterSection from './filter-section';
import FilterDraw from './filter-draw';
import FilterMenu from './filter-menu';
import { FilterItem, SubCategories } from '@/types/filter.type';

interface SidebarOptionProps {
  children: React.ReactNode;
  title: string;
  contentHeading: string;
  filterInfo: {
    subCategories: SubCategories[];
    filterList: FilterItem[];
  }
  affiliateType?: number;
};
export default function SidebarOption({children, title, contentHeading, filterInfo, affiliateType}: SidebarOptionProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white w-full">
      <div>
        {/* Mobile filter dialog */}
        <FilterDraw
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          subCategories={filterInfo.subCategories}
          filters={filterInfo.filterList}
        />

        <div className="mx-auto max-w-6xl">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="md:text-4xl lg:text-4xl sm:text-2xl mr-4 font-bold tracking-tight text-primary">{title}</h1>

            <FilterMenu setMobileFiltersOpen={setMobileFiltersOpen}/>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              {contentHeading}
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <FilterSection
                subCategories={filterInfo.subCategories}
                filters={filterInfo.filterList}
                affiliateType={affiliateType || 1}
              />

              {/* Product grid */}
              <div className="lg:col-span-3">
                {children}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}