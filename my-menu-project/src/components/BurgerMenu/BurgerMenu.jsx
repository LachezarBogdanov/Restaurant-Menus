import { useState } from 'react';
import styles from './BurgerMenu.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function BurgerMenu() {

    const [isActive, setIsActive] = useState(false);

  return (
    <>

        <div
            className={`${styles.overlay} ${isActive ? styles.show : ''}`}
            onClick={() => setIsActive(false)}
        />

        <button className={styles.burger} id={styles.burger} onClick={() => setIsActive(prev => !prev)}>
            ☰
        </button>

                <nav className={`${styles.menu} ${isActive ? styles.active : ''}`} id={styles.menu}>
                    <div className={styles.wrapp}>
                        <h2>Menu</h2>
                        <div className={styles.close} onClick={() => setIsActive(false)}><FontAwesomeIcon icon={faXmark} /></div>
                    </div>
                    <a href="#">Кухня</a>
                    <a href="#">Бар</a>
                    <a href="#">Десерти</a>
                </nav>
    </>
  );
};
