'use client';

import { useState } from 'react'
import FilterSection from './filter-section';
import FilterDraw from './filter-draw';
import FilterMenu from './filter-menu';

interface SidebarOptionProps {
  children: React.ReactNode;
  title: string;
  contentHeading: string;
};
export default function SidebarOption({children, title, contentHeading}: SidebarOptionProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white w-full">
      <div>
        {/* Mobile filter dialog */}
        <FilterDraw mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}/>

        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary">{title}</h1>

            <FilterMenu setMobileFiltersOpen={setMobileFiltersOpen}/>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              {contentHeading}
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <FilterSection />

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