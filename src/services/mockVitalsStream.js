import { updateVitals } from "../slices/vitalsSlice";
import { store } from '../app/store';
import { getRandomInt } from "../utils/getRandomInt";
import THRESHOLDS from '../constants/thresholds';

// Random vitals generation
function generateVitals() {
    const heartRate = getRandomInt(THRESHOLDS.heartRate.min - 10, THRESHOLDS.heartRate.max + 10); // 50-110
    const pulse = getRandomInt(THRESHOLDS.pulse.min - 10, THRESHOLDS.pulse.max + 10); // 50-110
    const systolic = getRandomInt(THRESHOLDS.systolic.min - 10, THRESHOLDS.systolic.max + 10); // 80-150
    const diastolic = getRandomInt(THRESHOLDS.diastolic.min - 10, THRESHOLDS.diastolic.max + 10); // 50-100

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
