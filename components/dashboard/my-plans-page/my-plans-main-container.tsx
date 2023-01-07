import MyPlansHeaderInfo from '../../../components/dashboard/my-plans-page/my-plans-header-info';
import styles from '../../../styles/dashboard/myPlansMainContainer.module.scss';

const MyPlansMainContainer = () => {
  return (
    <main className={styles['my-plans-main-container']}>
      {/* container header */}
      <MyPlansHeaderInfo></MyPlansHeaderInfo>
    </main>
  );
};

export default MyPlansMainContainer;
