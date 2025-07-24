import React from 'react';
import { useSelector } from 'react-redux';
import { checkVitalsStatus } from '../utils/thresholds';

function AlertsBox() {
    const { heartRate, bloodPressure, pulse } = useSelector(state => state.vitals);
    const alerts = checkVitalsStatus({ heartRate, bloodPressure, pulse });

    if (alerts.length === 0) return null;

    return (
    <div>
      <strong>Alerts:</strong>
      <ul>
        {alerts.map((alert, idx) => <li key={idx}>{alert}</li>)}
      </ul>
    </div>
  );
}

export default AlertsBox;
