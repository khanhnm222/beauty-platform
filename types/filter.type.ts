export interface SubCategories {
  name: string;
  href: string;
};

export interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
};

export interface FilterItem {
  id: string | number;
  name: string;
  options: FilterOption[];
};