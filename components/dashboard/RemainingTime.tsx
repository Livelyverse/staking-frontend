import { FC } from 'react';
import styles from '../../styles/dashboard/remainingTime.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const RemainingTime: FC = () => {
  return (
    <div style={{ marginRight: '65px' }} className={`flex-row-center w-auto`}>
      {/* remaining time slider section */}

      <CountdownCircleTimer size={65} strokeWidth={5}  isPlaying duration={7} colors={'#AD9412'}>
         {({ remainingTime }) => (<p className={`${styles['remaining-time-text']}`}>{remainingTime} Day</p>) }
      </CountdownCircleTimer>

      {/* title & value section */}
      <div className={`flex-col-start w-100 ml-4`}>
        <p className={`${styles['plan-capacity-text']} font-popins-l text-stormGray mb-2`}>Plan capacity</p>
        <p className={`${styles['plan-capacity-text']} font-popins-l text-white`}>250,000LVL</p>
      </div>
    </div>
  );
};

export default RemainingTime;
