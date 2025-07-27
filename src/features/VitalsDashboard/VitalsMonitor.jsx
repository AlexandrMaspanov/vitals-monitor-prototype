import React from 'react';
import VitalsBox from './vitals/vitalsBox/VitalsBox';
import AlertsBox from './alerts/alertsBox/AlertsBox';
import styles from './VitalsMonitor.module.css';

const VitalsMonitor = () => {
  return (
    <div className={`${styles.wrapper} container stack`}>
      <h1 className={styles.title}>Vitals Dashboard</h1>
      <VitalsBox />
      <AlertsBox />
    </div>
  );
}

export default VitalsMonitor;
