import styles from '../../styles/dashboard/planCapacity.module.css';

const PlanCapacity = () => {
  return (
    <div style={{ marginRight: '65px' }} className={`flex-row-center w-auto`}>
      {/* water flow slider section */}
      <div className={`relative flex-row-center ${styles['water-circle-slider-bg']} rounded-full bg-white`}>
        <p className={`absolute bottom-4 font-popins-l ${styles['capacity-percentage']}`}>67%</p>
        <div className={`${styles['water-circle-slider-content']}`}></div>
      </div>

      {/* title & value section */}
      <div className={`flex-col-start w-100 ml-4`}>
        <p className={`${styles['plan-capacity-text']} font-popins-l text-stormGray mb-2`}>Plan capacity</p>
        <p className={`${styles['plan-capacity-text']} font-popins-l text-white`}>250,000LVL</p>
      </div>
    </div>
  );
};

export default PlanCapacity;
