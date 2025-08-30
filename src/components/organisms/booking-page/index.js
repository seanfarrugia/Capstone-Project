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
    
    const [formData, setFormData] = useState({
        ocassion: "",
        number_of_diners: "",
        reservation_date: "",
        reservation_time: ""
    });

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const handleChange = (id, value) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
        if (id === "reservation_date") {
            dispatch({ type: "dateChange", date: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitAPI(formData);
        navigate("/confirmation");
    }

    return (
        <div className={styles.formOuter}>
            <form className={styles.reservationForm} onSubmit={(e) => handleSubmit(e)}>
                <BookingForm formData={formData} onChange={handleChange} availableTimes={availableTimes} />
                <Button ariaLabel="Book a Table" type="submit" text="Book a Table" innerLink={false} variant="secondary" />
            </form>
        </div>
    );
}

export default BookingPage;
