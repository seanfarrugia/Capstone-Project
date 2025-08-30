import Input from "../../atoms/input";
import styles from './booking-form.module.css';

function BookingForm({ formData, onChange, availableTimes  }) {
    return (
        <>
            <h1 className={styles.heading}>Book Now</h1>
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
                    value={formData?.ocassion}
                    onChange={(val) => onChange("ocassion", val)}
                />
                <Input 
                    type={'number'}
                    id={'number_of_diners'}
                    label={'Number of Diners'}
                    placeholder={'Number of Diners'}
                    value={formData?.number_of_diners}
                    onChange={(val) => onChange("number_of_diners", val)}
                />
                <Input 
                    type={'date'}
                    id={'reservation_date'}
                    label={'Reservation Date'}
                    placeholder={'Reservation Date'}
                    value={formData?.reservation_date}
                    onChange={(val) => onChange("reservation_date", val)}
                />
                <Input 
                    type={'select'}
                    id={'reservation_time'}
                    label={'Reservation Time'}
                    options={availableTimes && [...availableTimes]} 
                    value={formData?.reservation_time}
                    onChange={(val) => onChange("reservation_time", val)}
                />
            </fieldset>
        </>
    );
}

export default BookingForm;
