import styles from './KitchenPageFooter.module.css'

export default function KitchenPageFooter() {
    return (
        <>
            <section className={styles.pageFooter}>
                <div className={styles.footerCard}>
                    <div className={styles.aboveIcon}>
                        <i class="fa-solid fa-leaf"></i>
                    </div>
                    <div className={styles.specials}>
                        <h4>Свежи продукти</h4>
                        <p>Всеки ден</p>
                    </div>
                </div>
                <div className={styles.footerCard}>
                    <div className={styles.aboveIcon}>
                        <i class="fa-solid fa-hat-cowboy-side"></i>
                    </div>
                    <div className={styles.specials}>
                        <h4>Шеф препоръчва</h4>
                        <p>Специални предложения</p>
                    </div>
                </div>
                <div className={styles.footerCard}>
                    <div className={styles.aboveIcon}>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div className={styles.specials}>
                        <h4>Любими на клиентите</h4>
                        <p>Топ селекция</p>
                    </div>
                </div>
            </section>
        </>
    );
};
