import THRESHOLDS from '../constants/thresholds';

export function checkVitalsStatus({ heartRate, pulse, bloodPressure }) {
    if (!bloodPressure) return [];
    const [sys, dia] = bloodPressure.split('/').map(Number);

    const alerts = [];

    if (heartRate < THRESHOLDS.heartRate.min || heartRate > THRESHOLDS.heartRate.max) {
        alerts.push('Heart rate out of range');
    }

    if (pulse < THRESHOLDS.pulse.min || pulse > THRESHOLDS.pulse.max) {
        alerts.push("Pulse out of range");
    }

    if (sys > THRESHOLDS.systolic.max || dia > THRESHOLDS.diastolic.max) {
        alerts.push('High blood pressure');
    }

    if (sys < THRESHOLDS.systolic.min) {
        alerts.push ('Low systolic pressure');
    }

    if (dia < THRESHOLDS.diastolic.min) {
        alerts.push ('Low diastolic pressure');
    }

    return alerts;
}
