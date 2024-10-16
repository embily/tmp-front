
export interface TASK {
  name: string;
  icon?: string;
  reward: number;
  completed: boolean;
  kind?: string;
  value?: boolean;
}

export enum REWARD_TYPES {
  COINS = 'coins',
  CLOTHING = 'clothing'
}

export interface REWARD {
  name: string;
  icon: string | null;
  amount: number;
  completed: boolean;
  type: REWARD_TYPES;
}

