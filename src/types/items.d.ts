export enum ITEMS_TYPES {
  ALL = 'all',
  WEAPON = 'weapon',
  SHOES = 'shoes',
  PANTS = 'pants',
  OUTERWEAR = 'outerwear',
  HEADDRESS = 'headdress',
  WOJAK = 'wojak',
}

export enum RARITY_TYPES {
  BASE = 'base',
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
  MYTHIC  = 'mythic '
}

export enum ITEMS_SORT {
  RARITY = 'rarity',
  NOVELTY = 'novelty',
}

export interface ITEM_TYPE {
  icon: string;
  image: string;
  type: ITEMS_TYPES;
  selected?: boolean;
  rarity: RARITY_TYPES;
}

export interface PROFILE_TYPE {
  dressed: ITEM_TYPE[]
}
