import { IStackingPlanCard } from '../../types/pages/dashboard/staking-plan-cards';
import FirstBadge from '../../public/images/pictures/dashboard/FirstBadge.png';
import SecondBadge from '../../public/images/pictures/dashboard/SecondBadge.png';
import ThirdBadge from '../../public/images/pictures/dashboard/ThirdBadge.png';

export const aPlanCard: IStackingPlanCard = {
  APY: 20,
  lockTime: '6 Month',
  TVL: 900000000,
  Expiration: '25/10/2022',
  Amount: 100000,
  badgeIcon: FirstBadge,
  title: 'Plan 1',
  description: 'Golden plan High profitability',
  scaleImage: 0.55,
};

export const SecondPlanCard: IStackingPlanCard = {
  APY: 20,
  lockTime: '6 Month',
  TVL: 900000000,
  Expiration: '25/10/2022',
  Amount: 100000,
  badgeIcon: SecondBadge,
  title: 'Plan 2',
  description: 'Golden plan High profitability',
  scaleImage: 0.6,
};

export const ThirdPlanCard: IStackingPlanCard = {
  APY: 20,
  lockTime: '6 Month',
  TVL: 900000000,
  Expiration: '25/10/2022',
  Amount: 100000,
  badgeIcon: ThirdBadge,
  title: 'Plan 2',
  description: 'Golden plan High profitability',
  scaleImage: 0.9,
};
