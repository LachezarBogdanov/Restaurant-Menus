import styles from './Home.module.css'

export default function Home() {
  return (
    <>
        <div className="head">
            <img src='/home.jpg' alt="asd" className={styles.homeImg} />
            <div className={styles.overlay}></div>
        </div>
        <div className={styles.cards}></div>
    </>
  );
};
