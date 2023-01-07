import Image from 'next/image';
import styles from '../../../styles/dashboard/myPlansHeaderInfo.module.scss';
import FirstBadge from '../../../public/images/pictures/dashboard/FirstBadge.png';

const MyPlansHeaderInfo = () => {
  return (
    <div className={styles['my-plans-header-info']}>
      {/* first section*/}
      <div className={styles['plan-title-description']}>
        <h4>Plan 1</h4>
        <p>Golden plan high profitability</p>
      </div>

      <div className={styles['time-indicator']}>
        <div>
          <span>180</span>
          <span>DAYS</span>
        </div>
        <div>
          <span>60</span>
          <span>HOURS</span>
        </div>
        <div>
          <span>60</span>
          <span>MINUTES</span>
        </div>
        <div>
          <span>60</span>
          <span>SECONDS</span>
        </div>
      </div>

      <div className={styles['status-indicator']}>
        <span></span>
        <span>Active</span>
      </div>

      <Image src={FirstBadge} alt={'image'} style={{ scale: '0.46' }} />
    </div>
  );
};

export default MyPlansHeaderInfo;
