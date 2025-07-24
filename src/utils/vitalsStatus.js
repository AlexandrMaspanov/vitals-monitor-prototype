import THRESHOLDS from '../constants/thresholds';

export function checkVitalsStatus({ heartRate, pulse, bloodPressure }) {
    const alerts = [];

    if (heartRate && typeof heartRate === 'number') {
        if (heartRate < THRESHOLDS.heartRate.min) {
            alerts.push({
                type: 'low',
                field: 'heartRate',
                message: 'Low heart rate',
            })
        }
        if (heartRate > THRESHOLDS.heartRate.max) {
            alerts.push({
                type: 'high',
                field: 'heartRate',
                message: 'High heart rate',
            });
        }
    }

    if (pulse && typeof pulse === 'number') {
        if (pulse < THRESHOLDS.pulse.min) {
            alerts.push({
                type: 'low',
                field: 'pulse',
                message: 'Low pulse rate',
            });
        }
        if (pulse > THRESHOLDS.pulse.max) {
            alerts.push({
                type: 'high',
                field: 'pulse',
                message: 'High pulse rate',
            });
        }
    }

    if (bloodPressure && typeof bloodPressure === 'string') {
        const [sys, dia] = bloodPressure.split('/').map(Number);

        if ((sys && sys > THRESHOLDS.systolic.max) || (dia && dia > THRESHOLDS.diastolic.max)) {
            alerts.push({
                type: 'high',
                field: 'bloodPressure',
                message: 'High blood pressure',
            });
        }

        if (sys && sys < THRESHOLDS.systolic.min) {
            alerts.push({
                type: 'low',
                field: 'systolic',
                message: 'Low systolic pressure',
            });
        }

        if (dia && dia < THRESHOLDS.diastolic.min) {
            alerts.push({
                type: 'low',
                field: 'diastolic',
                message: 'Low diastolic pressure',
            });
        }
    }

    return alerts;
}
