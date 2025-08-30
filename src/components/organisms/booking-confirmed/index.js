import Button from "../../atoms/button";

import styles from './booking-confirmed.module.css';

function BookingConfirmed() {

    return (
        <div className={styles.successMsg}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <h2>Booking Successful!</h2>
            <Button innerLink to="/" text="Return Home" />
        </div> 
    );
}

export default BookingConfirmed;
