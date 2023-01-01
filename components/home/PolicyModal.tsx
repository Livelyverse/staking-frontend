import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../../styles/home/policyModal.module.css';
import checkBox from '../../public/images/icons/inputs/checkBox.svg';
import activeCheckBox from '../../public/images/icons/inputs/activeCheckBox.svg';
import { useRouter } from 'next/router';

const PolicyModal = (props: any) => {
  const { showModal, closeModal } = props;

  // next router
  const router = useRouter();

  // states for terms of use
  const [policy, setPolicy] = useState(false);

  // useEffesct for remove body scroll
  useEffect(() => {
    const body = document.getElementsByTagName('BODY') as HTMLCollectionOf<HTMLElement>;

    if (showModal) {
      body[0].style.overflow = 'hidden';
    } else {
      body[0].style.overflow = 'auto';
    }
  }, [showModal]);

  // function for confirmed privacy and policies
  const confirmedPolicy = (): void => {
    // store privacy and policies in local storage
    localStorage.setItem('privacyPolicy', policy.toString());

    // close modal
    closeModal();

    // lunch staking
    router.push('/dashboard');
  };

  return (
    <>
      <div
        id="nft-model"
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        style={showModal ? { opacity: 1, zIndex: 20 } : { opacity: 0, zIndex: -1 }}
        className={`w-full h-full ${styles['background-modal']}`}
      />

      <div
        style={showModal ? { opacity: 1, zIndex: 50 } : { opacity: 0, zIndex: -1 }}
        className={`flex-col-start ${styles['modal-content']}`}
      >
        <div className={`flex-row-start w-full mb-8`}>
          {policy ? (
            <Image onClick={() => setPolicy((prev) => !prev)} className={`cursor-pointer`} src={activeCheckBox} alt={'active-checkbox'} />
          ) : (
            <Image onClick={() => setPolicy((prev) => !prev)} className={`cursor-pointer`} src={checkBox} alt={'checkbox'} />
          )}

          <p className={`font-roboto-r text-mischka ml-3 ${styles['policy-text']}`}>
            I have read and agree to livelyverse
            <span className={`font-roboto-r text-white border-solid border-b-2`}> Terms of Use </span>
            <br />
            and
            <span className={`font-roboto-r text-white border-solid border-b-2`}> Privacy Policy</span>.
          </p>
        </div>
        <div className={`flex-row-start relative w-full mb-6`}>
          <span className={styles['dot']} />
          <p className={`ml-3 font-roboto-r text-LightGray ${styles['policy-des']}`}>
            Empowering the blockchain industry by giving life to projects through marketing & investmentsEmpowering the blockchain
          </p>
        </div>
        <button
          onClick={() => confirmedPolicy()}
          disabled={!policy}
          style={policy ? { opacity: 1 } : { opacity: 0.32 }}
          className={`flex-row-center w-20 font-roboto-r
        h-10 bg-purple-dark rounded-lg text-desert-storm`}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default PolicyModal;
