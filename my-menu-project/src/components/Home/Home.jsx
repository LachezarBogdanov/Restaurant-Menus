import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import HomeCard from '../HomeCard/HomeCard';
import styles from './Home.module.css'

const cardsTitles = ['Кухня', 'Бар', 'Десерти'];

export default function Home() {
	return (
		<>
		<BurgerMenu />
			<div className="head">
				<img src='/home.jpg' alt="asd" className={styles.homeImg} />
				<h1 className={styles.name}>Ocean View</h1>
				<div className={styles.overlay}></div>
			</div>

			<div className={styles.container}>

				{
					cardsTitles.map((title, index) => (
						<HomeCard key={index} title={title} index={index}/>
					))
				}

			</div>


			<Footer />
		</>
	);
};
