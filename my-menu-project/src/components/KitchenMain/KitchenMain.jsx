import AsideMenu from '../AsideMenu/AsideMenu';
import KitchenPageFooter from '../KitchenPageFooter/KitchenPageFooter';
import styles from './KitchenMain.module.css'

export default function KitchenMain() {
    return (
        <>
            <AsideMenu />

            <div className={styles.wrapper}>
                <section className={styles.heading}>
                    <h1>Брънч</h1>
                    <p className={styles.p}>Перфектният старт на деня</p>
                    <p className={styles.clock}><i class="fa-regular fa-clock"></i> 10:00 - 16:00</p>
                </section>

                <h2 className={styles.selectedMeal}>Препоръчани ястия</h2>

                <section className={styles.products}>
                    <div className={styles.product}>
                        <div className={styles.productHeader}>
                            <img className={styles.picture} src="eggs.jpg" alt="eggsBenedict" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Яйца Бенедикт</h3>
                            <p className={styles.description}>
                                Поширани яйца, холандски сос, спанак, английски мъфин
                            </p>
                            <p className={styles.price}>8.57 eur.</p>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productHeader}>
                            <img className={styles.picture} src="eggs.jpg" alt="eggsBenedict" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Яйца Бенедикт</h3>
                            <p className={styles.description}>
                                Поширани яйца, холандски сос, спанак, английски мъфин
                            </p>
                            <p className={styles.price}>8.57 eur.</p>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productHeader}>
                            <img className={styles.picture} src="eggs.jpg" alt="eggsBenedict" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Яйца Бенедикт</h3>
                            <p className={styles.description}>
                                Поширани яйца, холандски сос, спанак, английски мъфин
                            </p>
                            <p className={styles.price}>8.57 eur.</p>
                        </div>
                    </div>
                     <div className={styles.product}>
                        <div className={styles.productHeader}>
                            <img className={styles.picture} src="eggs.jpg" alt="eggsBenedict" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Яйца Бенедикт</h3>
                            <p className={styles.description}>
                                Поширани яйца, холандски сос, спанак, английски мъфин
                            </p>
                            <p className={styles.price}>8.57 eur.</p>
                        </div>
                    </div>
                </section>

                <KitchenPageFooter />
            </div>
        </>
    );
};
