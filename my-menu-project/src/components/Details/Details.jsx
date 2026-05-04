import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Details.module.css'
import { useState } from 'react';

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

                </section>
            </div>
        </>
    );
};
