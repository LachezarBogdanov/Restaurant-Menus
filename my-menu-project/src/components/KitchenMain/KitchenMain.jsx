import AsideMenu from '../AsideMenu/AsideMenu';
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
                </section>

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
            </div>
        </>
    );
};
