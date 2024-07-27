import { FilterItem, SubCategories } from "@/types/filter.type";

const advisoryFilters = [
  {
    id: 'gender',
    name: 'Gender',
    options: [
      { value: 'Male', label: 'Male', checked: false },
      { value: 'Female', label: 'Female', checked: false },
    ],
  },
  // {
  //   id: 'status',
  //   name: 'Status',
  //   options: [
  //     { value: 'Online', label: 'Online', checked: false },
  //     { value: 'Offline', label: 'Offline', checked: false },
  //   ],
  // },
  {
    id: 'location',
    name: 'Location',
    options: [
      { value: 'hcm', label: 'TP. Hồ Chí Minh', checked: false },
      { value: 'hn', label: 'TP. Hà Nội', checked: false },
      { value: 'dn', label: 'TP. Đà Nẵng', checked: false },
      { value: 'nt', label: 'TP. Nha Trang', checked: false },
      { value: 'ct', label: 'TP. Cần Thơ', checked: false },
    ],
  },
] as FilterItem[];

const subAdvisoryItems = [
  { name: 'Doctor', type: 'doctor' },
  { name: 'Model', type: 'model' },
  { name: 'Blogger', type: 'blogger' },
  { name: 'Trainer', type: 'trainer' },
] as SubCategories[];

export {
  advisoryFilters,
  subAdvisoryItems,
}