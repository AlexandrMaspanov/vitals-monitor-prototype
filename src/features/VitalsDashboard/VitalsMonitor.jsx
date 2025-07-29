import React from 'react';
import VitalsBox from './vitals/vitalsBox/VitalsBox';
import AlertsBox from './alerts/alertsBox/AlertsBox';
import ClearAlertHistoryButton from './actionButtons/clear/ClearAlertHistoryButton';
import EmergencyButton from './actionButtons/emergency/EmergencyButton';
import styles from './VitalsMonitor.module.css';

const VitalsMonitor = () => {
  return (
    <div className={`${styles.wrapper} container stack`}>
      <h1 className={styles.title}>Vitals Dashboard</h1>
      <VitalsBox />
      <div className={styles.alertsActions}>
        <ClearAlertHistoryButton />
        <EmergencyButton />
      </div>
      <AlertsBox />
    </div>
  );
}

export default VitalsMonitor;
