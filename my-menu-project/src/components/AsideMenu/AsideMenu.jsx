import { Link } from 'react-router-dom';
import styles from './AsideMenu.module.css'

export default function AsideMenu({
    selectedCategory,
    setSelectedCategory
}) {

    const categories = [
        { name: 'Брънч', icon: 'fa-bacon' },
        { name: 'Основно', icon: 'fa-bowl-food' },
        { name: 'Леко меню', icon: 'fa-plate-wheat' },
        { name: 'Premium Selection', icon: 'fa-filter' },
        { name: 'Поке Бол', icon: 'fa-bowl-rice' }
    ];

    return (
        <>
            <aside>
                <section className={styles.header}>
                    <Link className={styles.titleHead} to={'/'}>Ocean View</Link>
                </section>
                <section className={styles.choose}>
                    { categories.map((cat) => (
                        <h3
                            key={cat.name}
                            className={selectedCategory === cat.name ? styles.active : ''}
                            onClick={() => setSelectedCategory(cat.name)}
                        >
                            <i className={`fa-solid ${cat.icon}`}></i> {cat.name}
                        </h3>
                    )) }
                </section>
                <section className={styles.workingTime}>
                    <div className={styles.icon}>
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className={styles.info}>
                        <h3>Работно време</h3>
                        <p>Всеки ден</p>
                        <h4>10:00 - 00:00</h4>
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
