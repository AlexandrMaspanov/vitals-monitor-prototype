import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startVitalsMockStream } from './services/mockVitalsStream';
import { checkVitalsStatus } from './utils/vitalsStatus';
import { setAlerts } from './slices/alertsSlice';
import VitalsDashboard from './features/VitalsDashboard';
import AlertsBox from './features/alerts/AlertsBox';
// import './App.css';

function App() {
  const vitals = useSelector(state => state.vitals);
  const dispatch = useDispatch();

  useEffect(() => {
    startVitalsMockStream();
  }, []);

  useEffect(() => {
    const alerts = checkVitalsStatus(vitals);
    dispatch(setAlerts(alerts));
  }, [vitals]);

  return (
    <>
      <h1>Vitals Monitor</h1>
      <VitalsDashboard />
      <AlertsBox />
    </>
  );
}

export default App;
