import React, { useEffect } from 'react';
import { startVitalsMockStream } from './services/mockVitalsStream';
import AlertsBox from './features/AlertsBox';
import VitalsDashboard from './features/VitalsDashboard';
import './App.css';

function App() {
  useEffect(() => {
    startVitalsMockStream();
  }, []);

  return (
    <>
      <h1>Vitals Monitor</h1>
      <AlertsBox />
      <VitalsDashboard />
    </>
  );
}

export default App;
