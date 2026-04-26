import { useState } from 'react';
import styles from './BurgerMenu.module.css'


export default function BurgerMenu() {

    const [isActive, setIsActive] = useState(false);

  return (
    <>
        <button className={styles.burger} id={styles.burger} onClick={() => setIsActive(prev => !prev)}>
            ☰
        </button>

        <nav className={`${styles.menu} ${isActive ? styles.active : ''}`} id={styles.menu}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
        </nav>
    </>
  );
};
