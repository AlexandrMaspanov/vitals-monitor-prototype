import React from 'react';
import { formatValue } from '../../../../utils/vitalsUtils';
import styles from './VitalCard.module.css';

const VitalCard = ({ label, unit, threshold, value }) => {
    const min = threshold?.min;

    const max = threshold?.max;

    let direction;
    if (value == null) direction = null;
    else if (typeof min === 'number' && typeof max === 'number') {
        if (max && value > max) direction = 'high';
        if (min && value < min) direction = 'low';
    } else {
        if (value.systolic == null || value.diastolic == null) {
            direction = null;
        } else {
            if (value?.systolic > max?.systolic || value?.diastolic > max?.diastolic) direction = 'high';
            if (value?.systolic < min?.systolic || value?.diastolic < min?.diastolic) direction = 'low';
        }
    }

    return (
        <div className={`${styles.card} ${direction} Flex vertical`}>
            <p><strong className={styles.label}>{label}</strong></p>
            <p>
                <span
                    className={styles.value}
                >
                    {formatValue(value)}
                </span>
                <span className={styles.unit}>{unit}</span>
            </p>
            <div className={styles.thresholds}>
                {typeof min === 'number' && typeof max === 'number' ? (
                    <>
                        <p>min {min}</p>
                        <p>max {max}</p>
                    </>
                ) : (
                    <>
                        {min && (
                            <p>min {min?.systolic}/{min?.diastolic}</p>
                        )}
                        {max && (
                            <p>max {max?.systolic}/{max?.diastolic}</p>
                        )}
                    </>
                )
                }
            </div>
        </div>
    );
}

export default React.memo(VitalCard);
