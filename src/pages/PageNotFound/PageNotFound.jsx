import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.message}>Page was not found!</div>
      </div>
    </>
  );
};

export default PageNotFound;