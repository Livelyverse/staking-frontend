import { FC } from 'react';
import Dashboard from '../../dashboard';
import StakingPlanInfo from '../../../components/dashboard/staking-plan-page/staking-plan-info';
import MyPlansMainContainer from '../../../components/dashboard/my-plans-page/my-plans-main-container';

const MyPlans: FC = () => {
  return (
    <Dashboard>
      {/*<div className={`text-white`}>My Plans Page</div>*/}
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
      <MyPlansMainContainer></MyPlansMainContainer>
    </Dashboard>
  );
};

export default MyPlans;
