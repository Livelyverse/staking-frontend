import styles from '../../styles/dashboard/dashboard.module.css';
import React, { FC, useEffect } from 'react';
import Header from '../../components/home/Header';
import infoIcon from '../../public/images/icons/info-icon.svg';
import Image from 'next/image';
import Tabs from '../../components/dashboard/Tabs';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
};

const Dashboard: FC<Props> = ({ children }: Props) => {
  const routerHook = useRouter();
  const { route } = useRouter();

  // initial load
  useEffect(() => {
    if (route == '/dashboard' || route == '/dashboard/') routerHook.push('/dashboard/staking-plan');
  }, []);

  return (
    <div
      className={`flex-col-start-center bg-blackRussian w-full
            h-full min-h-screen py-5 px-5 ${styles['dashboard-container']}`}
    >
      {/* Header Component */}
      <Header borderRadius={'8px'} colorBg={'#21242B'} padding={'10px 21px'} />

      {/* Tabs Component */}
      <Tabs />

      {/* Dashboard Content */}
      <div
        className={`flex-col-start w-full
            h-full py-6 px-6 mt-4 rounded-lg ${styles['content-container']}`}
      >
        {/* Title Section ? (for detail myPlan page) */}
        {/* <div className={`flex-row-between w-full ${styles['title']}`}>
          <h3 className={`text-desert-storm font-popins-m`}>Staking Plan</h3>

          <button className={`flex-row-center py-3 px-3 rounded-lg text-white ${styles['guide-modal']}`}>
            <Image style={{ marginRight: '8px' }} src={infoIcon} alt="information icon" />
            Guide
          </button>
        </div> */}

        {children}
      </div>
    </div>
  );
};

export default Dashboard;
