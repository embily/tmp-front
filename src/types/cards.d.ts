export enum CARD_TYPES {
  BUILDING = 'building',
  WORKERS = 'workers',
  ARMY = 'army',
  EVENTS = 'events',
}

export interface CARD {
  name: string;
  description: string;
  level: number;
  profitPerHour: number;
  price: number;
  image: string;
  type: CARDS_TYPES;
}

