import styles from './HomeCard.module.css'

export default function HomeCard({
    title,
}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icon}><img src="kitchen.png" alt="kitchen image" /></div>
                <div>
                    <div className={styles.divider}></div>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        </>
    );
};
