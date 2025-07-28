import React from 'react';
import { useSelector } from 'react-redux';
import AlertsList from '../alertsList/AlertsList';
import styles from './AlertsBox.module.css';

function AlertsBox() {
  const hasAlerts = useSelector(state => state.alerts.hasAlerts);
  const alerts = useSelector(state => state.alerts.list);
  const boxClass = `${styles.alertBox} fade ${hasAlerts ? 'visible' : 'hidden'}`;

  if (!hasAlerts) return null;

  return (
    <div className={boxClass}>
      <strong>Alerts:</strong>
      <AlertsList alerts={alerts} />
    </div>
  );
}

export default AlertsBox;
