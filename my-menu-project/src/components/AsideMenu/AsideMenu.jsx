import { Link, useLocation } from 'react-router-dom';
import styles from './AsideMenu.module.css'

export default function AsideMenu({
    selectedCategory,
    setSelectedCategory
}) {
    const location = useLocation();

    const path = location.pathname.split('/')[1];

    
    const kitchenCategorie = [
        { name: 'Брънч', icon: 'fa-bacon' },
        { name: 'Основно', icon: 'fa-bowl-food' },
        { name: 'Леко меню', icon: 'fa-plate-wheat' },
        { name: 'Premium Selection', icon: 'fa-filter' },
        { name: 'Поке Бол', icon: 'fa-bowl-rice' }
    ];
    
    const barCategorie = [
        { name: 'Топли напитки', icon: 'fa-coffee' },
        { name: 'Безалкохолни напитки', icon: 'fa-wine-bottle' },
        { name: 'Алкохолни напитки', icon: 'fa-glass-martini' },
        { name: 'Mocktails', icon: 'fa-cocktail' },
    ];

    const desertCategorie = [
        { name: 'Торти и Тартове', icon: 'fa-cake-candles' },
        { name: 'Сладоледени изкушения', icon: 'fa-ice-cream' },
        { name: 'Традиционни десерти', icon: 'fa-cookie-bite' },
        { name: 'Здравословни сладки', icon: 'fa-leaf' }
    ];
    
    let currentCategories = [];

    if (path === 'bar') {
        currentCategories = barCategorie;
    } else if (path === 'deserts') {
        currentCategories = desertCategorie;
    } else {
        currentCategories = kitchenCategorie;
    }
    return (
        <>
            <aside>
                <section className={styles.header}>
                    <Link className={styles.titleHead} to={'/'}>Ocean View</Link>
                </section>
                <section className={styles.choose}>
                    {currentCategories.map((cat) => (
                        <h3
                            key={cat.name}
                            className={selectedCategory === cat.name ? styles.active : ''}
                            onClick={() => setSelectedCategory(cat.name)}
                        >
                            <i className={`fa-solid ${cat.icon}`}></i> {cat.name}
                        </h3>
                    ))}
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
