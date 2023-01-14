import Image from 'next/image';
import { FC } from 'react';
import styles from '../../styles/dashboard/planDetailTitle.module.css';
import PlanCapacity from './PlanCapacity';
import RemainingTime from './RemainingTime';
import goldenPlan from '../../public/images/icons/plan-icons/golden-plan-icon.svg';

type Props = {
  planTitle: string | string[] | undefined;
};

const PlanDetailTitle: FC<Props> = ({ planTitle }: Props) => {
  return (
    <div className={`flex-row-between ${styles['title-container']} rounded-lg w-full px-6 py-5`}>
      {/* Title Section */}
      <div className={`${styles['title']}`}>
        <h3 className={`mb-3 font-popins-l`}>{planTitle}</h3>
        <p className={`${styles['des']} font-popins-l`}>Golden plan High profitability</p>
      </div>

      {/* ramaining titme && plan capacity section */}
      <div className={`flex-row-center`}>
        <RemainingTime />
        <PlanCapacity />

        <span className={`${styles['plan-icon-section']}`}>
          <Image src={goldenPlan} alt={'plan icon'} />
        </span>
      </div>
    </div>
  );
};

export default PlanDetailTitle;
