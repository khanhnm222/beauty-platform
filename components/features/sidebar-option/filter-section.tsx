import { FilterItem, SubCategories } from "@/types/filter.type";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import AffiliatePanel from "../affiliate/affiliate";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterSectionProps {
  subCategories?: SubCategories[];
  filters?: FilterItem[];
  affiliateType: number;
};
const FilterSection = ({ subCategories = [], filters = [], affiliateType }: FilterSectionProps) => {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <div role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {subCategories.map((category) => (
          <div key={category.name}>
            <button className=" hover:text-primary">{category.name}</button>
          </div>
        ))}
      </div>

      {filters.map((section: any) => (
        <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option: any, optionIdx: any) => (
                <div key={option.value} className="flex items-center">
                  <Checkbox
                    id={option.value}
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                  />
                  <Label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
      <AffiliatePanel type={affiliateType} />
    </form>
  );
};

export default FilterSection;