import React from 'react';
import { useSelector } from 'react-redux';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/AlertsBox.module.css';

function AlertsBox() {
  const alerts = useSelector(state => state.alerts.list);
  const hasAlerts = alerts.length > 0;
  const boxClass = `${styles.alertBox} ${globalStyles.fade} ${hasAlerts ? globalStyles.visible : globalStyles.hidden}`;

  if (!hasAlerts) return null;

  return (
    <div className={boxClass}>
      <strong>Alerts:</strong>
      <ul>
        {alerts.map((alert) => <li key={alert}>{alert}</li>)}
      </ul>
    </div>
  );
}

export default AlertsBox;
