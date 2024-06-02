import {ITEM_TYPE, ITEMS_TYPES, PROFILE_TYPE} from "../types/items.d";

export const profileMock: PROFILE_TYPE =  {
  dressed: [
    {
      id: 2,
      icon: '/img/weapon/2.svg',
      image: '/img/weapon/2.svg',
      type: ITEMS_TYPES.WEAPON
    },
    {
      id: 3,
      icon: '/img/shoes/1.svg',
      image: '/img/shoes/1.svg',
      type: ITEMS_TYPES.SHOES
    },
    {
      id: 4,
      icon: '/img/pants/1.svg',
      image: '/img/pants/1.svg',
      type: ITEMS_TYPES.PANTS
    },
    {
      id: 5,
      icon: '/img/outerwear/1.svg',
      image: '/img/outerwear/1.svg',
      type: ITEMS_TYPES.OUTERWEAR
    },
    {
      id: 9,
      icon: '/img/headdress/2.svg',
      image: '/img/headdress/2.svg',
      type: ITEMS_TYPES.HEADDRESS
    }
  ]
}

export const typesList: ITEMS_TYPES[] = [
  ITEMS_TYPES.WEAPON,
  ITEMS_TYPES.SHOES,
  ITEMS_TYPES.PANTS,
  ITEMS_TYPES.OUTERWEAR,
  ITEMS_TYPES.HEADDRESS,
]

export const itemsMock: ITEM_TYPE[] =  [
  {
    id: 1,
    icon: '/img/items/weapon/1.svg',
    image: '/img/items/weapon/1.svg',
    type: ITEMS_TYPES.WEAPON
  },
  {
    id: 2,
    icon: '/img/items/weapon/2.svg',
    image: '/img/items/weapon/2.svg',
    type: ITEMS_TYPES.WEAPON
  },
  {
    id: 3,
    icon: '/img/items/shoes/1.svg',
    image: '/img/items/shoes/1.svg',
    type: ITEMS_TYPES.SHOES
  },
  {
    id: 4,
    icon: '/img/items/pants/1.svg',
    image: '/img/items/pants/1.svg',
    type: ITEMS_TYPES.PANTS
  },
  {
    id: 5,
    icon: '/img/items/outerwear/1.svg',
    image: '/img/items/outerwear/1.svg',
    type: ITEMS_TYPES.OUTERWEAR
  },
  {
    id: 6,
    icon: '/img/items/outerwear/2.svg',
    image: '/img/items/outerwear/2.svg',
    type: ITEMS_TYPES.OUTERWEAR
  },
  {
    id: 7,
    icon: '/img/items/outerwear/3.svg',
    image: '/img/items/outerwear/3.svg',
    type: ITEMS_TYPES.OUTERWEAR
  },
  {
    id: 8,
    icon: '/img/items/headdress/1.svg',
    image: '/img/items/headdress/1.svg',
    type: ITEMS_TYPES.HEADDRESS
  },
  {
    id: 9,
    icon: '/img/items/headdress/2.svg',
    image: '/img/items/headdress/2.svg',
    type: ITEMS_TYPES.HEADDRESS
  },
];
