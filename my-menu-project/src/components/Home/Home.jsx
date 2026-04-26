import Footer from '../Footer/Footer';
import HomeCard from '../HomeCard/HomeCard';
import styles from './Home.module.css'

const cardsTitles = ['Кухня', 'Бар', 'Десерти'];

export default function Home() {
	return (
		<>
			<div className="head">
				<img src='/home.jpg' alt="asd" className={styles.homeImg} />
				<div className={styles.overlay}></div>
			</div>

			<div className={styles.container}>

				{
					cardsTitles.map((title) => (
						<HomeCard title={title}/>
					))
				}

			</div>


			<Footer />
		</>
	);
};
