import React from 'react';
import { formatValue } from '../../../../utils/vitalsUtils';
import styles from './VitalCard.module.css';

const VitalCard = ({ label, value, unit }) => {
    return (
        <div className={`${styles.card} Flex vertical`}>
            <p><strong className={styles.label}>{label}</strong></p>
            <p><span className={styles.value}>{formatValue(value)}</span> <span className={styles.unit}>{unit}</span></p>
        </div>
    );
}

export default VitalCard;
