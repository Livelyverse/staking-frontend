import styles from '../../styles/home/marketPlace.module.css';
import marketPlaceImg from '../../public/images/pictures/Dapp/market-place.svg';
import Image from 'next/image';

const MarketPlace = () => {
  return (
    <div className={`w-full flex justify-between items-start sm:max-lg:justify-center sm:max-lg:items-center sm:max-lg:flex-col-reverse ${styles['market-container']}`}>
      <div className={`flex-col-start sm:max-lg:w-full sm:max-lg:justify-start sm:max-lg:items-start ${styles['staking-des']}`}>
        <h3 className={`${styles['staking-title']} font-popins-m text-white-smoke`}>Market place</h3>

        <p className={`${styles['staking-text']} font-popins-l mt-3 max-w-lg`}>
          Empowering the blockchain industry by giving life to projects through marketing & investmentsEmpowering the blockchain industry by
          giving life to projects through the blockchain industry by giving life to
        </p>

        <button
          className={`flex-row-center font-popins-l 
          bg-purple-white  text-white mt-12 rounded-lg
        ${styles['dapp-btn']}`}
        >
          Lunch dapp &#62;
        </button>
      </div>

      <div className={`${styles['img-container']} rounded-2xl sm:max-lg:mb-10`}>
        <Image className={`rounded-2xl`} src={marketPlaceImg} alt="market place" />
      </div>
    </div>
  );
};

export default MarketPlace;
