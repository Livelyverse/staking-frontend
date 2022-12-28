import styles from '../styles/home/Home.module.css';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Banner from '../components/home/Banner';
import StakingPlan from '../components/home/StakingPlan';
import MarketPlace from '../components/home/MarketPlace';

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      {/* header component */}
      <Header />
      {/* Banner Component */}
      <Banner />

      {/* Dapp Components */}
      <div className={`container-col ${styles['dapp']}`}>
        {/* Staking Section Component */}
        <StakingPlan />

        {/* Market Place Section Component */}
        <MarketPlace />
      </div>

      {/* Footer component */}
      <Footer marginTop={'0'} />
    </div>
  );
}
