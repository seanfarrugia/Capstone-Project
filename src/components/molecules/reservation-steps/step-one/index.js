import Input from "../../../atoms/input";
import styles from '../reservation-steps.module.css';

function StepOne() {
    return (
        <fieldset className={styles.fieldset}>
            <Input 
                type={'select'}
                id={'ocassion'}
                label={'Ocassion'}
                options={[
                    'Birthday',
                    'Wedding',
                    'Anniversary',
                ]} 
            />
            <Input 
                type={'number'}
                id={'number_of_diners'}
                label={'Number of Diners'}
                placeholder={'Number of Diners'}
            />
            <Input 
                type={'date'}
                id={'reservation_date'}
                label={'Reservation Date'}
                placeholder={'Reservation Date'}
            />
            <Input 
                type={'time'}
                id={'reservation_time'}
                label={'Reservation Time'}
                placeholder={'Reservation Time'}
            />
        </fieldset>
    );
}

export default StepOne;
