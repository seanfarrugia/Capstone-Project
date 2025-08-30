import Button from '../button';
import styles from './special-card.module.css';

function SpecialCard({special}) {
    return (
        <article className={styles.specialCard}>
            <img src={special.image} alt={`${special.title}`} />
            <div className={styles.cardTitlePrice}>
                <h3>{special.title}</h3>
                <span>${special.price.toFixed(2)}</span>  
            </div>
            <p>{special.content}</p>
            <Button innerLink to='/' text='Order for Delivery' variant='tertiary' />
        </article>
    );
}

export default SpecialCard;
