import React from 'react';
import { ICON_MAP } from '../../../../constants';
import styles from './AlertsItem.module.css';
import { formatAlertMessage } from '../../../../utils/alertsUtils';

const AlertItem = ({ alert }) => {
  const IconComponent = ICON_MAP[alert.metricKey];

  return (
    <>
      {IconComponent ? (
        <IconComponent className={styles.icon} />
      ) : (
        <span className={styles.icon}>⚠️</span>
      )}
      {formatAlertMessage(alert)}
    </>
  );
}

export default AlertItem;
