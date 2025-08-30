import RestaurantImage from '../../../assets/restauranfood.jpg'
import styles from './chicago.module.css';

function Chicago({title, subtitle, content}) {
    return (
        <section className={styles.chicagoHeader}>
            <div>
                <div className={styles.contentArea}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{content}</p>
                </div>
                <img src={RestaurantImage} alt={`${title} Restarant`} className={styles.headerImage} />
            </div>
        </section>
    );
}

export default Chicago;
