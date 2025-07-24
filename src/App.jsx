import { useEffect } from 'react';
import { startVitalsMockStream } from './services/mockVitalsStream';
import VitalsDashboard from './features/VitalsDashboard';
import './App.css';

function App() {
  useEffect(() => {
    startVitalsMockStream();
  }, []);

  return (
    <>
      <h1>Vitals Monitor</h1>
      <VitalsDashboard />
    </>
  );
}

export default App;
