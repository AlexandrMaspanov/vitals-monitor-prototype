import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startVitalsMockStream } from './services/mockVitalsStream';
import { setAlerts } from './slices/alertsSlice';
import VitalsMonitor from './features/VitalsDashboard/VitalsMonitor';
import { generateAlerts } from './utils/alertsUtils';

function App() {
  const vitals = useSelector(state => state.vitals);
  const dispatch = useDispatch();

  useEffect(() => {
    startVitalsMockStream();
  }, []);

  useEffect(() => {
    const alerts = generateAlerts(vitals);
    dispatch(setAlerts(alerts));
  }, [vitals]);

  return (
    <>
      <VitalsMonitor />
    </>
  );
}

export default App;
