import React from "react";

import styles from "./input.module.css";

function Input({ 
    type, 
    placeholder, 
    id, 
    label, 
    min = 0, 
    max = 150, 
    options = [],
    value, 
    onChange
}) {
    switch(type) {
        case 'textarea':
            return (
                label ? (
                    <div className={styles.formGroup}>
                        <label htmlFor={id}>{label}</label>
                        <textarea 
                            id={id} 
                            placeholder={placeholder} 
                            type={type} 
                            className="formInput" 
                            onChange={(e) => onChange(e.target.value)}
                            value={value}
                            min={min} 
                            max={max} />
                    </div>
                ) : <textarea 
                        id={id} 
                        placeholder={placeholder} 
                        type={type} 
                        className="formInput" 
                        onChange={(e) => onChange(e.target.value)}
                        value={value}
                        min={min} 
                        max={max} />
            )
        case 'range':
            return (
                label ? (
                    <div className={styles.formGroup}>
                        <label htmlFor={id}>{label}</label>
                        <input id={id} placeholder={placeholder} type={type} min={min} max={max} className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
                    </div>
                ) : <input id={id} placeholder={placeholder} type={type} min={min} max={max} className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
            )
        case 'select':
            return (
                label ? (
                    <div className={styles.formGroup}>
                        <label htmlFor={id}>{label}</label>
                        <select id={id} className="formDropdown" onChange={(e) => onChange(e.target.value)}>
                            {options.map((option, index) => {
                                return <option key={index} value={option.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '')}>{option}</option>
                            })}
                        </select>
                    </div>
                ) : <select id={id} className="formDropdown" onChange={(e) => onChange(e.target.value)}>
                        {options.map((option, index) => {
                            return <option key={index} value={option.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '')}>{option}</option>
                        })}
                    </select>
            )
        case 'time':
            return (
                label ? (
                    <div className={styles.formGroup}>
                        <label htmlFor={id}>{label}</label>
                        <input id={id} placeholder={placeholder} type={type} step="60" className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
                    </div>
                ) : <input id={id} placeholder={placeholder} type={type} step="60" className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
            )
        default:
            return (
                label ? (
                    <div className={styles.formGroup}>
                        <label htmlFor={id}>{label}</label>
                        <input id={id} placeholder={placeholder} type={type} className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
                    </div>
                ) : <input id={id} placeholder={placeholder} type={type} className="formInput" onChange={(e) => onChange(e.target.value)} value={value} />
            )
    }
}

export default Input;
