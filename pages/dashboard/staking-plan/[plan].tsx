import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import chevronDown from '../../../public/images/icons/dropdown-chevron-down.svg';
import PlanDetailInfo from '../../../components/dashboard/PlanDetailInfo';
import PlanDetailTitle from '../../../components/dashboard/PlanDetailTitle';
import Header from '../../../components/home/Header';
import styles from '../../../styles/dashboard/plan.module.css';
import Image from 'next/image';

const VerticalBarChart = dynamic(() => import('../../../components/dashboard/charts/VerticalBarChart'), {
  ssr: false,
});

const AreaChart = dynamic(() => import('../../../components/dashboard/charts/AreaChart'), {
  ssr: false,
});

const Plan: FC = () => {
  const forceUpdate = useForceUpdate();
  const router = useRouter();

  // plan name
  const { plan } = router.query;

  // state for open dropdown
  const [isOpen, setIsOpen] = useState(false);

  // staet for value of type nfts model
  const [chartType, setChartType] = useState('Area chart');

  // state for change chart time
  const [chartTime, setChartTime] = useState('H');

  // function for select type of filter
  function selectItemHandle(value: string) {
    // set value of selectbox

    setChartType((prev) => {
      prev = value;
      forceUpdate();
      return prev;
    });

    // close dropdown
    setIsOpen(false);
  }

  return (
    <div
      className={`flex-col-start-center bg-blackRussian w-full relative
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
      <div className={`flex-row-start w-full h-auto mt-4  ${styles['charts-container']}`}>
        {/* charts section */}
        <div className={`flex-col-start px-6 py-6 mr-4 relative ${styles['chart-box']}`}>
          {/* chart box header */}
          <h3 className={`text-white font-popins-l ${styles['header']}`}>Staking chart</h3>
          {/* chart box inputs */}
          <div className={`flex-row-between w-full ${styles['chart-box-inputs']}`}>
            {/*  Select Box Input */}
            <div
              style={isOpen ? { maxHeight: '1000px', height: 'auto', top: '68px' } : { maxHeight: '56px', height: '56px', top: '68px' }}
              className={`${styles['select-box']}`}
            >
              <div style={isOpen ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} className={styles['checvron-down']}>
                <Image src={chevronDown} alt={'chevron down'} />
              </div>

              <input
                style={
                  isOpen
                    ? {
                        borderRadius: '8px 8px 0px 0px',
                        borderBottom: '1px solid #575757',
                      }
                    : { borderRadius: '8px', borderBottom: 'none' }
                }
                onClick={() =>
                  setIsOpen((prev) => {
                    prev = !prev;
                    forceUpdate();
                    return prev;
                  })
                }
                readOnly
                placeholder="Select Chart Type"
                value={chartType}
                type={'text'}
              />

              <div className={styles['items']}>
                <p style={{ borderBottom: '1px solid #575757' }} onClick={() => selectItemHandle('Area chart')}>
                  Area chart
                </p>

                <p style={{ borderBottom: '1px solid #575757' }} onClick={() => selectItemHandle('Vertical Bar chart')}>
                  Vertical Bar chart
                </p>
              </div>
            </div>

            {/* Time Buttons */}
            <div style={{ top: '68px' }} className="flex-row-start absolute right-6">
              <button
                style={chartTime == 'M' ? { backgroundColor: '#2E323C', color: '#dbdbdb' } : {}}
                onClick={() => setChartTime('M')}
                className={`flex-row-center font-popins-l text-gray34 ${styles['time-btn']} bg-blackRussian px-4 py-4 rounded-lg border border-solid border-lightShadeGray mr-2`}
              >
                1M
              </button>
              <button
                style={chartTime == 'H' ? { backgroundColor: '#2E323C', color: '#dbdbdb' } : {}}
                onClick={() => setChartTime('H')}
                className={`flex-row-center font-popins-l text-gray34 ${styles['time-btn']} bg-blackRussian px-4 py-4 rounded-lg border border-solid border-lightShadeGray mr-2`}
              >
                1H
              </button>
              <button
                style={chartTime == 'S' ? { backgroundColor: '#2E323C', color: '#dbdbdb' } : {}}
                onClick={() => setChartTime('S')}
                className={`flex-row-center font-popins-l text-gray34 ${styles['time-btn']} bg-blackRussian px-4 py-4 rounded-lg border border-solid border-lightShadeGray`}
              >
                1S
              </button>
            </div>
          </div>

          {/* Vertical Bar Chart */}
          {chartType == 'Vertical Bar chart' && <VerticalBarChart />}
          {/* Area Chart */}
          {chartType == 'Area chart' && <AreaChart />}
        </div>

        {/* general data section */}
        <PlanDetailInfo />
      </div>
    </div>
  );
};

export default Plan;
