import { FC } from 'react';
import styles from '../../styles/dashboard/planDetailInfo.module.css';

const PlanDetailInfo: FC = () => {
  return (
    <div className={`flex-col-start w-auto h-auto px-6 py-6 rounded-lg ${styles['info-container']}`}>
      <h3 className={`font-popins-m text-white mb-6 ${styles['info-title']}`}>Data General</h3>
      <div className={`flex-col-start w-full ${styles['info-box']}`}>
        {/* info item box */}
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Expiration</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
        <div className={`flex-col-start w-full mb-4 ${styles['info-item']}`}>
            <p className={`font-popins-l ${styles['info-item-title']}`}>Current value token</p>
            <p className={`font-popins-l ${styles['info-item-value']}`}>25/10/2022</p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailInfo;
