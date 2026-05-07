import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Details.module.css'
import { useState } from 'react';
import Footer from '../Footer/Footer';

export default function Details() {

    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <BurgerMenu />

            <div className={styles.allWrap}>
                <section className={styles.detailsHeader}>
                    <h1>Eggs Benedict</h1>
                    <p className={styles.desc}>Opisanie Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, dolores!</p>
                    <div className={styles.more}>
                        <div className={styles.infoMore}>
                            <i class="fa-regular fa-clock"></i>
                            <p className={styles.moreP}>15 мин.</p>
                        </div>
                        <div className={styles.infoMore}>
                            <Link className={styles.macros}><i class="fa-brands fa-nutritionix"></i> Макроси</Link>
                        </div>
                    </div>
                    <h2 className={styles.detailsPrice}>12.90 eur.</h2>
                    <div className={styles.favorites}>
                        <div className={styles.favourite}>
                            <div className={styles.quantity}>
                                <button onClick={() => setQuantity(prev => prev - 1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                            </div>
                            <div className={styles.buttons}>
                                <Link className={styles.cart}><i class="fa-solid fa-cart-arrow-down"></i> Добави в кошницата</Link>
                                <Link className={styles.heart}><i class="fa-regular fa-heart"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>
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
                            <div className={styles.meal}>
                                <img src="PorkRibs.webp" alt="asd" />
                                <h3>Авокадо тост</h3>
                                <div className={styles.mealPriceAndAdd}>
                                    <p className={styles.mealPrice}>11.50 eur.</p>
                                    <span className={styles.add}>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};
