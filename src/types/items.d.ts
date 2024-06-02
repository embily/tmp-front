export enum ITEMS_TYPES {
  ALL = 'all',
  WEAPON = 'weapon',
  SHOES = 'shoes',
  PANTS = 'pants',
  OUTERWEAR = 'outerwear',
  HEADDRESS = 'headdress',
}

export interface ITEM_TYPE {
  id: number,
  icon: string,
  image: string,
  type: ITEMS_TYPES
}

export interface PROFILE_TYPE {
  dressed: ITEM_TYPE[]
}
