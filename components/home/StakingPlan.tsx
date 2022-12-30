import Image from 'next/image';
import styles from '../../styles/home/stakingPlan.module.css';
import stakingPlan from '../../public/images/pictures/Dapp/staking-plan.svg';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import PolicyModal from './PolicyModal';
import { useRouter } from 'next/router';

const StakingPlan = () => {
  const forceUpdate = useForceUpdate();

  // next router
  const router = useRouter();

  // state for privacy policy
  const [privacyPolicy, setPrivacyPolicy] = useState<string | null>();

  // state for show modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // function for close modal
  const closeModal = () => {
    setShowModal(false);

    forceUpdate();
  };

  // initial load page
  useEffect(() => {
    let policy = localStorage.getItem('privacyPolicy');

    setPrivacyPolicy(policy);
  }, []);

  // function for lunch staking
  const lunchStaking = (): void => {
    privacyPolicy == null ? setShowModal(true) : router.push('/dashboard');
  };

  return (
    <div className={`w-full flex justify-between items-start mb-40 ${styles['staking-container']}`}>
      <div className={`${styles['img-container']} rounded-2xl`}>
        <Image className={`rounded-2xl`} src={stakingPlan} alt="staking plan" />
      </div>

      <div className={`flex-col-start ${styles['staking-des']}`}>
        <h3 className={`${styles['staking-title']} font-popins-m text-white-smoke`}>Stacking plan</h3>

        <p className={`${styles['staking-text']} font-popins-l mt-3 max-w-lg`}>
          Empowering the blockchain industry by giving life to projects through marketing & investmentsEmpowering the blockchain industry by
          giving life to projects through the blockchain industry by giving life to{' '}
        </p>

        <button
          onClick={() => lunchStaking()}
          className={`flex-row-center font-popins-l 
          bg-purple-white  text-white mt-12 rounded-lg
        ${styles['dapp-btn']}`}
        >
          Lunch dapp &#62;
        </button>
      </div>

      {/* Modal For Terms of use and Privacy Policy */}
      <PolicyModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default StakingPlan;
