import styles from './HomeCard.module.css'

export default function HomeCard({
    title,
    index
}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icon}><img src={
                    index == 0 ? 'kitchen.png' :
                    index == 1 ? 'drinks.png' :
                    index == 2 ? 'desert.png' : ''
                } alt="kitchen image" /></div>
                <div>
                    <div className={styles.divider}></div>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        </>
    );
};
