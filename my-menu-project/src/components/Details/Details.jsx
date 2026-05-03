import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Details.module.css'

export default function Details() {
    return (
        <>
            <BurgerMenu />

            <div className={styles.allWrap}>
                <section className={styles.detailsHeader}>
                    <h2>Ocean View</h2>
                </section>
            </div>
        </>
    );
};
