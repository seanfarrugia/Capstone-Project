import SpecialCard from '../../atoms/special-card';
import Button from '../../atoms/button';
import styles from './specials.module.css';

function Specials({specials}) {
    return (
        <section className={styles.specials}>
            <div className={styles.titleSection}>
                <h2>Specials</h2>
                <Button to='/' innerLink text='Order Online' variant='secondary' />
            </div>  
            <div className={styles.carousel}>
                {specials.map((value, index) => {
                    return <SpecialCard special={value} key={index} />
                })}
            </div>
        </section>
    );
}

export default Specials;
