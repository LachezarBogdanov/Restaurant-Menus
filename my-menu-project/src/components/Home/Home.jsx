import Footer from '../Footer/Footer';
import styles from './Home.module.css'

export default function Home() {
	return (
		<>
			<div className="head">
				<img src='/home.jpg' alt="asd" className={styles.homeImg} />
				<div className={styles.overlay}></div>
			</div>

			<div className={styles.container}>

				<div className={styles.card}>
					<div className={styles.icon}><img src="kitchen.png" alt="kitchen image" /></div>
					<div>
						<div className={styles.divider}></div>
						<div className={styles.title}>Кухня</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}><img src="drinks.png" alt="drinks image" /></div>
					<div>
						<div className={styles.divider}></div>
						<div className={styles.title}>Бар</div>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}><img src="desert.png" alt="desert image" /></div>
					<div>
						<div className={styles.divider}></div>
						<div className={styles.title}>Десерти</div>
					</div>
				</div>

			</div>


			<Footer />
		</>
	);
};
