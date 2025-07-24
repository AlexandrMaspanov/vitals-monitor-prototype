import React from 'react';
import { useSelector } from 'react-redux';
import AlertsList from './AlertsList';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/AlertsBox.module.css';

function AlertsBox() {
  const hasAlerts = useSelector(state => state.alerts.hasAlerts);
  const alerts = useSelector(state => state.alerts.list);
  const boxClass = `${styles.alertBox} ${globalStyles.fade} ${hasAlerts ? globalStyles.visible : globalStyles.hidden}`;

  if (!hasAlerts) return null;

  return (
    <div className={boxClass}>
      <strong>Alerts:</strong>
      <AlertsList alerts={alerts} />
    </div>
  );
}

export default AlertsBox;
