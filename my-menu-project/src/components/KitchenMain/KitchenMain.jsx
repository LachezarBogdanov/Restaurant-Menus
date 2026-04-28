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
            </div>
        </>
    );
};
