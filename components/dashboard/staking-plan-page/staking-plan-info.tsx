import { TStakingPlanCurrenciesInfo } from '../../../types/pages/dashboard/staking-plan-cards';
import styles from '../../../styles/dashboard/stakingPlanPage.module.scss';

const stakingPlanInfo = (props: TStakingPlanCurrenciesInfo) => {
  return (
    <div className={styles['staking-plan-page-info']}>
      {props.airdrops.map((item, index) => {
        return (
          <div key={index} className={styles['staking-plan-page-info-card']}>
            <span>{item.title}:</span>
            <span>{item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            <span>({item.currencyCode})</span>
          </div>
        );
      })}
    </div>
  );
};

export default stakingPlanInfo;
