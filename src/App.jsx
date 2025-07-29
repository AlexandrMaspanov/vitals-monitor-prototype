import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VitalsMonitor from './features/VitalsDashboard/VitalsMonitor';
import { startVitalsMockStream } from './services/mockVitalsStream';
import { setAlerts } from './slices/alertsSlice';
import { addAlert } from './slices/alertsHistorySlice';
import { generateAlerts } from './utils/alertsUtils';
import './App.css';

function App() {
  const vitals = useSelector(state => state.vitals);
  const dispatch = useDispatch();

  useEffect(() => {
    startVitalsMockStream();
  }, []);

  useEffect(() => {
    const alerts = generateAlerts(vitals);
    dispatch(setAlerts(alerts));

    alerts.forEach(alert => {
      dispatch(addAlert(alert));
    })
  }, [vitals]);

  return (
    <>
      <VitalsMonitor />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        transition={Slide}
      />
    </>
  );
}

export default App;
