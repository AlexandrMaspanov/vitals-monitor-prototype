import { updateVitals } from "../slices/vitalsSlice";
import { store } from '../app/store';
import { getRandomInt } from "../utils/getRandomInt";
import ALERT_CONFIG from '../constants/alertConfig';

// Random vitals generation
function generateVitals() {
    const heartRate = getRandomInt(ALERT_CONFIG.heartRate.threshold.min - 10, ALERT_CONFIG.heartRate.threshold.max + 10); // 50-110
    const pulse = getRandomInt(ALERT_CONFIG.pulse.threshold.min - 10, ALERT_CONFIG.pulse.threshold.max + 10); // 50-110
    const systolic = getRandomInt(ALERT_CONFIG.systolic.threshold.min - 10, ALERT_CONFIG.systolic.threshold.max + 10); // 80-150
    const diastolic = getRandomInt(ALERT_CONFIG.diastolic.threshold.min - 10, ALERT_CONFIG.diastolic.threshold.max + 10); // 50-100

    return {
        heartRate,
        pulse,
        bloodPressure: {systolic, diastolic},
        timestamp: new Date().toISOString()
    };
}

// Starting the update cycle
export function startVitalsMockStream(interval = 2 * 1000) {
    setInterval(() => {
    // setTimeout(() => {
        const vitals = generateVitals();
        store.dispatch(updateVitals(vitals));
    }, interval);
}
