export const initialItems = [
  {
    id: new Date().getTime(),
    name: "good mood",
    packed: true,
  },
  {
    id: new Date().getTime() + 1,
    name: "passport",
    packed: false,
  },
  {
    id: new Date().getTime() + 2,
    name: "phone charger",
    packed: false,
  },
];

export const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];
