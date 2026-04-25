import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
        <div className={styles.footer}>
				<section className={styles.footerP}>
					<p className={styles.footerInfo}>
						Резервации
					</p>
					<p className={styles.footerInfo}>
						Контакти
					</p>
				</section>
				<section className={styles.copyP}>
					<p className={styles.copy}>
						&copy; 2026 Lachezar Bogdanov
					</p>
				</section>
			</div>
    </>
  );
};
