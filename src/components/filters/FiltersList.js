const FiltersList = [
  {
    title: "Categories",
    type: "checkbox",
    isDefaultExpand: true,
    list: [
      {
        label: "Masks",
        count: 301,
        list: [
          {
            label: "N95",
            count: 101,
          },
          {
            label: "W95",
            count: 100,
          },
          {
            label: "Cloth Mask",
            count: 100,
          },
        ],
      },
      {
        label: "Boost Your Immunity",
        count: 55,
      },
      {
        label: "Pulse Oximeter",
        count: 50,
      },
      {
        label: "Thermometer",
        count: 55,
      },
    ],
  },
  {
    title: "Brands",
    type: "checkbox",
    isDefaultExpand: false,
    list: [
      {
        label: "Brand A",
        count: 100,
      },
      {
        label: "Brand B",
        count: 130,
      },
      {
        label: "Brand C",
        count: 104,
      },
      {
        label: "Brand D",
        count: 110,
      },
      {
        label: "Brand E",
        count: 204,
      },
    ],
  },
  {
    title: "Product Form",
    type: "checkbox",
    isDefaultExpand: true,
    list: [
      {
        label: "Masks",
        count: 301,
      },
      {
        label: "N95",
        count: 101,
      },
      {
        label: "W95",
        count: 100,
      },
      {
        label: "Cloth Mask",
        count: 100,
      },
      {
        label: "Boost Your Immunity",
        count: 55,
      },
      {
        label: "Pulse Oximeter",
        count: 50,
      },
      {
        label: "Thermometer",
        count: 55,
      },
    ],
  },
  {
    title: "Price",
    type: "range",
    isDefaultExpand: true,
    min: 0,
    max: 100,
    prefix: "₹",
  },
];

export default FiltersList;
