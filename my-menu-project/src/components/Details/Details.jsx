import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Details.module.css'
import Footer from '../Footer/Footer';
import DetailsMeal from '../DetailsMeal/DetailsMeal';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsMain from '../DetailsMain/DetailsMain';

export default function Details() {

    return (
        <>
            <BurgerMenu />
            <div className={styles.allWrap}>
                <Link className={styles.backToMenu} to={'/kitchen'}><i class="fa-solid fa-arrow-left"></i> Назад към менюто</Link>

                <DetailsHeader />

                <DetailsMain />

                <Footer />
            </div>
        </>
    );
};
