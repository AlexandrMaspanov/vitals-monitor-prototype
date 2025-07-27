import React from 'react';
import { useSelector } from "react-redux";
import VitalCard from '../vitalCard/VitalCard';
import styles from './VitalsBox.module.css';

function VitalsBox() {
    const { heartRate, bloodPressure, pulse, timestamp } = useSelector(state => state.vitals);

    return (
        <div className={styles.vitalsBox}>
            <VitalCard label="Heart Rate" value={heartRate} unit="bpm" />
            <VitalCard label="Blood Pressure" value={bloodPressure} unit="mmHg" />
            <VitalCard label="Pulse" value={pulse} unit="bpm" />
            <VitalCard label="Timestamp" value={timestamp ? new Date(timestamp).toLocaleTimeString() : null} unit="" />
        </div>
    );
}

export default VitalsBox;
