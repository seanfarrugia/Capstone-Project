import styles from './button.module.css';
import { Link } from 'react-router-dom';

function Button({
    variant = 'primary', 
    innerLink = true, 
    to = '',
    text = '',
    type='',
    ariaLabel=""
}) {
    return (
        innerLink 
            ? <Link to={to} aria-label={ariaLabel} className={`${styles.button} ${styles?.[variant]}`}>{text}</Link> 
            : <button type={type} aria-label={ariaLabel} className={`${styles?.[variant]} ${styles.button}`}>{text}</button>
    );
}

export default Button;
