import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import PlanDetailInfo from '../../../components/dashboard/PlanDetailInfo';
import PlanDetailTitle from '../../../components/dashboard/PlanDetailTitle';
import Header from '../../../components/home/Header';
import styles from '../../../styles/dashboard/plan.module.css';

const Plan: FC = () => {
  const router = useRouter();

  // plan name
  const { plan } = router.query;

  return (
    <div
      className={`flex-col-start-center bg-blackRussian w-full
      h-full min-h-screen py-5 px-5
   ${'plan-container'}`}
    >
      {/* Header Component */}
      <Header borderRadius={'8px'} colorBg={'#21242B'} padding={'10px 21px'} />

      {/* Route map */}
      <div className={`w-full flex-row-start px-6 my-4  ${styles['route']}`}>
        <p>Plans / {plan}</p>
      </div>

      {/* Plan Detail Title */}
      <PlanDetailTitle planTitle={plan} />

      {/* staking chart & general data  */}
      <div className={`flex-row-start w-full h-auto mt-4 ${styles['charts-container']}`}>
        {/* charts section */}
        <div className={`flex-col-start mr-4 ${styles['chart-box']}`}></div>

        {/* general data section */}
        <PlanDetailInfo />
      </div>
    </div>
  );
};

export default Plan;
