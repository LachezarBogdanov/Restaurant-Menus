import styles from './HomeCard.module.css'
import { useNavigate } from 'react-router-dom'


export default function HomeCard({
    title,
    index
}) {

    const navigate = useNavigate();

    const handleNavigation = () => {
        switch (title) {
            case "Кухня":
                navigate('/kitchen');
                break;
            case "Бар":
                navigate('/bar');
                break;
            case "Десерти":
                navigate('/deserts');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className={styles.card} onClick={() => handleNavigation()}>
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
