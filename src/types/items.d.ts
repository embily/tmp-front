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
  collection?: number;
  energyBonus?: number;
  id?: number;
  incomeBonus?: number;
  pointsBonusHourlyRate?: number;
  pointsHourlyRate?: number;
  price?: number;
  tapBonus?: number;
}

export interface PROFILE_TYPE {
  dressed: ITEM_TYPE[]
}

export const websocketRarityToItemRarity: {[string]: RARITY_TYPES} = {
  'Common': RARITY_TYPES.COMMON,
  'Uncommon': RARITY_TYPES.UNCOMMON,
  'Rare': RARITY_TYPES.RARE,
  'Epic': RARITY_TYPES.EPIC,
  'Leg': RARITY_TYPES.LEGENDARY,
  'Mythic': RARITY_TYPES.MYTHIC,
}

export const websocketTypeToItemType: {[string]: ITEMS_TYPES} = {
  '1': ITEMS_TYPES.HEADDRESS,
  '2': ITEMS_TYPES.OUTERWEAR,
  '3': ITEMS_TYPES.PANTS,
  '4': ITEMS_TYPES.SHOES,
  '5': ITEMS_TYPES.WEAPON,
}
