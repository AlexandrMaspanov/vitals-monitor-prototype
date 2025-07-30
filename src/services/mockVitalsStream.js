import { updateVitals } from "../slices/vitalsSlice";
import { store } from '../app/store';
import { getRandomInt } from "../utils/getRandomInt";
import VITALS_CONFIG from '../constants/vitalsConfig';

// Random vitals generation
function generateVitals() {
    const heartRate = getRandomInt(VITALS_CONFIG.heartRate.threshold.min - 10, VITALS_CONFIG.heartRate.threshold.max + 10); // 50-110
    const systolic = getRandomInt(VITALS_CONFIG.systolic.threshold.min - 10, VITALS_CONFIG.systolic.threshold.max + 10); // 80-150
    const diastolic = getRandomInt(VITALS_CONFIG.diastolic.threshold.min - 10, VITALS_CONFIG.diastolic.threshold.max + 10); // 50-100
    const pulse = getRandomInt(VITALS_CONFIG.pulse.threshold.min - 10, VITALS_CONFIG.pulse.threshold.max + 10); // 50-110

    return {
        heartRate,
        bloodPressure: {systolic, diastolic},
        pulse,
        timestamp: new Date().toLocaleTimeString(),
    };
}

// Starting the update cycle
export function startVitalsMockStream(interval = 5 * 1000) {
    setInterval(() => {
        const vitals = generateVitals();
        store.dispatch(updateVitals(vitals));
    }, interval);
}
