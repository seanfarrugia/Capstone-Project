/* global fetchAPI, submitAPI */
import React, {useState, useReducer} from "react";
import { useNavigate  } from "react-router-dom";
import BookingForm from "../../molecules/booking-form";
import Button from "../../atoms/button";

import styles from './booking-page.module.css';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "dateChange":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function BookingPage() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [formData, setFormData] = useState({
        ocassion: "dinner",
        number_of_diners: "",
        reservation_date: "",
        reservation_time: availableTimes ? availableTimes[0] : ""
    });
    
    const handleChange = (id, value) => {
        setFormData(prev => ({
            ...prev,
            [id]: value,
            reservation_time: id === "reservation_date" && availableTimes ? availableTimes[0] : prev.reservation_time
        }));

        if (id === "reservation_date") {
            dispatch({ type: "dateChange", date: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = submitAPI(formData);
        response && navigate("/confirmation");
    }

    return (
        <div className={styles.formOuter}>
            <form className={styles.reservationForm} onSubmit={(e) => handleSubmit(e)}>
                <BookingForm formData={formData} onChange={handleChange} availableTimes={availableTimes} />
                <Button 
                    ariaLabel="Book a Table" 
                    type="submit" 
                    text="Book a Table" 
                    innerLink={false} 
                    variant="secondary" 
                    disabled={  formData.ocassion === '' ||
                                formData.number_of_diners === '' ||
                                formData.reservation_date === '' ||
                                formData.reservation_time === ''
                                ? true
                                : false
                            }
                />
            </form>
        </div>
    );
}

export default BookingPage;
