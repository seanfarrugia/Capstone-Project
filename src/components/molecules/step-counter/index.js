import styles from './step-counter.module.css';

function StepCounter({stepCount, activeStep}) {
    return (
        <div className={styles.stepCountContainer}>
            {stepCount.map((step, i) => (
                <div className={styles.stepContent} key={i}>
                    <span className={`${styles.step} ${activeStep === i+1 && styles.active}`}>{i + 1}</span>
                    {step}
                </div>
            ))}
        </div>
    );
}

export default StepCounter;
