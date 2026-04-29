import styles from './AsideMenu.module.css'

export default function AsideMenu() {
    return (
        <>
            <aside>
                <section className={styles.header}>
                    <h1>Ocean View</h1>
                </section>
                <section className={styles.choose}>
                    <h3><i class="fa-solid fa-bacon"></i> Брънч</h3>
                    <h3><i class="fa-solid fa-bowl-food"></i> Основно</h3>
                    <h3><i class="fa-solid fa-plate-wheat"></i> Леко меню</h3>
                    <h3><i class="fa-solid fa-filter"></i> Premium Selection</h3>
                    <h3><i class="fa-solid fa-bowl-rice"></i>Поке Бол</h3>
                </section>
                <section className={styles.workingTime}>
                    <div className={styles.icon}>
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className={styles.info}>
                        <h3>Работно време</h3>
                        <p>Поке бол</p>
                        <h4>10:00 - 22:30</h4>
                    </div>
                </section>
                <section className={styles.icons}>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-discord"></i>
                </section>
            </aside>
        </>
    );
};
