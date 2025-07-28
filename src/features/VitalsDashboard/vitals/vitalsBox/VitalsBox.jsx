import React, { useMemo } from 'react';
import { useSelector } from "react-redux";
import { getVitalsList } from '../../../../utils/vitalsUtils';
import VitalCard from '../vitalCard/VitalCard';
import styles from './VitalsBox.module.css';

function VitalsBox() {
    const vitals = useSelector(state => state.vitals);
    const vitalsList = useMemo(() => getVitalsList(), []) || [];

    return (
        <div className={styles.vitalsBox}>
            {vitalsList.map(vital => (
                <VitalCard
                    key={vital.key}
                    value={vitals?.[vital.key]}
                    label={vital.label}
                    unit={vital.unit}
                    threshold={vital.threshold}
                />
            ))}
        </div>
    );
}

export default VitalsBox;
