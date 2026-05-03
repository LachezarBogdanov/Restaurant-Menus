import { useState } from 'react';
import AsideMenu from '../AsideMenu/AsideMenu';
import KitchenPageFooter from '../KitchenPageFooter/KitchenPageFooter';
import styles from './KitchenMain.module.css'
import Products from '../Products/Products';

export default function KitchenMain() {

    const [selectedCategory, setSelectedCategory] = useState('Брънч');

    const categoryDescription = {
        'Брънч': 'Перфектният старт на деня',
        'Основно': 'Вашето Гурме изживяване',
        'Леко меню': 'Свежест във всяка хапка.',
        'Premium Selection': 'Фокус върху качеството (Premium feel)',
    }

    const brunchProducts = [
        {
            name: 'Яйца Бенедикт',
            description: 'Поширани яйца, холандски сос, спанак, английски мъфин',
            price: '9.70 eur.',
            img: 'eggs.jpg'
        },
        {
            name: 'Пухкави палачинки с рикота',
            description: 'Палачинки с рикота, домашно сладко от боровинки, маскарпоне, филирани бадеми',
            price: '8.57 eur.',
            img: 'flufiePancaces.jpg'
        },
        {
            name: 'Сьомга Тарт със Сметанов Мус',
            description: 'Пушена сьомга върху филийка занаятчийски хляб с квас...',
            price: '7.40 eur.',
            img: 'salomonTart.jpg'
        }
    ];

    const mainProducts = [
        {
            name: 'Патешко магре с мед',
            description: 'Сочно патешко филе, поднесено с пюре от тиква, карамелизирани моркови и сос от горски плодове.',
            price: '12.25 eur.',
            img: 'duckyBreast.jpg'
        },
        {
            name: 'Сьомга стейк "Аспержи"',
            description: 'Филе от сьомга на грил, гарнирано с хрупкави аспержи, бейби картофи и лимонов сос с каперси.',
            price: '14.45 eur.',
            img: 'SalmonSteak.jpg'
        },
        {
            name: 'Рибай Стейк (Black Angus)',
            description: 'Крехко говеждо месо с билково масло, печени кореноплодни зеленчуци и сос "Демиглас".',
            price: '9.10 eur.',
            img: 'RibeyeSteak.jpg'
        },
        {
            name: 'Ризото с диви гъби',
            description: 'Микс от манатарки и пачи крак, пармезан, трюфел зехтин и свежа мащерка.',
            price: '9.10 eur.',
            img: 'Risotto.jpg'
        },
        {
            name: 'Свински ребра "BBQ"',
            description: 'Бавно готвени ребра с домашен барбекю сос, поднесени с хрупкави сладки картофи.',
            price: '10.25 eur.',
            img: 'PorkRibs.jpg'
        },
    ];

    const lightProducts = [
        {
            name: 'Свежа салата',
            description: 'Микс зелени салати, чери домати, краставица, лимонов дресинг',
            price: '6.97 eur.',
            img: 'greenSalad.jpg'
        },
        {
            name: 'Салата Цезар',
            description: 'Пилешко филе, айсберг, пармезан, лек цезар сос',
            price: '6.76 eur.',
            img: 'ceaserSalad.jpg'
        },
        {
            name: 'Авокадо тост',
            description: 'Пълнозърнест хляб, авокадо, поширано яйце',
            price: '5.64 eur.',
            img: 'avocadoToast.jpg'
        },
        {
            name: 'Zucchini Noodles',
            description: 'Тиквички, доматен сос, пармезан',
            price: '5.50 eur.',
            img: 'nuddles.jpg'
        }
    ];

    const premiumSelection = [
        {
            name: 'Wagyu Beef Steak',
            description: 'Японско wagyu, трюфел масло, морска сол',
            price: '40.78 eur.',
            img: 'wagyu.jpg'
        },
        {
            name: 'Tomahawk Steak (за 2-ма)',
            description: '800г телешки стек, билково масло',
            price: '45.79 eur.',
            img: 'tomahawk.jpg'
        },
        {
            name: 'Filet Mignon',
            description: 'Телешко бон филе, червен винен сос',
            price: '25.99 eur.',
            img: 'FiletMignon.jpg'
        },
        {
            name: 'Grilled Salmon Deluxe',
            description: 'Сьомга, аспержи, лимонов сос',
            price: '15.95 eur.',
            img: 'GrilledSalmon.jpg'
        },
        {
            name: 'Seared Tuna Steak',
            description: 'Туна, сусам, соев сос',
            price: '16.86 eur.',
            img: 'SearedTunaSteak.jpg'
        },
        {
            name: 'Garlic Butter Shrimp',
            description: 'Скариди, чесън, бяло вино',
            price: '14.45 eur.',
            img: 'GarlicButterShrimp.jpg'
        }
    ];

    return (
        <>
            <AsideMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className={styles.wrapper}>
                <section className={styles.heading}>
                    <h1>{selectedCategory}</h1>
                    <p className={styles.p}>{categoryDescription[selectedCategory]}</p>
                    <p className={styles.clock}><i class="fa-regular fa-clock"></i>
                    {
                     selectedCategory === 'Брънч' ? '10:00 - 16:00':
                     selectedCategory === 'Основно' ? '11:00 - 23:00': 
                     selectedCategory === 'Леко меню' ? '12:00 - 18:00' : 
                     selectedCategory === 'Premium Selection' ? '11:30 - 23:30' : ''
                    }               
                    </p>
                </section>

                <h2 className={styles.selectedMeal}>Препоръчани ястия</h2>

                <section className={styles.products}>
                    <Products products={
                        selectedCategory === 'Брънч' ? brunchProducts:
                        selectedCategory === 'Основно' ? mainProducts : 
                        selectedCategory === 'Леко меню' ? lightProducts: 
                        selectedCategory === 'Premium Selection' ? premiumSelection: ''
                    } />
                </section>

                <KitchenPageFooter />
            </div>
        </>
    );
};
