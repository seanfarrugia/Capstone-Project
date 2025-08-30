import styles from './button.module.css';
import { Link } from 'react-router-dom';

function Button({
    variant = 'primary', 
    innerLink = true, 
    to = '',
    text = ''
}) {
    return (
        innerLink 
            ? <Link to={to} className={`${styles.button} ${styles?.[variant]}`}>{text}</Link> 
            : <button className={`${styles?.[variant]} ${styles.button}`}>{text}</button>
    );
}

export default Button;
