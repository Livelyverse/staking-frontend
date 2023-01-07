import { FC } from 'react';
import Dashboard from '../../dashboard';
import StakingPlanInfo from '../../../components/dashboard/staking-plan-page/staking-plan-info';
import StakingPlanCards from '../../../components/dashboard/staking-plan-page/staking-plan-cards';
import { aPlanCard, SecondPlanCard, ThirdPlanCard } from '../../../mocks/page-staking-plans/staking-plan-cards';

const StakingPlan: FC = () => {
  return (
    <Dashboard>
      {/*<div className={`text-white`}>Staking Plan Page</div>*/}
      <StakingPlanInfo
        airdrops={[
          {
            title: 'Total Airdrop',
            total: 150000000,
            currencyCode: 'LVL',
          },
          {
            title: 'Total Airdrop',
            total: 150000000,
            currencyCode: 'LVL',
          },
          {
            title: 'Total Airdrop',
            total: 150000000,
            currencyCode: 'LVL',
          },
        ]}
      ></StakingPlanInfo>
      <StakingPlanCards cards={[aPlanCard, SecondPlanCard, ThirdPlanCard]}></StakingPlanCards>
    </Dashboard>
  );
};

export default StakingPlan;
