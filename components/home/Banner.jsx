import styles from '../../styles/home/banner.module.css';
import bannerNft from '../../public/images/pictures/nft-banner.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles['banner-container']}>
      {/* lively club section */}
      <div className={styles['lively-club']}>
        <h3>decentralized applications</h3>

        <p>Lively vers dapp</p>
      </div>

      {/* banner bg section */}
      <div className={styles['banner-bg']}>
        <span>
          <Image style={{ objectFit: 'cover' }} src={bannerNft} />
        </span>
      </div>
    </div>
  );
};

export default Banner;
