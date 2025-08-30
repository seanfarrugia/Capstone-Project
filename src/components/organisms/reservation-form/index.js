import React, {useState} from "react";
import StepCounter from "../../molecules/step-counter";
import StepOne from "../../molecules/reservation-steps/step-one";

import styles from './reservation-form.module.css';

function ReservationForm() {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
        case 1:
            return <StepOne />;
        // case 2:
        //   return <StepTwo />;
        // case 3:
        //   return <StepThree />;
        default:
            return <StepOne />;
        }
    };

    return (
        <form className={styles.reservationForm}>
            <StepCounter 
                stepCount={[
                    'Reservation Date',
                    'Personal Details',
                    'Confirmation'
                ]} 
                activeStep={step}
            />
            {renderStep()}
        </form>
    );
}

export default ReservationForm;
