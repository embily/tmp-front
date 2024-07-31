export enum USER_TYPES {
  SLAVE = 'slave',
  FARMER = 'farmer',
  BARON = 'baron',
  LORD = 'lord',
}

export interface FRIEND {
  name: string;
  type: USER_TYPES;
  balance: number;
  profitPerHour: number;
  avatar: string;
}

