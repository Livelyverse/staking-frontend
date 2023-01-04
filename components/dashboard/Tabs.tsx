import { FC, useEffect, useState } from 'react';
import styles from '../../styles/dashboard/tabs.module.css';
import myPlans from '../../public/images/icons/myPlans.svg';
import activeMyPlans from '../../public/images/icons/active-myPlans.svg';
import activeStakignPlan from '../../public/images/icons/active-stakingPlan.svg';
import stakignPlan from '../../public/images/icons/stakingPlan.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Tabs: FC = () => {
  const routerHook = useRouter();
  const { route } = useRouter();

  return (
    <div className={`flex-row-start mt-9 ${styles['tabs-container']}`}>
      <button
        onClick={() => routerHook.push('/dashboard/staking-plan')}
        style={route == '/dashboard/staking-plan' ? { color: 'white' , borderBottom : "3px solid #FFCC00" } : {}}
        className={`flex-row-center pb-3 mr-9 font-popins-l text-stormGray ${styles['staking-btn']}`}
      >
        {route == '/dashboard/staking-plan' ? (
          <Image className="mr-2" src={activeStakignPlan} alt={'staking plan button'} />
        ) : (
          <Image className="mr-2" src={stakignPlan} alt={'staking plan button'} />
        )}
        Staking Plan
      </button>

      <button
        onClick={() => routerHook.push('/dashboard/my-plans')}
        style={route == '/dashboard/my-plans' ? { color: 'white' , borderBottom : "3px solid #FFCC00" } : {}}
        className={`flex-row-center font-popins-l pb-3 text-stormGray ${styles['staking-btn']}`}
      >
        {route == '/dashboard/my-plans' ? (
          <Image className="mr-2" src={activeMyPlans} alt={'my plans button'} />
        ) : (
          <Image className="mr-2" src={myPlans} alt={'my plans button'} />
        )}
        My plans
      </button>
    </div>
  );
};

export default Tabs;
