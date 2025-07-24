import { updateVitals } from "../slices/vitalsSlice";
import store from '../app/store';

// Random vitals generation
function generateVitals() {
    const heartRate = Math.floor(Math.random() * 40) + 60; // 60-100
    const pulse = Math.floor(Math.random() * 40) + 60; // 60-100
    const systolic = Math.floor(Math.random() * 30) + 120; // 120-150
    const diastolic = Math.floor(Math.random() * 20) + 80; // 80-100

    return {
        heartRate,
        pulse,
        bloodPressure: `${systolic}/${diastolic}`,
        timestamp: new Date().toISOString()
    };
}

// Starting the update cycle
export function startVitalsMockStream(interval = 2000) {
    setInterval(() => {
        const vitals = generateVitals();
        store.dispatch(updateVitals(vitals));
    }, interval);
}
