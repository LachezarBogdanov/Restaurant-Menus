import { useNavigate } from 'react-router-dom';
import styles from './Products.module.css'

export default function Products({
    products,
}) {

    const navigate = useNavigate();

    return (
        <>
        {
            products.map((product) => (
                 <div className={styles.product} onClick={() => (navigate('/details'))}>
                <div className={styles.productHeader}>
                    <img className={styles.picture} src={product.img} alt="eggsBenedict" />
                </div>
                <div className={styles.productInfo}>
                    <h3>{product.name}</h3>
                    <p className={styles.description}>
                        {product.description}
                    </p>
                    <p className={styles.price}>{product.price}</p>
                </div>
            </div>
            ))
        }
           
        </>
    );
};



