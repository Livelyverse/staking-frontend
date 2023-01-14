import { StaticImageData } from 'next/image';

export interface IStackingPlanCurrencyInfo {
  title: string;
  total: number;
  currencyCode: string;
}

export type TStakingPlanCurrenciesInfo = { airdrops: IStackingPlanCurrencyInfo[] };

export interface IStackingPlanCard {
  title: string;
  description: string;
  badgeIcon: StaticImageData;
  lockTime: string;
  TVL: number;
  APY: number;
  Expiration: string;
  Amount?: number;
  scaleImage: number;
}

export type TStakingPlanCards = { cards: IStackingPlanCard[] };
