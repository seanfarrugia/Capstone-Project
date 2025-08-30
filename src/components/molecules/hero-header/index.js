import Button from '../../atoms/button';
import RestaurantImage from '../../../assets/restauranfood.jpg'
import styles from './hero-header.module.css';

function HeroHeader({title, subtitle, content}) {
    return (
        <section className={styles.heroHeader}>
            <div>
                <div className={styles.contentArea}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{content}</p>
                    <Button to='/reservation' text='Reserve a Table' innerLink />
                </div>
                <img src={RestaurantImage} alt={`${title} Restarant Image`} className={styles.headerImage} />
            </div>
        </section>
    );
}

export default HeroHeader;
