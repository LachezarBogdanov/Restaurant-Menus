import styles from './DetailsMeal.module.css'

export default function DetailsMeal() {
    return (
        <>
            <div className={styles.meal}>
                <img src="avocadoToast.webp" alt="asd" />
                <h3>Авокадо тост</h3>
                <div className={styles.mealPriceAndAdd}>
                    <p className={styles.mealPrice}>11.50 eur.</p>
                    <span className={styles.add}>+</span>
                </div>
            </div>
        </>
    );
};
