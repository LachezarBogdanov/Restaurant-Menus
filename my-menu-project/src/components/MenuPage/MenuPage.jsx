import { useEffect, useState } from 'react';
import AsideMenu from '../AsideMenu/AsideMenu';
import KitchenPageFooter from '../KitchenPageFooter/KitchenPageFooter';
import styles from './MenuPage.module.css'
import Products from '../Products/Products';
import { useLocation } from 'react-router-dom';

import { kitchenData, barData } from '../../menuConfig';

export default function MenuPage() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const currentConfig = path === 'bar' ? barData : kitchenData;

    const [selectedCategory, setSelectedCategory] = useState(currentConfig.categories[0].name);

    useEffect(() => {
        setSelectedCategory(currentConfig.categories[0].name);
    }, [currentConfig]);

    const activeCategoryData = currentConfig.details[selectedCategory];

    return (
        <>
            <AsideMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className={styles.wrapper}>
                <section
                    className={styles.heading}
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.3)),
                            url(${activeCategoryData.bannerImg})
                        `,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <h1>{selectedCategory}</h1>
                    <p className={styles.p}>{activeCategoryData.description}</p>
                    <p className={styles.clock}><i class="fa-regular fa-clock"></i>
                        {activeCategoryData.workingTime}
                    </p>
                </section>

                <h2 className={styles.selectedMeal}>{path === 'bar' ? 'Препоръчани напитки' : 'Препоръчани ястия'}</h2>

                <section className={styles.products}>
                    <Products products={activeCategoryData.products} />
                </section>

                <KitchenPageFooter />
            </div>
        </>
    );
};
