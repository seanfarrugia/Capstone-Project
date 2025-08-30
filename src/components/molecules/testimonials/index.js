import TestimonialCard from '../../atoms/testimonial-card';
import styles from './testimonials.module.css';

function Testimonials({testimonials}) {
    return (
        <section className={styles.testimonials}>
            <h2>Testimonials</h2>
            <div className={styles.carousel}>
                {testimonials.map((value, index) => {
                    return <TestimonialCard testimonial={value} key={index} />
                })}
            </div>
        </section>
    );
}

export default Testimonials;
