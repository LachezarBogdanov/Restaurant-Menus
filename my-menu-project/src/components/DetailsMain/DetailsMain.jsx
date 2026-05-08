import DetailsMeal from '../DetailsMeal/DetailsMeal';
import styles from './DetailsMain.module.css' 

export default function DetailsMain() {
    return (
        <>
            <section className={styles.detailsMain}>
                <div className={styles.wrap}>
                    <div className={styles.description}>
                        <h2>Описание</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nobis dolores temporibus aperiam quidem magni sunt atque modi pariatur ea!</p>
                        <h2 className={styles.ingridients}>Съставки</h2>
                        <div className={styles.ingCards}>
                            <p className={styles.ingridient}>Яйца</p>
                            <p className={styles.ingridient}>Холандски сос</p>
                            <p className={styles.ingridient}>Спанак</p>
                            <p className={styles.ingridient}>Английски мъфин</p>
                            <p className={styles.ingridient}>Бекон</p>
                        </div>
                        <h2 className={styles.alergens}>Алергени</h2>
                        <div className={styles.alerCards}>
                            <p className={styles.egg}><i class="fa-solid fa-egg"></i> Яйца</p>
                            <p className={styles.milk}><i class="fa-solid fa-blender"></i> Млечни продукти</p>
                            <p className={styles.gluten}><i class="fa-solid fa-leaf"></i> Глутен</p>
                        </div>
                    </div>
                    <div className={styles.meals}>
                        <h2>Препоръчани ястия</h2>
                        <div className={styles.mealsWrapper}>
                            <DetailsMeal />
                            <DetailsMeal />
                            <DetailsMeal />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
