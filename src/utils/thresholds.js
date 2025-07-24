export const THRESHOLDS = {
    heartRate: { min: 60, max: 100 },
    pulse: { min: 60, max: 100 },
    systolic: { max: 140 },
    diastolic: { max: 90 }
};

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

    return alerts;
}
